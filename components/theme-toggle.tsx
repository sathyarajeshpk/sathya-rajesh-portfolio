"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      onClick={toggle}
      className="shrink-0 text-[0.95rem] text-[var(--link)] hover:underline"
      aria-label={mounted ? `Switch to ${theme === "light" ? "dark" : "light"} mode` : "Switch theme"}
    >
      {/* Blank until mount so the server and client markup agree. */}
      {mounted ? (theme === "light" ? "Dark mode" : "Light mode") : " "}
    </button>
  );
}
