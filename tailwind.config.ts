import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FCFAF1",
        surface: "#FFFFFF",
        "surface-raised": "#FBF6E8",
        ink: "#363A29",
        "ink-soft": "#6E7259",
        "ink-faint": "#95977C",
        line: "#ECE6D4",
        "line-strong": "#DED2A8",
        primary: {
          DEFAULT: "#4C8548",
          dark: "#2F5A2A",
          tint: "#E7F2E0",
        },
        accent: {
          DEFAULT: "#C05F3E",
          dark: "#96482E",
          tint: "#FBEAE1",
        },
        sand: {
          DEFAULT: "#F3EBD7",
          ink: "#5B5636",
        },
      },
      fontFamily: {
        display: ['"Zen Maru Gothic"', "sans-serif"],
        body: ['"Zen Maru Gothic"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
