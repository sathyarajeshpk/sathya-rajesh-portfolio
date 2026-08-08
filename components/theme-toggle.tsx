"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mounted ? `Switch to ${theme === "light" ? "dark" : "light"} theme` : "Switch theme"}
      className={`label flex h-9 items-center gap-2 rounded-full border border-rule px-3 text-subtle transition-colors duration-300 hover:border-rule-strong hover:text-[var(--fg)] ${className}`}
    >
      {/* Rendered empty until mount so server and client markup agree. */}
      <span aria-hidden="true" className="nums">
        {mounted ? (theme === "light" ? "LIGHT" : "DARK") : "     "}
      </span>
      <span
        aria-hidden="true"
        className="relative block h-3 w-3 rounded-full border transition-colors duration-300"
        style={{
          borderColor: "var(--fg-subtle)",
          background: mounted && theme === "dark" ? "var(--fg-subtle)" : "transparent",
        }}
      />
    </button>
  );
}
