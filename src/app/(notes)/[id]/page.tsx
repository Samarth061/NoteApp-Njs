import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { notFound, redirect } from "next/navigation";
import DeleteButton from "../components/DeleteButton";
import Link from "next/link";

export default async function NotePage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect("/");
  }

  try {
    const note = await prisma.note.findUnique({
      where: { id: id, userId: session.user.id },
    });

    if (!note) {
      return notFound();
    }

    return (
      <div className="pl-4 max-w-5xl">
        <h1 className="text-3xl font-bold mb-3">{note.title}</h1>
        <div className="max-h-[296] overflow-y-auto pr-1">
          <p className="mt-2 text-l break-words">{note.content}</p>
        </div>

        <div className="flex w-80 justify-between mt-5">
          <Link
            href={"/dashboard"}
            className="bg-green-500 text-white px-5 py-2 rounded"
          >
            Back
          </Link>
          <DeleteButton id={id} />
        </div>
      </div>
    );
  } catch (error) {
    // Handle database or other errors
    console.error("Failed to fetch note:", error);
    return <p>Something went wrong. Please try again later.</p>;
  }
}
