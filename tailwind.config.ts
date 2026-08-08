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
        // Warm neutral scale — the whole site is built on these.
        ink: {
          DEFAULT: "#141416",
          50: "#F7F6F3",
          100: "#EFEDE8",
          200: "#DFDBD3",
          300: "#C4BEB2",
          400: "#948D80",
          500: "#6B655B",
          600: "#4A453E",
          700: "#33302B",
          800: "#212024",
          900: "#171719",
          950: "#0E0E10",
        },
        // Single accent. Used for rules, numerals, links, focus — never as a fill gradient.
        copper: {
          DEFAULT: "#B4552B",
          50: "#FBF3EE",
          100: "#F5E1D5",
          200: "#E9C0A8",
          300: "#D89972",
          400: "#C67247",
          500: "#B4552B",
          600: "#984322",
          700: "#78351C",
          800: "#5A2815",
          900: "#3D1C0F",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
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
