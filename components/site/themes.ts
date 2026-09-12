import type { ComponentType } from "react";
import ProfileHome from "@/components/site/ProfileHome";
import ClassicHome from "@/components/site/ClassicHome";
import KineticHome from "@/components/site/KineticHome";

export type ThemeKey = "new" | "classic" | "kinetic";

/** Registry of visitor-selectable homepage themes. To add a new one: build its
 *  Home component (see ProfileHome / ClassicHome / KineticHome for the
 *  pattern) and add one entry here — the switcher picks it up automatically. */
export const THEMES: { key: ThemeKey; label: string; component: ComponentType }[] = [
  { key: "new", label: "New — Dark Editorial", component: ProfileHome },
  { key: "kinetic", label: "Kinetic — Bold Olive", component: KineticHome },
  { key: "classic", label: "Classic — Light/Dark", component: ClassicHome },
];

export const DEFAULT_THEME: ThemeKey = "new";
