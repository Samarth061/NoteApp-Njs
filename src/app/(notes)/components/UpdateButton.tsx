"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type UpdateButtonProps = {
  id: string;
};

const UpdateButton = ({ id }: UpdateButtonProps) => {
  const router = useRouter();
  const [update, setUpdating] = useState(false);

  const handleUpdate = async () => {
    setUpdating(true);

    const res = await fetch("/api/notes", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    });

    if (res.ok) {
      router.push("/dashboard");
    } else {
      const data = await res.json();
      console.error("Error:", data.error);
    }

    setUpdating(false);
  };

  return (
    <button
      onClick={handleUpdate}
      disabled={update}
      className="bg-green-500 text-white px-4 py-2 rounded"
    >
      {update ? "Updating..." : "Update"}
    </button>
  );
};

export default UpdateButton;
