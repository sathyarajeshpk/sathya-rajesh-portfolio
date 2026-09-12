"use client";

import { useEffect, useState } from "react";
import ProfileHome from "@/components/site/ProfileHome";
import ClassicHome from "@/components/site/ClassicHome";

type Design = "new" | "classic";
const STORAGE_KEY = "site-design";

/**
 * Lets a visitor flip between the dark editorial redesign and the previous
 * site. Defaults to "new" on first render (server and client match, so no
 * hydration mismatch); a stored preference is applied right after mount.
 */
export default function SiteSwitcher() {
  const [design, setDesign] = useState<Design>("new");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "classic" || saved === "new") setDesign(saved);
    } catch {
      // localStorage unavailable — stay on the default.
    }
  }, []);

  const toggle = () => {
    const next: Design = design === "new" ? "classic" : "new";
    setDesign(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore — the switch still works for this page view
    }
  };

  return (
    <>
      {design === "new" ? <ProfileHome /> : <ClassicHome />}
      <button
        type="button"
        onClick={toggle}
        style={{
          position: "fixed",
          left: "clamp(16px,3vw,28px)",
          bottom: "clamp(16px,3vw,28px)",
          zIndex: 200,
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
          fontSize: 11,
          letterSpacing: ".14em",
          textTransform: "uppercase",
          color: "#EEF0F4",
          background: "rgba(20,21,24,.88)",
          border: "1px solid rgba(255,255,255,.16)",
          borderRadius: 99,
          padding: "10px 16px",
          backdropFilter: "blur(10px)",
          cursor: "pointer",
          boxShadow: "0 4px 18px rgba(0,0,0,.35)",
        }}
      >
        {design === "new" ? "Classic view" : "New view"}
      </button>
    </>
  );
}
