"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import KlaudiaChatWidget from "../chatbot/KlaudiaChatWidget";

type ChatbotData = {
  isActive?: boolean;
} & Record<string, unknown>;

type AppShellProps = {
  children: React.ReactNode;
  chatbotData?: ChatbotData;
};

export default function AppShell({ children, chatbotData }: AppShellProps) {
  const pathname = usePathname();
  const hideChrome = pathname?.startsWith("/sanity");

  if (hideChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      {children}
      {chatbotData?.isActive ? <KlaudiaChatWidget data={chatbotData} /> : null}
      <Footer />
    </>
  );
}
