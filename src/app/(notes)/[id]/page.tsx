import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { notFound } from "next/navigation";

export default async function NotePage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <p>Unauthorized</p>;

  const note = await prisma.note.findUnique({
    where: { id: params.id, userId: session.user.id },
  });

  if (!note) return notFound();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{note.title}</h1>
      <p className="mt-2">{note.content}</p>
    </div>
  );
}
