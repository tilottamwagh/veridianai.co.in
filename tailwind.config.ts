import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--color-bg-primary)",
          secondary: "var(--color-bg-secondary)",
          surface: "var(--color-bg-surface)",
        },
        accent: {
          blue: "var(--color-accent-blue)",
          teal: "var(--color-accent-teal)",
          violet: "var(--color-accent-violet)",
          glow: "var(--color-accent-glow)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          active: "var(--color-border-active)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        xl: "12px",
        md: "8px",
        full: "999px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(59,130,246,0.4)",
        "glass-border": "0 1px 0 rgba(255,255,255,0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
