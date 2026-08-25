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
        bg: "#F4F5EE",
        surface: "#FFFFFE",
        "surface-raised": "#FBFBF6",
        ink: "#1E2A22",
        "ink-soft": "#57614E",
        "ink-faint": "#8B927F",
        line: "#DCDFCE",
        "line-strong": "#C4C9AE",
        primary: {
          DEFAULT: "#2F5233",
          dark: "#1F3924",
          tint: "#E4ECDE",
        },
        accent: {
          DEFAULT: "#C97B3B",
          dark: "#A85F27",
          tint: "#F3E0C7",
        },
      },
      fontFamily: {
        display: ['"Shippori Mincho"', "serif"],
        body: ['"Zen Kaku Gothic New"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
