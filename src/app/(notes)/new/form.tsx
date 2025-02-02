"use client";

import { useState } from "react";

export default function NoteForm() {
  // Dummy data for testing
  const [title, setTitle] = useState("My Sample Note");
  const [content, setContent] = useState(
    "This is some dummy content for the note."
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert(`Note Saved!\nTitle: ${title}\nContent: ${content}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Content</label>
        <textarea
          className="w-full p-2 border rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Save Note
      </button>
    </form>
  );
}
