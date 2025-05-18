import type { Social } from "../types";

export const SocialLinks = new Map<"Twitter" | "LinkedIn" | "YouTube" | "Github" | "Instagram" | "CV", string>([
	["Twitter", "https://www.twitter.com/ushiradineth"],
	["LinkedIn", "https://www.linkedin.com/in/ushiradineth"],
	["YouTube", "https://www.youtube.com"],
	["Github", "https://www.github.com/ushiradineth"],
	["Instagram", "https://www.instagram.com"],
	["CV", "https://cv.ushira.com"],
]);

export const socials: Social[] = [
	{
		title: "Twitter",
		description: "Occasional thoughts, links, and ramblings.",
		href: SocialLinks.get("Twitter")!,
		icon: "mdi:twitter",
	},
	{
		title: "YouTube [SOON]",
		description: "Technical breakdowns, experiments, and dev videos.",
		href: SocialLinks.get("YouTube")!,
		icon: "mdi:youtube",
	},
	{
		title: "LinkedIn",
		description: "Professional updates and work history.",
		href: SocialLinks.get("LinkedIn")!,
		icon: "mdi:linkedin",
	},
	{
		title: "Instagram [SOON]",
		description: "Day-to-day updates from a WFH software engineer.",
		href: SocialLinks.get("Instagram")!,
		icon: "mdi:instagram",
	},
];
