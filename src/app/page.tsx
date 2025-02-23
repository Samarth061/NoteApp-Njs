"use client";
import { signIn } from "next-auth/react";

export default function SignInButton() {
  return (
    <div className="max-w-6xl flex flex-col items-center justify-center mt-20">
      <h1 className="text-2xl font-bold p-10">
        Welcome to NoteIt! Sign in to try out my app!
      </h1>

      <button
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Sign In with Google
      </button>
    </div>
  );
}
