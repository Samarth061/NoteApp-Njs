import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const notes = await prisma.note.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(notes, { status: 200 });
  } catch (error) {
    console.error("Error fetching notes:", error);
    return NextResponse.json({ error: "Error fetching notes" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { title, content } = await req.json();
    if (!content) {
      return NextResponse.json({ message: "Content is required" }, { status: 400 });
    }

    const note = await prisma.note.create({
      data: { title, content, userId: session.user.id },
    });

    return NextResponse.json(note, { status: 201 });
  } catch (error) {
    console.error("Error creating note:", error);
    return NextResponse.json({ error: "Error creating note" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await req.json(); // Extract ID from the request body
    if (!id) {
      return NextResponse.json({ message: "Note ID is required" }, { status: 400 });
    }

    const deletedNote = await prisma.note.delete({
      where: {
        id,
        userId: session.user.id, // Ensure user can only delete their own notes
      },
    });

    return NextResponse.json({ message: "Note deleted", deletedNote }, { status: 200 });
  } catch (error) {
    console.error("Error deleting note:", error);
    return NextResponse.json({ error: "Error deleting note" }, { status: 500 });
  }
}

