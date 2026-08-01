"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-fabric-600 hover:bg-fabric-50 dark:hover:bg-slate-800 dark:hover:text-fabric-400 transition-all duration-200"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
