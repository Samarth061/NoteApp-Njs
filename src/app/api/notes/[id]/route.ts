import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
  
    if (!session?.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
  
    try {
      // Fetch the note by ID and ensure it belongs to the authenticated user
      const note = await prisma.note.findUnique({
        where: { id: params.id, userId: session.user.id }, // Use the `id` from the URL params and ensure it belongs to the user
      });
  
      if (!note) {
        return NextResponse.json({ message: "Note not found" }, { status: 404 });
      }
  
      return NextResponse.json(note, { status: 200 });
    } catch (error) {
      console.error("Error fetching note:", error);
      return NextResponse.json({ error: "Error fetching note" }, { status: 500 });
    }
  }