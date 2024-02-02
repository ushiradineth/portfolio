const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "var(--primary)",
				"primary-foreground": "var(--primary-foreground)",
				secondary: "var(--secondary)",
				"secondary-foreground": "var(--secondary-foreground)",
				border: "var(--border)",
				muted: "var(--muted)",
			},
			fontFamily: {
				montserrat: ['"Montserrat Variable"', ...defaultTheme.fontFamily.sans],
				roboto: ['"Roboto Mono Variable"', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
