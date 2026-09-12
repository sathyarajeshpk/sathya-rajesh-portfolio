"use client";

import { useEffect, useState } from "react";
import { THEMES, DEFAULT_THEME, type ThemeKey } from "@/components/site/themes";
import WhatsAppButton from "@/components/site/WhatsAppButton";
import CommandPalette from "@/components/site/CommandPalette";
import Terminal from "@/components/site/Terminal";
import { OPEN_PALETTE_EVENT } from "@/components/site/terminalEvents";

const STORAGE_KEY = "site-design";

/**
 * Lets a visitor pick which homepage theme to view. Defaults to
 * DEFAULT_THEME on first render (server and client match, so no hydration
 * mismatch); a stored preference is applied right after mount.
 */
export default function SiteSwitcher() {
  const [theme, setTheme] = useState<ThemeKey>(DEFAULT_THEME);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && THEMES.some((t) => t.key === saved)) setTheme(saved as ThemeKey);
    } catch {
      // localStorage unavailable — stay on the default.
    }
  }, []);

  const handleChange = (next: ThemeKey) => {
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore — the switch still works for this page view
    }
  };

  const Active = THEMES.find((t) => t.key === theme)?.component ?? THEMES[0].component;

  return (
    <>
      <Active />
      <WhatsAppButton />
      <CommandPalette theme={theme} onThemeChange={handleChange} />
      <Terminal theme={theme} onThemeChange={handleChange} />

      <div style={{ position: "fixed", left: "clamp(16px,3vw,28px)", bottom: "clamp(16px,3vw,28px)", zIndex: 200, display: "flex", alignItems: "center", gap: 8 }}>
        <div
          style={{
            borderRadius: 99,
            background: "rgba(20,21,24,.88)",
            border: "1px solid rgba(255,255,255,.16)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 18px rgba(0,0,0,.35)",
          }}
        >
          <select
            value={theme}
            onChange={(e) => handleChange(e.target.value as ThemeKey)}
            aria-label="Choose site theme"
            style={{
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: 11,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "#EEF0F4",
              background: "transparent",
              border: "none",
              borderRadius: 99,
              padding: "10px 14px",
              cursor: "pointer",
              appearance: "none",
              WebkitAppearance: "none",
            }}
          >
            {THEMES.map((t) => (
              <option key={t.key} value={t.key}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent(OPEN_PALETTE_EVENT))}
          aria-label="Open command palette"
          title="Command palette (⌘K)"
          style={{
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            fontSize: 11,
            letterSpacing: ".04em",
            color: "#EEF0F4",
            background: "rgba(20,21,24,.88)",
            border: "1px solid rgba(255,255,255,.16)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 18px rgba(0,0,0,.35)",
            borderRadius: 99,
            padding: "10px 14px",
            cursor: "pointer",
          }}
        >
          ⌘K
        </button>
      </div>
    </>
  );
}
