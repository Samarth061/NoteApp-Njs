"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function NewNotePage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  if (!session) {
    return <p>You must be logged in to create a note.</p>;
  }

  const handleCreateNote = async () => {
    setError(""); // Reset errors

    const res = await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      router.push("/");
    } else {
      const data = await res.json();
      setError(data.error || "Failed to create note.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Create New Note</h1>
      {error && <p className="text-red-500">{error}</p>}
      <input
        className="block w-full p-2 border my-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="block w-full p-2 border my-2"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="p-2 bg-blue-500 text-white" onClick={handleCreateNote}>
        Save
      </button>
    </div>
  );
}
