"use client";

import { NoteForm } from ".";

export default function NewNotePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create a New Note</h1>
      <NoteForm />
    </div>
  );
}
