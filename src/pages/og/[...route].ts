import { OGImageRoute } from "astro-og-canvas";

export const { getStaticPaths, GET } = OGImageRoute({
	param: "route",

	pages: {
		index: {
			title: "Hey, I'm Ushira!",
			description: "ushira.com",
		},
		projects: {
			title: "Projects",
			description: "ushira.com",
		},
		work: {
			title: "Work Experience",
			description: "ushira.com",
		},
		blog: {
			title: "Blog Posts",
			description: "ushira.com",
		},
	},

	getImageOptions: (_, page) => ({
		title: page.title,
		description: page.description,
		logo: {
			path: "./src/images/self.png",
			size: [300, 300],
		},
		bgImage: {
			path: "./src/images/og-bg.png",
			fit: "cover",
		},
	}),
});
