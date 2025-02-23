import React from "react";
import Link from "next/link";

export default function NewNotebutton() {
  return (
    <div>
      <Link href="/new">
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-[5.75px] px-4 rounded">
          New Note
        </button>
      </Link>
    </div>
  );
}
