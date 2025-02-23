"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex w-full justify-between items-center bg-blue-600 p-4">
        <Link href="/dashboard">
          <h1 className="font-bold text-lg ml-10">Noteit</h1>
        </Link>

        <div className="flex mr-10 text-sm justify-between gap-4">
          <Link href="/">
            <button>Switch</button>
          </Link>
          <Link href="/dashboard">
            <button>Dashboard</button>
          </Link>
          <button onClick={() => signOut({ callbackUrl: "/" })}>
            Sign out
          </button>
        </div>
      </header>
    </>
  );
}
