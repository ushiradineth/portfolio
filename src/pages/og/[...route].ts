import { OGImageRoute } from "astro-og-canvas";

export const { getStaticPaths, GET } = OGImageRoute({
	param: "route",

	pages: {
		index: {
			title: "Hey, I'm Ushira 👋",
			description: "Ushira Dineth's Portfolio",
		},
		projects: {
			title: "Projects - Ushira Dineth",
			description: "Ushira Dineth's Portfolio",
		},
		work: {
			title: "Work - Ushira Dineth",
			description: "Ushira Dineth's Portfolio",
		},
		blog: {
			title: "Blog - Ushira Dineth",
			description: "Ushira Dineth's Portfolio",
		},
	},

	getImageOptions: (_, page) => ({
		title: page.title,
		description: page.description,
		logo: {
			path: "./src/images/self.png",
		},
	}),
});
