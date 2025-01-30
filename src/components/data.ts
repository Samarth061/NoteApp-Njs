export type Note = {
    id: number;
    title: string;
    description: string;
  };
  
export const mockNotes: Note[] = [
    {
      id: 1,
      title: "Welcome to Note Taking",
      description: "This is your first note. Start organizing your thoughts!",
    },
    {
      id: 2,
      title: "Meeting Notes: Project Kickoff",
      description:
        "Discussed project timeline and goals. Action items include...",
    },
    {
      id: 3,
      title: "Recipe: Chocolate Chip Cookies",
      description: "Ingredients: 2 1/4 cups flour, 1 tsp baking soda, ...",
    },
    {
    id: 4,
    title: "Book Review: 'The Alchemist'",
    description:
      "An inspiring tale about following one's dreams. Key themes include...",
    },
    {
    id: 5,
    title: "Workout Plan",
    description: "Monday: Chest and Triceps, Tuesday: Back and Biceps, ...",
    },
  ];
  
  