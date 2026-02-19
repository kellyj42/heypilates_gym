// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppShell from "./components/layout/AppShell";
import { client } from "@/sanity/lib/client";
import { chatbotQuery } from "@/sanity/lib/queries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hey Pilates | Transform Your Body",
  description:
    "Premium Pilates studio offering group classes and private training",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch chatbot data
  let chatbotData;
  try {
    chatbotData = await client.fetch(chatbotQuery);
    console.log("Chatbot data fetched:", chatbotData); // Debug log
  } catch (error) {
    console.error("Error fetching chatbot data:", error);
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppShell chatbotData={chatbotData}>{children}</AppShell>
      </body>
    </html>
  );
}
