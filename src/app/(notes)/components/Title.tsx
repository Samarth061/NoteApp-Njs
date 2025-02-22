import React, { Dispatch, SetStateAction } from "react";

type typeTitle = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
};

export default function ({ title, setTitle }: typeTitle) {
  return (
    <>
      <input
        type="text"
        className="p-2 border rounded bg-[#243647] border-[#94ADC7] 
        text-md focus:outline-none focus:bg-[#1E2F3F] focus:border-blue-500
        hover:border-blue-700"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </>
  );
}
