const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				text: "var(--text)",
				card: "var(--card)",
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
