"use client";

import { useState } from "react";
import Title from "./components/Title";
import Content from "./components/Content";

export default function NoteForm() {
  // Dummy data for testing
  const [title, setTitle] = useState("My Sample Note");
  const [content, setContent] = useState(
    "This is some dummy content for the note."
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert(`Note Saved!\nTitle: ${title}\nContent: ${content}`);
  };

  return (
    <div className="pl-1">
      <form onSubmit={handleSubmit} className="space-y-4 h-full ">
        <Title title={title} setTitle={setTitle} />
        <Content content={content} setContent={setContent} />
      </form>
    </div>
  );
}
