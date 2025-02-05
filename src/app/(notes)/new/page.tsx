"use client";

import { NoteForm } from ".";

export default function NewNotePage() {
  return (
    <div className="flex flex-col pl-14 pt-4">
      <h1 className="text-[28px] font-bold mb-4">Create a New Note</h1>
      <NoteForm />
    </div>
  );
}
