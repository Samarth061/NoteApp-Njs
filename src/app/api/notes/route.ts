// pages/api/notes.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '@/lib/prisma';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // TypeScript may need a little help to know user.id is a string:
  const userId = session.user?.id as string;

  if (req.method === 'GET') {
    try {
      // Fetch only the notes belonging to the current user
      const notes = await prisma.note.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
      });
      return res.status(200).json(notes);
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching notes' });
    }
  } else if (req.method === 'POST') {
    const { title, content } = req.body;
    if (!content) {
      return res.status(400).json({ message: 'Content is required' });
    }
    try {
      // Create a new note linked to the user
      const note = await prisma.note.create({
        data: {
          title,
          content,
          userId,
        },
      });
      return res.status(201).json(note);
    } catch (error) {
      return res.status(500).json({ error: 'Error creating note' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
