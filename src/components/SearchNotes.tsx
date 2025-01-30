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
        className="border-2 border-gray-700 hover:border-blue-700 focus:border-blue-700 text-sm rounded-lg focus:ring-2
              bg-black w-48 placeholder-gray-500 p-1 placeholder:p-2 text-blue-400"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </>
  );
}
