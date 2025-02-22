# AI-Powered Note-Taking App

This is a simple note-taking application built with Next.js. It allows users to create, edit, and delete notes using REST API endpoints. While the app is currently focused on basic note management, future updates will incorporate AI-powered features to enhance note-taking and organization.

---

## Features

- **Create Notes**: Add new notes with a title and content.
- **Edit Notes**: Modify the title and content of existing notes
- **Delete Notes**: Remove notes you no longer need.
- **User Authentication**: Secure login and personalized experience using NextAuth.js.
- **Cloud Storage**: Store and retrieve notes with Supabase.
- **Modern UI**: Clean and responsive user interface using Tailwind CSS.

---

## Roadmap

- [x] Build a simple note-taking app with basic functionality.
- [ ] Enable tagging and search functionality.
- [ ] Add AI-powered note generation and summarization.
- [ ] Introduce real-time collaboration features.
- [ ] Add offline note-taking support.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Supabase](https://supabase.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **AI SDK**: [Vercel AI SDK](https://sdk.vercel.ai/)

---

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Samarth061/NoteApp-Njs
   cd NoteApp-Njs
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a .env.local file in the root directory and add the following:

   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   NEXTAUTH_SECRET=your-nextauth-secret
   AI_API_KEY=your-vercel-ai-api-key
   ```

   Create a .env file in the root directory and add the following:

   ```bash
   DATABASE_URL="your-supabase-databaseurl"
   DIRECT_URL="your-supabase-directurl"

   GOOGLE_CLIENT_ID="your-google-clientid"
   GOOGLE_CLIENT_SECRET="your-google-clientsecret"
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Set Up Prisma**:

   ```bash
   npx prisma init
   npx prisma db push
   ```

5. **Run the Development Server**:

   ```bash
   npm run dev
   ```

Visit http://localhost:3000 to view the app.

## Usage

- Create Notes: Add notes with a user-friendly editor.
- Edit Notes: Edit the title or content of existing notes.
- Delete Notes: Remove notes you no longer need.
- Authentication: Log in to access personalized notes and features.

## Folder Structure

```php
note-app/
├── src/
│   ├── app/                # Main application directory
│   │    ├── (notes)/       # Folder for note-related pages and components
│   │    │   ├── [id]/      # Dynamic folder for individual note pages (e.g., view/edit specific note)
│   │    │   ├── new/       # Folder for creating new notes
│   │    ├── api/           # API-related functions (for data management)
│   │    │   ├── auth/      # Authentication API (sign-in, session management)
│   │    │   ├── notes/     # API functions for notes (CRUD operations)
│   │    ├── dashboard/     # Dashboard page and components for the user's notes
│   │    ├── error/         # Error pages for handling 404, 500, etc.
│   │    ├── signin/        # Sign-in page and related components
│   │    ├── globals.tsx    # Global application settings or context
│   │    ├── layout.tsx     # Main layout component that wraps around pages
│   │    ├── middleware.tsx # Custom middleware for authentication or authorization
│   │    ├── page.tsx       # Main entry point for rendering pages
│
│   ├── lib/                # Library files for reusable logic or external configurations
│   ├── components/         # Shared UI components (buttons, inputs, etc.)
│   ├── types/              # Global types used throughout the app (TypeScript types)
│   ├── utils/              # Utility functions (helpers, formatters, etc.)
│
├── prisma/                 # Prisma schema and migration files
│
├── public/                 # Static assets (images, fonts, icons, etc.)
│
├── env/                    # Environment variable configurations (for production and dev environments)
```

## Acknowledgments:

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation/using-vite)
- [Vercel AI SDK Documentation](https://sdk.vercel.ai/docs/introduction)
