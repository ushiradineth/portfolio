const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        border: "var(--border)",
      },
      fontFamily: {
        montserrat: ['"Montserrat Variable"', ...defaultTheme.fontFamily.sans],
        roboto: ['"Roboto Mono Variable"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
