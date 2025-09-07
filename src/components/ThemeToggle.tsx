"use client";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

function setHtmlDark(dark: boolean) {
  const root = document.documentElement;
  root.classList.toggle("dark", dark);
}

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  // Initialize from localStorage or system
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      const preferred = saved ? saved : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      const isDark = preferred === "dark";
      setDark(isDark);
      setHtmlDark(isDark);
    } catch {}
  }, []);

  const toggle = () => {
    const next = !(dark ?? false);
    setDark(next);
    setHtmlDark(next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="ml-2 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/20 transition"
      title="Toggle theme"
    >
      {dark ? <FiSun className="text-white" /> : <FiMoon className="text-white" />}
    </button>
  );
}

