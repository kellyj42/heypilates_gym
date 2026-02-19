"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isSanityStudio = pathname?.startsWith("/sanity");

  if (isSanityStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <div className="mt-10">{children}</div>
      <Footer />
    </>
  );
}
