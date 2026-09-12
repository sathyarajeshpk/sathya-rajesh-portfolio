import type { CSSProperties } from "react";

/** Palette extracted directly from the motorsport reference site's saved
 *  source (exact hex values, not approximated). */
export const S = {
  bg: "#ebeee0",
  bgAlt: "#f4f4ed",
  ink: "#111112",
  panel: "#282c20",
  panelAlt: "#3b3c38",
  accent: "#D2FF00",
  accentDeep: "#8a9a1f",
  sage1: "#b4b8a5",
  sage2: "#c8cbbd",
  sage3: "#bab19e",
  muted: "#535450",
  soft: "#676767",
  rule: "rgba(17,17,18,.14)",
  ruleOnDark: "rgba(235,238,224,.16)",
} as const;

// Mona Sans is the reference site's real (open-source) body/UI face,
// self-hosted from app/fonts/MonaSansVariable.woff2 as --font-mona. Its paid
// display face ("Brier") isn't redistributable, so Roboto Slab stands in.
export const SANS = "var(--font-mona), 'DM Sans', sans-serif";
export const MONO = "'JetBrains Mono', monospace";
export const SLAB = "'Roboto Slab', Georgia, serif";
export const ACCENT_SERIF = "'Instrument Serif', Georgia, serif";

export const shell: CSSProperties = {
  maxWidth: 1240,
  margin: "0 auto",
  padding: "clamp(64px,9vw,128px) clamp(20px,4vw,56px)",
};

export const kicker = (color: string = S.muted): CSSProperties => ({
  fontFamily: MONO,
  fontSize: 11,
  letterSpacing: ".16em",
  textTransform: "uppercase",
  color,
});

export const autoGrid = (min: number): CSSProperties => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit,minmax(min(100%,${min}px),1fr))`,
});

/** A single SVG stroke, normalized (pathLength=1) so GSAP can scrub
 *  strokeDashoffset 1 → 0 regardless of the path's real geometry. */
export function Scribble({ d, viewBox, height = 28, color = S.accent, style }: {
  d: string; viewBox: string; height?: number; color?: string; style?: CSSProperties;
}) {
  return (
    <svg viewBox={viewBox} height={height} fill="none" aria-hidden style={{ display: "block", overflow: "visible", ...style }}>
      <path d={d} pathLength={1} stroke={color} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"
            data-gs-stroke="1" style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
    </svg>
  );
}
