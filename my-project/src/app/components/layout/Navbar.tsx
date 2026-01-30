"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/classes", label: "Classes" },
    { href: "/private-training", label: "Private" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center">
        <div
          className={`
            w-full max-w-6xl transition-all duration-300
            ${scrolled ? "scale-[0.97]" : "scale-100"}
          `}
        >
          <div className="backdrop-blur-xl bg-white/70 border border-white/40 shadow-lg shadow-black/5 rounded-2xl">
            <div className="px-6">
              <div className="flex h-16 items-center justify-between">
                {/* Left links */}
                <nav className="hidden md:flex items-center gap-6">
                  {links.slice(0, 2).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Center Logo */}
                <Link
                  href="/"
                  className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900"
                >
                  HeyPilates
                </Link>

                {/* Right links + CTA */}
                <div className="hidden md:flex items-center gap-6">
                  {links.slice(2).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition"
                    >
                      {link.label}
                    </Link>
                  ))}

                  <Link
                    href="/contact"
                    className="ml-2 bg-indigo-600 hover:bg-indigo-70 text-white text-sm font-medium px-5 py-2 rounded-xl transition shadow-md shadow-indigo-600/20 "
                  >
                    Book Class
                  </Link>
                </div>

                {/* Mobile toggle */}
                <button
                  onClick={() => setOpen(!open)}
                  className="md:hidden text-gray-800 text-xl"
                >
                  ☰
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer so content not hidden */}
      <div className="h-24" />

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-x-4 top-24 z-40 md:hidden">
          <div className="rounded-2xl bg-white border border-gray-200 shadow-xl p-6 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-gray-800 font-medium"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="block text-center bg-indigo-600 text-white py-3 rounded-xl font-medium
              "
            >
              Book Class
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
