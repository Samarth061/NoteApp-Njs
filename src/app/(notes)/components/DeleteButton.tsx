"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type DeleteButtonProps = {
  id: string;
  className?: string;
};

const DeleteButton = ({ id, className }: DeleteButtonProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);

    const res = await fetch("/api/notes", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    });

    if (res.ok) {
      router.push("/dashboard");
    } else {
      const data = await res.json();
      console.error("Error:", data.error);
    }

    setLoading(false);
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className={`bg-red-500 text-white px-4 py-2 rounded ${className || ""}`}
    >
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
};

export default DeleteButton;
