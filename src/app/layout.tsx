import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Body from "../components/Body";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const meta: Metadata = {
  title: "Noteit",
  description: "Noteit is a note-taking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* className={`${geistSans.variable} ${geistMono.variable} antialiased "grid grid-rows-[20px_1fr_20px] items-center 
        justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"`} */}
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 overflow-auto">
          <Body />
        </main>
        <Footer />
      </body>
    </html>
  );
}
