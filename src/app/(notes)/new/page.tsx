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
  const [creating, _setCreating] = useState(false);

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
      router.push("/dashboard");
    } else {
      const data = await res.json();
      setError(data.error || "Failed to create note.");
    }
  };

  return (
    <div className="pl-4 max-w-5xl">
      <h1 className="pl-[0.5px] text-3xl font-bold mb-2">New Note</h1>
      {error && <p className="text-red-500">{error}</p>}

      <div className="max-h-96 overflow-y-auto px-1">
        <input
          className="block w-full p-2 border-2 border-gray-600 bg-gray-800 text-white 
             placeholder-gray-400 focus:border-blue-500 focus:ring-2 
             focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 
             my-2 rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="h-56 w-full p-2 border-2 border-gray-600 bg-gray-800 text-white 
             placeholder-gray-400 focus:border-blue-500 focus:ring-2 
             focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 
             my-2 rounded resize-none"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="flex max-w-5xl justify-between mt-2 ml-1 mr-1">
        <button
          className="w-[106.9px] h-[40px] bg-green-500 text-white rounded"
          onClick={handleCreateNote}
        >
          {creating ? "Creating..." : "Create"}
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => router.push("/dashboard")}
        >
          {creating ? "Discarding..." : "Discard"}
        </button>
      </div>
    </div>
  );
}
