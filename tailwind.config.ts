import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fdf8e8",
          100: "#faefc5",
          200: "#f5df8a",
          300: "#eecb4a",
          400: "#e6b71e",
          500: "#c99a11",
          600: "#a6780c",
          700: "#83590e",
          800: "#6d4712",
          900: "#5c3b14",
        },
        dark: {
          50: "#f5f5f5",
          100: "#e5e5e5",
          200: "#cccccc",
          300: "#999999",
          400: "#666666",
          500: "#444444",
          600: "#333333",
          700: "#222222",
          800: "#1a1a1a",
          900: "#111111",
          950: "#0a0a0a",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
