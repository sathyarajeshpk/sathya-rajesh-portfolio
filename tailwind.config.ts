import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Comic Sans MS where it exists (Windows, macOS), Comic Neue as the
        // webfont fallback everywhere else. One family for the whole page.
        sans: [
          '"Comic Sans MS"',
          '"Comic Sans"',
          "var(--font-sans)",
          '"Chalkboard SE"',
          "cursive",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
