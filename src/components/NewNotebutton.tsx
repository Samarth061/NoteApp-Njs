import React from "react";
import Link from "next/link";

export default function NewNotebutton() {
  return (
    <div>
      <Link href="/new">
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-l font-bold py-2 px-4 rounded mt-3">
          New Note
        </button>
      </Link>
    </div>
  );
}
