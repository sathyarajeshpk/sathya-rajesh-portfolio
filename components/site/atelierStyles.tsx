import type { CSSProperties } from "react";

/** Palette for the "Atelier" theme — quiet luxury: a warm charcoal ground,
 *  ivory text, and a single restrained champagne-gold accent used sparingly
 *  (the restraint is the point — loud is the opposite of premium). */
export const ATELIER = {
  bg: "#0E0D0C",
  bgAlt: "#141210",
  panel: "#181512",
  panelSoft: "#1D1915",
  ink: "#F4EFE6",
  muted: "#A89E8E",
  soft: "#746B5D",
  gold: "#C9A961",
  goldDeep: "#8F7638",
  rule: "rgba(244,239,230,.12)",
  ruleSoft: "rgba(244,239,230,.07)",
} as const;

export const SANS = "'DM Sans', sans-serif";
export const SERIF = "'Cormorant Garamond', Georgia, serif";

export const shell: CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "clamp(72px,10vw,144px) clamp(20px,4vw,56px)",
};

/** Letter-spaced small-caps-style label — sans, not mono, deliberately: a
 *  monospace label reads "technical"; wide-tracked serif-adjacent sans
 *  reads "editorial/luxury" instead. */
export const kicker = (color: string = ATELIER.gold): CSSProperties => ({
  fontFamily: SANS,
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: ".22em",
  textTransform: "uppercase",
  color,
});

export const display: CSSProperties = {
  fontFamily: SERIF,
  fontWeight: 500,
  fontSize: "clamp(2.1rem,4.4vw,3.6rem)",
  lineHeight: 1.08,
  letterSpacing: "-.01em",
};

export const autoGrid = (min: number): CSSProperties => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit,minmax(min(100%,${min}px),1fr))`,
});

/** A thin monogram crest — the one overtly "bespoke" signature flourish,
 *  echoed subtly rather than repeated loudly. Ring draws in via the shared
 *  [data-stroke] pathLength=1 mechanism already defined in globals.css. */
export function Crest({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden>
      <circle cx="32" cy="32" r="29" fill="none" stroke={ATELIER.rule} strokeWidth="1" />
      <circle cx="32" cy="32" r="29" fill="none" stroke={ATELIER.gold} strokeWidth="1" pathLength={1}
              style={{ strokeDasharray: 1, strokeDashoffset: 1 }} data-stroke="1" />
      <text x="32" y="40" textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontSize="22" fill={ATELIER.ink}>SR</text>
    </svg>
  );
}
