import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex w-full justify-between items-center bg-blue-600 p-4">
        <h1 className="font-bold text-lg ml-10">Noteit</h1>
        <div className="flex mr-10 text-sm justify-between gap-4">
          <Link href="/signin">
            <button>Switch</button>
          </Link>
          <Link href="/dashboard">
            <button>Dashboard</button>
          </Link>
          <button onClick={() => signOut({ callbackUrl: "/signin" })}>
            Sign out
          </button>
        </div>
      </header>
    </>
  );
}
