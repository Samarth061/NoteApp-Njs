// app/dashboard/page.tsx
"use client";
import Body from "@/components/Body";
import { useSession } from "next-auth/react";
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
      router.push("/");
    }
  }, [session, status, router]);

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return null;

  return (
    <div className="pt-1 pl-4 pr-4">
      <h1 className="font-bold text-2xl gap-3">
        Welcome to your dashboard, {session.user?.name}
      </h1>
      <Body />
    </div>
  );
}
