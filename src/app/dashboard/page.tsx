// app/dashboard/page.tsx
"use client";
import Body from "@/components/Body";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // When loading, do nothing
    if (status === "loading") return;
    // Redirect to sign in if no session exists
    if (!session) {
      router.push("/signin");
    }
  }, [session, status, router]);

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return null;

  return (
    <div className="p-4">
      <h1>Welcome, {session.user?.name}</h1>
      <p>This is your dashboard.</p>
      <Body />
    </div>
  );
}
