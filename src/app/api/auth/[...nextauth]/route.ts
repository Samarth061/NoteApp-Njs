// app/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
 // Adjust the import path as needed
import { authOptions } from "@/lib/auth";



const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
