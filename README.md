# AI-Powered Note-Taking App

This is a Next.js-based note-taking application. Currently, it’s a simple note app focusing on creating, editing, and saving notes. Future updates will introduce AI-powered features, collaboration, and more advanced functionality.

In future it will leverages modern technologies such as Vercel AI SDK, Supabase, Prisma ORM, NextAuth.js, and Tailwind CSS to provide a seamless user experience.

---

## Features

- **AI-Powered Note Management**: Generate, summarize, and organize notes using AI.
- **Real-Time Collaboration**: Share and collaborate on notes with others.
- **User Authentication**: Secure login and personalized experience using NextAuth.js.
- **Cloud Storage**: Save and retrieve notes with Supabase.
- **Modern UI**: Responsive and user-friendly design with Tailwind CSS.
- **Cross-Device Sync**: Access notes on any device.

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
   git clone https://github.com/your-username/your-repo-name
   cd your-repo-name
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
- AI Features: Use AI to summarize or organize your notes.
- Authentication: Log in to access personalized notes and features.
- Sync Across Devices: Save and retrieve notes from any device with your account.

## Folder Structure

```php
note-app/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Application pages
│   ├── styles/        # Global and component-specific styles
│   └── utils/         # Utility functions
├── prisma/            # Prisma schema and migrations
├── public/            # Static assets
└── .env.local         # Environment variables
```

## Roadmap

- [x] Build a simple note-taking app with basic functionality.
- [ ] Add AI-powered note generation and summarization.
- [ ] Enable tagging and search functionality.
- [ ] Introduce real-time collaboration features.
- [ ] Add offline note-taking support.

## Acknowledgments:

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation/using-vite)
- [Vercel AI SDK Documentation](https://sdk.vercel.ai/docs/introduction)
