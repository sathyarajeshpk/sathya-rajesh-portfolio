import type { CSSProperties } from "react";

/** Palette for the "Ember" theme — black ground with a crimson-orange
 *  accent, approximated from a screen recording (no source access), so
 *  treat these as close reads rather than exact hex values. */
export const EMBER = {
  bg: "#0A0A0B",
  panel: "#141416",
  panelSoft: "#18181B",
  ink: "#F5F4F0",
  muted: "#9B9B9F",
  soft: "#6E6E72",
  accent: "#E8432B",
  accentDeep: "#B8301C",
  green: "#5FBF6E",
  rule: "rgba(245,244,240,.12)",
  ruleSoft: "rgba(245,244,240,.07)",
} as const;

export const MONO = "'JetBrains Mono', monospace";
export const GROTESK = "'Space Grotesk', sans-serif";
export const SANS = "'DM Sans', sans-serif";

export const shell: CSSProperties = {
  maxWidth: 1240,
  margin: "0 auto",
  padding: "clamp(64px,9vw,128px) clamp(20px,4vw,56px)",
};

export const kicker = (color: string = EMBER.accent): CSSProperties => ({
  fontFamily: MONO,
  fontSize: 11,
  letterSpacing: ".18em",
  textTransform: "uppercase",
  color,
});

export const autoGrid = (min: number): CSSProperties => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit,minmax(min(100%,${min}px),1fr))`,
});

/** The hero's animated smoky glow — layered blurred radial gradients that
 *  slowly drift and pulse via CSS keyframes (data-ember-drift, defined in
 *  globals.css). Stands in for the reference site's smoke/plasma effect,
 *  which was likely WebGL/canvas — this reads as the same "warm glow
 *  breathing behind the wordmark" without needing a render pipeline. */
export function EmberGlow() {
  return (
    <div aria-hidden style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      <div data-ember-drift="1" style={{
        position: "absolute", left: "50%", top: "50%", width: "70vmin", height: "70vmin",
        background: `radial-gradient(circle, ${EMBER.accent}55 0%, ${EMBER.accentDeep}33 40%, transparent 72%)`,
        filter: "blur(38px)", borderRadius: "50%",
      }} />
      <div data-ember-drift="2" style={{
        position: "absolute", left: "50%", top: "50%", width: "48vmin", height: "48vmin",
        background: `radial-gradient(circle, ${EMBER.accent}77 0%, transparent 68%)`,
        filter: "blur(26px)", borderRadius: "50%",
      }} />
    </div>
  );
}
