import Link from "next/link";

export default function SignInButton() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-2xl font-bold p-10">
        Welcome to NoteIt! Sign in to try out my app!
      </h1>
      <Link href="/signin">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Sign In
        </button>
      </Link>
    </div>
  );
}
