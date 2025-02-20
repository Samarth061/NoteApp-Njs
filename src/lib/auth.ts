import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
    ],
    pages: {
      signIn: "/signin", 
    },
    session: {
      strategy: "jwt",
    },
    debug: true,
    callbacks: {
      async signIn({ user, account, profile }) {
        if (!account) return false; 
  
        // Only run custom linking logic for Google
        if (account.provider === "google") {
          // Check if an Account record for this Google account exists
          const existingAccount = await prisma.account.findFirst({
            where: {
              provider: account.provider,
              providerAccountId: account.providerAccountId,
            },
          });
  
          // If the account doesn't exist, attempt to link it
          if (!existingAccount) {
            if (!user.email) return false; // Ensure email exists
  
            // Check if a user with this email already exists
            const existingUser = await prisma.user.findUnique({
              where: { email: user.email },
            });
  
            if (existingUser) {
              // Create a new Account record linking this Google account with the existing user
              await prisma.account.create({
                data: {
                  userId: existingUser.id,
                  type: account.type!,
                  provider: account.provider,
                  providerAccountId: account.providerAccountId,
                  expires_at: account.expires_at ?? null,
                  token_type: account.token_type ?? null,
                  scope: account.scope ?? null,
                },
              });
            }
          }
        }
        return true; // Allow sign-in
      },
  
      async redirect({ url, baseUrl }) {
        // After a successful sign in, always redirect to the dashboard.
        if (url === baseUrl || url === `${baseUrl}/signin`) {
          return `${baseUrl}/dashboard`;
        }
        return url;
      },
      async jwt({ token, user }) {
        if (user) {
          token.id = user.id;
        }
        return token;
      },
      async session({ session, token }) {
        if (session.user) {
          session.user.id = token.id as string;
        }
        return session;
      },
    },
  };