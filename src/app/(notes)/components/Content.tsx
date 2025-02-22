import React, { Dispatch, SetStateAction } from "react";
import Button from "./Button";

type typeContent = {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
};

export default function Content({ content, setContent }: typeContent) {
  return (
    <div className="flex flex-col w-[960px]">
      <textarea
        className="p-2 border rounded w-[960px] h-[390px] resize-none 
        bg-[#243647] focus:outline-none focus:bg-[#1E2F3F] focus:border-blue-500
        hover:border-blue-700"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="flex flex-row justify-between">
        <Button className="">Save Note</Button>
        <Button className="">Discard</Button>
      </div>
    </div>
  );
}
