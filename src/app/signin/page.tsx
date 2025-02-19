// app/signin/page.tsx
"use client";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Sign in to your account</h1>
      <button
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        className="mb-2 p-2 border rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}
