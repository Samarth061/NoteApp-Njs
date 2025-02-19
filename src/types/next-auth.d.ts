import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;  // Ensure TypeScript knows the user object has an `id`
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface User {
    id: string;
  }
}
