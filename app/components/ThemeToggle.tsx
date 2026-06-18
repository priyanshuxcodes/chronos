"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Solves hydration mismatch by ensuring code only runs on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // FIXED: Added visible borders/backgrounds so it's never an invisible box
  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg border border-gray-200 bg-gray-50 dark:bg-white/5 dark:border-white/10 animate-pulse" />
    );
  }

  // Next-themes defaults to undefined on first render; fallback to dark if not set yet
  const currentTheme = theme === "system" || !theme ? "dark" : theme;
  const isDark = currentTheme === "dark";

  return (
  <button
    onClick={() => {
      const nextTheme = isDark ? "light" : "dark";
      setTheme(nextTheme);
    }}
    type="button"
    className={`p-2 rounded-lg border transition-all duration-200 cursor-pointer flex items-center justify-center w-9 h-9 ${
      isDark
        ? "bg-white/5 border-white/10 text-yellow-400 hover:bg-white/10"
        : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100 shadow-xs"
    }`}
    aria-label="Toggle theme"
  >
    {isDark ? (
      <svg
  className="w-5 h-5 transition-transform duration-500 hover:rotate-180"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <circle cx="12" cy="12" r="4" />
  <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
  <path d="M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5" />
</svg>
    ) : (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    )}
  </button>
)}