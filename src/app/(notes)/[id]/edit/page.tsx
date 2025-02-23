"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import DeleteButton from "../../components/DeleteButton";

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
    <div className="pl-4 max-w-5xl">
      <div className="flex flex-row justify-between">
        <h1 className="pl-[0.5] text-3xl font-bold mb-2">Edit Note</h1>
        <DeleteButton
          className="w-[106.9] h-[40] bg-red-500 text-white rounded"
          id={id as string}
        />
      </div>

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
          onClick={handleUpdateNote}
        >
          {updating ? "Updating..." : "Save"}
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={() => router.push("/dashboard")}
        >
          {updating ? "Discarding..." : "Don't save"}
        </button>
      </div>
    </div>
  );
}
