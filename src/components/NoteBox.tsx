import React, { useEffect, useState } from "react";
import Link from "next/link";

type Note = {
  id: string;
  title: string;
  content: string;
};

type NoteBoxProps = {
  searchTerm: string;
  noteCount: number;
  setNoteCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function NoteBox({
  searchTerm,
  noteCount,
  setNoteCount,
}: NoteBoxProps) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotes() {
      try {
        //Get request from notes API route
        const response = await fetch("/api/notes");
        if (!response.ok) throw new Error("Failed to fetch notes");

        //Data stored as js object
        const data = await response.json();
        setNotes(data);
        setNoteCount(data.length);
      } catch (error) {
        console.error("Error loading notes:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchNotes();
  }, [setNoteCount]);

  //Search filter to find notes
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading notes...</p>;
  if (notes.length === 0) return <p>No notes found.</p>;

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2">
      {filteredNotes.map((note) => (
        <div
          key={note.id}
          className="cursor-pointer p-4 border-2 rounded-md bg-[#0d0e0f] hover:border-blue-700 border-[#0a4d92] transition"
        >
          <h2 className="text-xl font-bold mb-2">{note.title}</h2>
          <p className="text-sm text-gray-400 mb-4">
            {note.content.length > 100
              ? `${note.content.slice(0, 97)}...`
              : note.content}
          </p>
          <div className="flex justify-between">
            <Link
              className="px-4 py-2 text-white bg-blue-500 rounded"
              href={{
                pathname: `/${note.id}`,
                query: { id: note.id },
              }}
            >
              View
            </Link>
            <button className="px-4 py-2 text-white bg-gray-500 rounded">
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
