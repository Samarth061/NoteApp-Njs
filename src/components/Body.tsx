"use client";

import React, { useState } from "react";
import NewNotebutton from "./NewNotebutton";
import SearchNotes from "./SearchNotes";
import NoteBox from "./NoteBox";
import NoteCount from "./NoteCount";

export default function () {
  const [searchTerm, setSearchTerm] = useState("");
  const [noteCount, setNoteCount] = useState(0);

  return (
    <div className="flex flex-col gap-3 ml-10 p-4 ">
      <p className="font-bold text-2xl mt-1">Notes</p>
      <NewNotebutton />
      <SearchNotes searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NoteBox
        searchTerm={searchTerm}
        noteCount={noteCount}
        setNoteCount={setNoteCount}
      />
      <NoteCount noteCount={noteCount} />
    </div>
  );
}
