"use client";

import { useEffect, useRef, useState } from "react";
import type { ThemeKey } from "@/components/site/themes";
import { THEMES } from "@/components/site/themes";
import { EMAIL, PHONE_INTL, GITHUB_URL, LINKEDIN_URL } from "@/components/site/commandPaletteData";
import { PROJECTS } from "@/lib/projects";
import { OPEN_TERMINAL_EVENT } from "@/components/site/terminalEvents";

type Line = { text: string; kind: "input" | "output" };

const getHelp = () => [
  "Available commands:",
  "  help              show this list",
  "  whoami            who is this site about",
  "  about             the short version",
  "  ls projects       list project slugs",
  "  cat <slug>        show a project's summary",
  "  skills            list capability groups",
  "  contact           phone / email / links",
  "  resume            open the resume PDF",
  "  open <site>       github | linkedin | whatsapp",
  `  theme <name>      ${THEMES.map((t) => t.key).join(" | ")}`,
  "  date              current date and time",
  "  clear             clear the screen",
  "  exit              close this terminal",
];

/**
 * Fun, fully optional "hidden" CLI — opens on the backtick key, from the
 * command palette's "Open terminal" action, or a small hint button. Global
 * and theme-agnostic like CommandPalette, but can drive theme switching
 * itself via `onThemeChange`.
 */
