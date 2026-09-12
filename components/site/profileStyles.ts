import type { CSSProperties } from "react";

/** Dark-editorial palette for the profile page. Mirrors app/globals.css .dark tokens
 *  plus a few page-specific values. */
export const C = {
  bg: "#0A0B0D",
  raised: "#101216",
  sunken: "#0D0F12",
  fg: "#EEF0F4",
  muted: "#A8AFBB",
  soft: "#8B93A1",
  subtle: "#7C8492",
  rule: "rgba(255,255,255,.10)",
  ruleSoft: "rgba(255,255,255,.08)",
  accent: "#63B4BE",
  deep: "#175E68",
} as const;

export const MONO = "'JetBrains Mono', monospace";
export const SERIF = "'Instrument Serif', Georgia, serif";
export const EASE = "cubic-bezier(.22,1,.36,1)";

export const shell: CSSProperties = {
  maxWidth: 1240,
  margin: "0 auto",
  padding: "clamp(64px,9vw,128px) clamp(20px,4vw,56px)",
};

export const label = (color: string = C.subtle, size = 11): CSSProperties => ({
  fontFamily: MONO,
  fontSize: size,
  letterSpacing: ".18em",
  textTransform: "uppercase",
  color,
});

export const display: CSSProperties = {
  fontFamily: SERIF,
  fontWeight: 400,
  fontSize: "clamp(2rem,4.6vw,3.6rem)",
  lineHeight: 1.06,
  letterSpacing: "-.02em",
};

export const bullet: CSSProperties = {
  width: 12,
  height: 1,
  background: "rgba(255,255,255,.28)",
  flex: "none",
  marginTop: ".72em",
};

export const autoGrid = (min: number): CSSProperties => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit,minmax(min(100%,${min}px),1fr))`,
});
