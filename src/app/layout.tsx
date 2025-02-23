"use client";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div className="flex flex-col h-screen">
          <Header />
          <SessionProvider>
            <main className="flex-1 overflow-auto ml-10 p-4">{children}</main>
          </SessionProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