export default function Terminal({ theme, onThemeChange }: { theme: ThemeKey; onThemeChange: (t: ThemeKey) => void }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Line[]>([
    { text: "Sathya Rajesh PK — portfolio terminal. Type 'help' to get started.", kind: "output" },
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const openHandler = () => setOpen(true);
    const keyHandler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (e.key === "`" && tag !== "INPUT" && tag !== "TEXTAREA") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener(OPEN_TERMINAL_EVENT, openHandler);
    window.addEventListener("keydown", keyHandler);
    return () => {
      window.removeEventListener(OPEN_TERMINAL_EVENT, openHandler);
      window.removeEventListener("keydown", keyHandler);
    };
  }, [open]);

  useEffect(() => {
    if (open) requestAnimationFrame(() => inputRef.current?.focus());
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history]);

  const print = (text: string) => setHistory((h) => [...h, { text, kind: "output" }]);

  const run = (raw: string) => {
    const cmd = raw.trim();
    setHistory((h) => [...h, { text: cmd, kind: "input" }]);
    if (!cmd) return;
    setCmdHistory((h) => [...h, cmd]);
    setHistoryIndex(null);

    const [name, ...args] = cmd.split(/\s+/);
    switch (name.toLowerCase()) {
      case "help":
        getHelp().forEach(print);
        break;
      case "whoami":
        print("Sathya Rajesh PK — Senior Data Engineer, Chennai, India. 13 years in IT, 6 turning reporting chaos into platforms.");
        break;
      case "about":
        print("I build lakehouse platforms on Azure: Databricks, ADLS Gen2, Microsoft Fabric. Currently at Agilisium Consulting.");
        break;
      case "ls":
        if (args[0] === "projects" || !args[0]) PROJECTS.forEach((p) => print(`  ${p.slug}`));
        else print(`ls: cannot access '${args[0]}': not found`);
        break;
      case "cat": {
        const slug = args[0]?.replace(/\.txt$/, "");
        if (slug === "about") { print("I build lakehouse platforms on Azure. Most of my work lives in the unglamorous half of data engineering."); break; }
        const p = PROJECTS.find((x) => x.slug === slug);
        if (p) { print(`${p.title} (${p.year})`); print(p.summary); print(`→ /work/${p.slug}`); }
        else print(`cat: ${args[0] ?? ""}: No such file. Try 'ls projects'.`);
        break;
      }
      case "skills":
        print("Databricks, PySpark, Delta Lake, Microsoft Fabric, ADLS Gen2, Power BI, LangChain/RAG, Python, SQL.");
        break;
      case "contact":
        print(`Email:    ${EMAIL}`);
        print(`Phone:    +91 95979 96996`);
        print(`GitHub:   ${GITHUB_URL}`);
        print(`LinkedIn: ${LINKEDIN_URL}`);
        break;
      case "resume":
        print("Opening resume…");
        window.open("/resume/SathyaRajesh_Resume.pdf", "_blank");
        break;
      case "open": {
        const target = args[0]?.toLowerCase();
        const map: Record<string, string> = { github: GITHUB_URL, linkedin: LINKEDIN_URL, whatsapp: `https://wa.me/${PHONE_INTL}` };
        if (target && map[target]) { print(`Opening ${target}…`); window.open(map[target], "_blank"); }
        else print("open: usage — open <github|linkedin|whatsapp>");
        break;
      }
      case "theme": {
        const key = args[0]?.toLowerCase();
        const match = THEMES.find((t) => t.key === key);
        if (match) { onThemeChange(match.key); print(`Switched to ${match.label}.`); }
        else print(`theme: usage — theme <${THEMES.map((t) => t.key).join("|")}>`);
        break;
      }
      case "date":
        print(new Date().toString());
        break;
      case "sudo":
        print(args.join(" ") === "make-coffee" ? "Sorry, I'm a data engineer, not a barista. ☕" : "sudo: this incident will be reported.");
        break;
      case "clear":
        setHistory([]);
        break;
      case "exit":
        setOpen(false);
        break;
      default:
        print(`command not found: ${name}. Type 'help' for a list of commands.`);
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Terminal"
      onClick={() => setOpen(false)}
      style={{ position: "fixed", inset: 0, zIndex: 300, background: "rgba(0,0,0,.55)", display: "flex", alignItems: "flex-end", justifyContent: "center" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(100%, 720px)", height: "min(60vh, 460px)", margin: "0 0 clamp(0px,4vw,40px)",
          background: "#0B0C0E", border: "1px solid rgba(255,255,255,.14)", borderBottom: "none",
          borderRadius: "10px 10px 0 0", boxShadow: "0 -20px 60px rgba(0,0,0,.5)",
          display: "flex", flexDirection: "column", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: 13,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderBottom: "1px solid rgba(255,255,255,.1)" }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
          <span style={{ marginLeft: 8, fontSize: 11, color: "#8b9078" }}>guest@sathyarajeshpk — terminal</span>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close terminal"
                  style={{ marginLeft: "auto", background: "none", border: 0, color: "#8b9078", cursor: "pointer", fontSize: 14 }}>✕</button>
        </div>

        <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "12px 14px", color: "#D7DAD0" }}>
          {history.map((l, i) => (
            <div key={i} style={{ whiteSpace: "pre-wrap", lineHeight: 1.6, color: l.kind === "input" ? "#CBEF34" : "#D7DAD0" }}>
              {l.kind === "input" ? `guest@sathyarajeshpk:~$ ${l.text}` : l.text}
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); run(input); setInput(""); }}
          style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderTop: "1px solid rgba(255,255,255,.1)" }}
        >
          <span style={{ color: "#CBEF34" }}>guest@sathyarajeshpk:~$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowUp") {
                e.preventDefault();
                if (!cmdHistory.length) return;
                const next = historyIndex === null ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
                setHistoryIndex(next);
                setInput(cmdHistory[next]);
              } else if (e.key === "ArrowDown") {
                e.preventDefault();
                if (historyIndex === null) return;
                const next = historyIndex + 1;
                if (next >= cmdHistory.length) { setHistoryIndex(null); setInput(""); }
                else { setHistoryIndex(next); setInput(cmdHistory[next]); }
              }
            }}
            spellCheck={false}
            autoComplete="off"
            style={{ flex: 1, background: "transparent", border: 0, outline: "none", color: "#EEF0F4", fontFamily: "inherit", fontSize: 13 }}
          />
        </form>
      </div>
    </div>
  );
}
