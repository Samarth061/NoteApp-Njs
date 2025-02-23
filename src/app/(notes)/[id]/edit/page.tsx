"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function EditPage() {
  const { data: session } = useSession();
  const { id } = useParams();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (id) {
      fetch(`/api/notes/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setContent(data.content);
        })
        .catch(() => setError("Failed to load note."));
    }
  }, [id]);

  if (!session) {
    return <p>You must be logged in to create a note.</p>;
  }

  const handleUpdateNote = async () => {
    setError("");

    if (!title.trim() || !content.trim()) {
      setError("Title and content cannot be empty.");
      return;
    }

    setUpdating(true);

    const res = await fetch("/api/notes", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, title, content }),
    });

    if (res.ok) {
      router.push("/dashboard");
    } else {
      const data = await res.json();
      setError(data.error || "Failed to update note.");
    }

    setUpdating(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Edit Note</h1>
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
      <button
        className="p-2 bg-green-500 text-white"
        onClick={handleUpdateNote}
      >
        {updating ? "Updating..." : "Save"}
      </button>
    </div>
  );
}
