"use client";

import React, { useState } from "react";
import NewNotebutton from "./NewNotebutton";
import SearchNotes from "./SearchNotes";
import NoteBox from "./NoteBox";

export default function () {
  const [searchTerm, setSearchTerm] = useState("");
  const [noteCount, setNoteCount] = useState(0);

  return (
    <div className="flex flex-col gap-3 mr-10">
      <div className="flex flex-row items-center mt-4 w-80 justify-between">
        <NewNotebutton />
        <SearchNotes searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <NoteBox
        searchTerm={searchTerm}
        noteCount={noteCount}
        setNoteCount={setNoteCount}
      />
      {/* <NoteCount noteCount={noteCount} /> */}
    </div>
  );
}
