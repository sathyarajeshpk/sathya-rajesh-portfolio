import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cool neutral scale — the whole site is built on these.
        ink: {
          DEFAULT: "#13151A",
          50: "#F4F5F7",
          100: "#E9EBEF",
          200: "#D9DDE4",
          300: "#BFC5CF",
          400: "#8B93A1",
          500: "#697080",
          600: "#454B55",
          700: "#2F343C",
          800: "#1E2127",
          900: "#14171C",
          950: "#0D0F12",
        },
        // Single accent — a deep petrol. Used for rules, numerals, links, focus;
        // never as a fill gradient.
        petrol: {
          DEFAULT: "#175E68",
          50: "#EFF6F7",
          100: "#D6E9EB",
          200: "#AACFD4",
          300: "#7FB9C1",
          400: "#3E8B96",
          500: "#175E68",
          600: "#125058",
          700: "#0E3F46",
          800: "#0A2E33",
          900: "#071F23",
        },
      },
      fontFamily: {
        // One family everywhere. `serif` and `mono` are aliased to it so any
        // stray font-serif/font-mono class stays on the same typeface.
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Display sizes. Tracking tightens as the size grows, which is what
        // keeps a single sans looking deliberate at headline scale.
        "display-sm": ["clamp(1.75rem, 1.3rem + 1.9vw, 2.5rem)", { lineHeight: "1.12", letterSpacing: "-0.025em" }],
        "display": ["clamp(2.2rem, 1.5rem + 3.1vw, 3.6rem)", { lineHeight: "1.06", letterSpacing: "-0.032em" }],
        "display-lg": ["clamp(2.6rem, 1.5rem + 4.8vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.04em" }],
      },
      letterSpacing: {
        label: "0.14em",
      },
      maxWidth: {
        measure: "62ch",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
