import type { CSSProperties } from "react";

/** Palette for the "Kinetic" theme — olive/cream base with a hard lime accent,
 *  inspired by bold motorsport-athlete sites. Distinct register from the
 *  ink-black petrol-teal "New" theme and the light/dark "Classic" theme. */
export const K = {
  bg: "#F3F1E7",
  bgSoft: "#EAE6D6",
  panel: "#181F11",
  panelSoft: "#212A17",
  ink: "#14180D",
  cream: "#F3F1E7",
  muted: "#565C48",
  soft: "#82886F",
  onDarkMuted: "#B7BDA6",
  onDarkSoft: "#8B927A",
  accent: "#CBEF34",
  accentDeep: "#5B7A17",
  rule: "rgba(20,24,13,.14)",
  ruleSoft: "rgba(20,24,13,.09)",
  ruleOnDark: "rgba(243,241,231,.16)",
  ruleOnDarkSoft: "rgba(243,241,231,.1)",
} as const;

export const MONO = "'JetBrains Mono', monospace";
export const SLAB = "'Roboto Slab', Georgia, serif";
export const ACCENT_SERIF = "'Instrument Serif', Georgia, serif";
export const EASE = "cubic-bezier(.22,1,.36,1)";

export const shell: CSSProperties = {
  maxWidth: 1240,
  margin: "0 auto",
  padding: "clamp(64px,9vw,128px) clamp(20px,4vw,56px)",
};

export const kicker = (color: string = K.muted): CSSProperties => ({
  fontFamily: MONO,
  fontSize: 11,
  letterSpacing: ".16em",
  textTransform: "uppercase",
  color,
});

export const slabDisplay: CSSProperties = {
  fontFamily: SLAB,
  fontWeight: 900,
  fontSize: "clamp(2rem,4.6vw,3.5rem)",
  lineHeight: 1.04,
  letterSpacing: "-.01em",
};

export const autoGrid = (min: number): CSSProperties => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit,minmax(min(100%,${min}px),1fr))`,
});

/** A single normalized (pathLength=1) SVG stroke — the signature-scribble
 *  motif reused wherever a hand-drawn flourish underlines something. */
export function Scribble({ d, viewBox, height = 28, color = K.accent, style }: {
  d: string; viewBox: string; height?: number; color?: string; style?: CSSProperties;
}) {
  return (
    <svg viewBox={viewBox} height={height} fill="none" aria-hidden style={{ display: "block", overflow: "visible", ...style }}>
      <path d={d} pathLength={1} stroke={color} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" data-stroke="1" />
    </svg>
  );
}
