import type { ThemeKey } from "@/components/site/themes";

export type SectionKey = "top" | "about" | "work" | "experience" | "skills" | "impact" | "testimonials" | "writing" | "contact" | "services" | "faqs";

export const SECTION_LABELS: Record<SectionKey, string> = {
  top: "Home",
  about: "About",
  work: "Selected work",
  experience: "Track record",
  skills: "Capabilities",
  impact: "Impact",
  testimonials: "Testimonials",
  writing: "Writing",
  contact: "Contact",
  services: "Services",
  faqs: "FAQs",
};

/** Each theme names its sections' DOM ids differently — this is the map
 *  that lets the command palette (and nothing else) know where "About"
 *  actually is for whichever theme is currently on screen. A theme that
 *  doesn't have a given section (e.g. only Classic has Services/FAQs;
 *  only the newer three have Impact/Writing) simply omits that key, and
 *  the palette skips it rather than linking to nothing. */
export const SECTION_IDS: Record<ThemeKey, Partial<Record<SectionKey, string>>> = {
  new: { top: "top", about: "about", work: "work", experience: "experience", skills: "skills", impact: "impact", testimonials: "testimonials", writing: "writing", contact: "contact" },
  kinetic: { top: "kt-top", about: "kt-about", work: "kt-work", experience: "kt-track", skills: "kt-skills", impact: "kt-impact", testimonials: "kt-testimonials", writing: "kt-writing", contact: "kt-contact" },
  signature: { top: "sg-top", about: "sg-about", work: "sg-work", experience: "sg-track", skills: "sg-skills", impact: "sg-impact", testimonials: "sg-testimonials", writing: "sg-writing", contact: "sg-contact" },
  ember: { top: "em-top", work: "em-work", experience: "em-experience", contact: "em-contact" },
  classic: { top: "hero", about: "about", work: "projects", experience: "experience", skills: "skills", testimonials: "testimonials", writing: "blog", contact: "contact", services: "services", faqs: "faqs" },
};

export const EMAIL = "sathyarajeshpk@gmail.com";
export const PHONE_INTL = "919597996996";
export const GITHUB_URL = "https://github.com/sathyarajeshpk";
export const LINKEDIN_URL = "https://www.linkedin.com/in/sathyarajeshpk/";
