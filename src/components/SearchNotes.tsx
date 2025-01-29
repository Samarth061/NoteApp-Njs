import React from "react";

export default function ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: Function;
}) {
  return (
    <>
      <input
        type="text"
        id="search-notes"
        name="search-notes"
        placeholder="Search notes"
        className="border-2 border-gray-300 p-2 rounded-lg w-48"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </>
  );
}
