"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDarkMode = stored === "true" || (stored === null && prefersDark);
    setIsDark(isDarkMode);
  }, []);

  const toggleDark = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("darkMode", String(next));
    document.documentElement.classList.toggle("dark", next);
  };

  if (!mounted) return null;

  return (
    <header className="header-glass w-full sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold">
          <span className="text-primary" style={{ fontFamily: "Playfair Display, serif" }}>LegalWork.AI</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/models" className="text-sm hover:underline">Models</Link>
          <Link href="/summarize" className="text-sm hover:underline">Summarize</Link>
          <Link href="/about" className="text-sm hover:underline">About</Link>

          <button onClick={toggleDark} aria-label="Toggle theme" className="p-2 rounded-lg bg-muted hover:bg-accent transition">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
