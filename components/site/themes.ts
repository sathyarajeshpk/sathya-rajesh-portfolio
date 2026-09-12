import dynamic from "next/dynamic";
import type { ComponentType } from "react";

export type ThemeKey = "new" | "classic" | "kinetic" | "signature";

/** Registry of visitor-selectable homepage themes. Each is dynamically
 *  imported so only the active theme's JS (and its dependencies — Signature
 *  alone pulls in gsap + lenis) ships to a given visitor, instead of all
 *  four bundles loading up front. To add a new one: build its Home
 *  component (see ProfileHome / ClassicHome / KineticHome / SignatureHome
 *  for the pattern) and add one entry here — the switcher picks it up
 *  automatically. */
export const THEMES: { key: ThemeKey; label: string; component: ComponentType }[] = [
  { key: "new", label: "New — Dark Editorial", component: dynamic(() => import("@/components/site/ProfileHome")) },
  { key: "kinetic", label: "Kinetic — Bold Olive", component: dynamic(() => import("@/components/site/KineticHome")) },
  { key: "signature", label: "Signature — GSAP Motion", component: dynamic(() => import("@/components/site/SignatureHome")) },
  { key: "classic", label: "Classic — Light/Dark", component: dynamic(() => import("@/components/site/ClassicHome")) },
];

export const DEFAULT_THEME: ThemeKey = "new";
