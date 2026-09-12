"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { THEMES, type ThemeKey } from "@/components/site/themes";
import { SECTION_IDS, SECTION_LABELS, EMAIL, PHONE_INTL, GITHUB_URL, LINKEDIN_URL } from "@/components/site/commandPaletteData";
import { OPEN_TERMINAL_EVENT, OPEN_PALETTE_EVENT } from "@/components/site/terminalEvents";

type Action = { id: string; label: string; hint?: string; run: () => void; keywords?: string };

/**
 * Global Cmd/Ctrl+K command palette — theme-agnostic chrome (deliberately
 * doesn't restyle per theme, like any real command palette) that still
 * knows which theme is active so "jump to section" links land on the right
 * DOM id (see commandPaletteData.ts) instead of scrolling nowhere.
 */
export default function CommandPalette({ theme, onThemeChange }: { theme: ThemeKey; onThemeChange: (t: ThemeKey) => void }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    const onOpenEvent = () => setOpen(true);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener(OPEN_PALETTE_EVENT, onOpenEvent);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener(OPEN_PALETTE_EVENT, onOpenEvent);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  const actions: Action[] = useMemo(() => {
    const ids = SECTION_IDS[theme];
    const nav: Action[] = (Object.keys(ids) as Array<keyof typeof ids>).map((key) => ({
      id: `nav-${key}`,
      label: SECTION_LABELS[key],
      hint: "Jump to section",
      keywords: "go to section navigate",
      run: () => document.getElementById(ids[key]!)?.scrollIntoView({ behavior: "smooth" }),
    }));

    const themeActions: Action[] = THEMES.filter((t) => t.key !== theme).map((t) => ({
      id: `theme-${t.key}`,
      label: `Switch to ${t.label}`,
      hint: "Theme",
      keywords: "design switch theme",
      run: () => onThemeChange(t.key),
    }));

    const contact: Action[] = [
      { id: "email", label: `Email ${EMAIL}`, hint: "Contact", keywords: "mail contact", run: () => { window.location.href = `mailto:${EMAIL}`; } },
      { id: "whatsapp", label: "Chat on WhatsApp", hint: "Contact", keywords: "message chat contact", run: () => window.open(`https://wa.me/${PHONE_INTL}`, "_blank") },
      { id: "github", label: "Open GitHub profile", hint: "Link", keywords: "code repos", run: () => window.open(GITHUB_URL, "_blank") },
      { id: "linkedin", label: "Open LinkedIn profile", hint: "Link", keywords: "resume career", run: () => window.open(LINKEDIN_URL, "_blank") },
      {
        id: "copy-email", label: "Copy email address", hint: "Utility", keywords: "clipboard copy",
        run: () => { navigator.clipboard?.writeText(EMAIL); },
      },
      {
        id: "terminal", label: "Open terminal", hint: "Fun", keywords: "cli shell whoami hack",
        run: () => window.dispatchEvent(new CustomEvent(OPEN_TERMINAL_EVENT)),
      },
    ];

    return [...nav, ...themeActions, ...contact];
  }, [theme, onThemeChange]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter((a) => (a.label + " " + (a.keywords ?? "")).toLowerCase().includes(q));
  }, [actions, query]);

  useEffect(() => setActiveIndex(0), [query]);

  if (!open) return null;

  const runActive = () => {
    const a = filtered[activeIndex];
    if (!a) return;
    a.run();
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      onClick={() => setOpen(false)}
      style={{
        position: "fixed", inset: 0, zIndex: 300, background: "rgba(8,9,11,.6)",
        backdropFilter: "blur(3px)", display: "flex", alignItems: "flex-start", justifyContent: "center",
        padding: "clamp(16px,10vh,140px) 16px 16px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(100%, 560px)", background: "#15161a", border: "1px solid rgba(255,255,255,.12)",
          borderRadius: 12, boxShadow: "0 24px 60px rgba(0,0,0,.5)", overflow: "hidden",
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
        }}
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") { e.preventDefault(); setActiveIndex((i) => Math.min(i + 1, filtered.length - 1)); }
            else if (e.key === "ArrowUp") { e.preventDefault(); setActiveIndex((i) => Math.max(i - 1, 0)); }
            else if (e.key === "Enter") { e.preventDefault(); runActive(); }
          }}
          placeholder="Type a command or search…"
          style={{
            width: "100%", boxSizing: "border-box", background: "transparent", border: 0,
            borderBottom: "1px solid rgba(255,255,255,.1)", color: "#EEF0F4", fontSize: 15,
            padding: "16px 18px", outline: "none", fontFamily: "inherit",
          }}
        />
        <div style={{ maxHeight: "50vh", overflowY: "auto", padding: "6px" }}>
          {filtered.length === 0 && (
            <p style={{ margin: 0, padding: "16px 12px", fontSize: 13, color: "#82887a" }}>No matching commands.</p>
          )}
          {filtered.map((a, i) => (
            <button
              key={a.id}
              type="button"
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => { a.run(); setOpen(false); }}
              style={{
                width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12,
                background: i === activeIndex ? "rgba(255,255,255,.08)" : "transparent",
                border: 0, borderRadius: 8, padding: "10px 12px", textAlign: "left", cursor: "pointer",
                color: "#EEF0F4", fontSize: 13.5, fontFamily: "inherit",
              }}
            >
              <span>{a.label}</span>
              {a.hint && <span style={{ fontSize: 10.5, letterSpacing: ".08em", textTransform: "uppercase", color: "#82887a", flex: "none" }}>{a.hint}</span>}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 14, padding: "8px 14px", borderTop: "1px solid rgba(255,255,255,.08)", fontSize: 10.5, color: "#5f6560" }}>
          <span>↑↓ navigate</span><span>↵ select</span><span>esc close</span>
        </div>
      </div>
    </div>
  );
}
