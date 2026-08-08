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
        sans: [
          '"Comic Sans MS"',
          '"Comic Sans"',
          "var(--font-sans)", // Comic Neue — webfont fallback for Linux/Android
          '"Chalkboard SE"',
          "cursive",
        ],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Editorial display sizes with tightened leading and tracking.
        "display-sm": ["clamp(1.9rem, 1.4rem + 2vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display": ["clamp(2.4rem, 1.6rem + 3.4vw, 4rem)", { lineHeight: "1.04", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(3rem, 1.7rem + 5.4vw, 5.75rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
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
