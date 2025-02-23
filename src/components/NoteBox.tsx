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

export default function NoteBox({ searchTerm, setNoteCount }: NoteBoxProps) {
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
    <div className="container mx-auto">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mt-2">
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            className="flex flex-col cursor-pointer p-4 border-2 rounded-md bg-[#0d0e0f] hover:border-blue-700 border-[#0a4d92] transition flex-grow h-[135px]"
            aria-label={`Note titled ${note.title}`}
          >
            <h2 className="text-xl font-bold mb-2 text-white truncate">
              {note.title}
            </h2>
            <p className="text-sm text-gray-400 mb-3 truncate">
              {note.content}
            </p>
            <div className="flex justify-between">
              <Link
                href={{
                  pathname: `/${note.id}`,
                  query: { id: note.id },
                }}
                aria-label={`View note titled ${note.title}`}
              >
                <button className="px-4 py-[5.75px] text-white bg-blue-500 rounded ">
                  View
                </button>
              </Link>
              <Link
                href={{
                  pathname: `/${note.id}/edit`,
                }}
                aria-label={`Edit note titled ${note.title}`}
              >
                <button className="px-4 py-[5.75px] text-white bg-gray-500 rounded ">
                  Edit
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
