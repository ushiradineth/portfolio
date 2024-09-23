import { OGImageRoute } from "astro-og-canvas";
import { getCollection, type CollectionEntry } from "astro:content";

const pages = {
	index: {
		title: "portfolio",
	},
	projects: {
		title: "projects",
	},
	work: {
		title: "work",
	},
	blog: {
		title: "blog",
	},
};

const blogPosts: CollectionEntry<"blog">[] = await getCollection("blog");

const blogs = Object.fromEntries(blogPosts.map(({ slug, data }) => [`blog/${slug}`, { title: data.title, description: data.description }]));

export const { getStaticPaths, GET } = OGImageRoute({
	param: "route",

	pages: {
		...pages,
		...blogs,
	},

	getImageOptions: (_, page) => ({
		title: page.title,
		description: page.description,
		bgImage: {
			path: "./src/images/og-bg.png",
		},
		fonts: ["https://cdn.jsdelivr.net/fontsource/fonts/roboto-mono:vf@latest/latin-wght-normal.woff2"],
		font: {
			title: {
				color: [0, 0, 0],
				families: ["Roboto Mono"],
				size: 80,
			},
			description: {
				color: [0, 0, 0],
				families: ["Roboto Mono"],
				size: 30,
			},
		},
	}),
});
