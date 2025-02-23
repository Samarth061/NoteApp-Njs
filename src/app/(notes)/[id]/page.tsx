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
    redirect("/signin");
  }

  try {
    const note = await prisma.note.findUnique({
      where: { id: id, userId: session.user.id },
    });

    if (!note) {
      return notFound();
    }

    return (
      <div className="p-4">
        <h1 className="text-3xl font-bold">{note.title}</h1>
        <p className="mt-2 mb-10 text-xl">{note.content}</p>
        <div className="flex justify-left">
          <DeleteButton id={id} />
          <Link
            href={"/dashboard"}
            className="bg-green-500 text-white px-5 py-2 rounded"
          >
            Back
          </Link>
        </div>
      </div>
    );
  } catch (error) {
    // Handle database or other errors
    console.error("Failed to fetch note:", error);
    return <p>Something went wrong. Please try again later.</p>;
  }
}
