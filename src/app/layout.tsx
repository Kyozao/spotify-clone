import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "material-symbols";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify",
  description: "Listen to music.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className="bg-black text-zinc-50">
        <div className="flex flex-col h-screen p-2 pb-0">
          {children}

        </div>
      </body>
    </html>
  );
}
