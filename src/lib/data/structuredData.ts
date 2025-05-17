import { type Article, type Person, type WebSite, type WithContext } from "schema-dts";
import avatar from "../../images/self.png";
import type { CollectionEntry } from "astro:content";
import { SocialLinks } from "./socials";

export const blogWebsite: WithContext<WebSite> = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	url: `${import.meta.env.SITE}/blog/`,
	name: "Ushira Dineth Blog",
	description: "Ushira Dineth's blog about software engineering",
	inLanguage: "en_US",
};

export const mainWebsite: WithContext<WebSite> = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	url: import.meta.env.SITE,
	name: "Ushira Dineth Portfolio",
	description: "Ushira Dineth's contact page, portfolio and blog",
	inLanguage: "en_US",
};

export const personSchema: WithContext<Person> = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Ushira Dineth",
	url: "https://ushira.com",
	image: `${import.meta.env.SITE}${avatar.src}`,
	sameAs: [
		SocialLinks.get("Twitter")!,
		SocialLinks.get("LinkedIn")!,
		SocialLinks.get("Github")!,
		SocialLinks.get("CV")!,
		SocialLinks.get("YouTube")!,
	],
	jobTitle: "Software Engineer",
	worksFor: {
		"@type": "Organization",
		name: "Surge Global",
		url: "https://surge.global",
	},
};

export function getArticleSchema(post: CollectionEntry<"blog">) {
	const articleStructuredData: WithContext<Article> = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: post.data.title,
		url: `${import.meta.env.SITE}/blog/${post.slug}/`,
		image: {
			"@type": "ImageObject",
			url: `${import.meta.env.SITE}/og/blog/${post.slug}/`,
		},
		description: post.data.description,
		datePublished: post.data.date.toString(),
		publisher: {
			"@type": "Person",
			name: "Ushira Dineth",
			url: import.meta.env.SITE,
			image: import.meta.env.SITE + avatar.src,
		},
		author: {
			"@type": "Person",
			name: "Ushira Dineth",
			url: import.meta.env.SITE,
			image: import.meta.env.SITE + avatar.src,
		},
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `${import.meta.env.SITE}/blog/${post.slug}/`,
		},
	};
	return articleStructuredData;
}
