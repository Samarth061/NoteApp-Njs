interface NoteCountProps {
  noteCount: number;
}

export default function NoteCount({ noteCount }: NoteCountProps) {
  return <p className="text-white p-1">{noteCount}</p>;
}
