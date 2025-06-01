import type { Project } from "../types";

import celiao from "../../images/projects/celiao.png";
import clonegram from "../../images/projects/clonegram.png";
import cron from "../../images/projects/cron.png";
import hellotiger from "../../images/projects/hello-tiger.png";
import nb from "../../images/projects/nb.jpeg";
import studyrooms from "../../images/projects/studyrooms.png";
import subm from "../../images/projects/subm.png";

export const projects: Project[] = [
	{
		title: "Nucleus Biologics",
		icon: nb,
		period: "April 2024 - Present",
		designation: "Surge Global",
		technologies: ["PHP", "Laravel", "Vue.js", "Nuxt.js", "Ansible", "VMs", "Docker", "Linux"],
		description:
			"A robust, secure, and user-friendly e-commerce platform for custom cell culture media, enabling seamless purchasing and unparalleled client satisfaction.",
		links: [
			{
				label: "Website",
				logo: "mdi:web",
				href: "https://nucleusbiologics.com/",
			},
		],
	},
	{
		title: "Cron",
		icon: cron,
		period: "February 2023 - April 2024",
		designation: "Personal",
		technologies: ["TypeScript", "Go", "NextJS", "React DND", "Tempo", "AWS", "Terraform", "Vercel"],
		description:
			"An intuitive, secure, and stress-free task and calendar management solution, ensuring streamlined organization with effortless ease and peace of mind.",
		links: [
			{ label: "Website", logo: "mdi:web", href: "https://cron.ushira.com" },
			{
				label: "GitHub",
				logo: "mdi:github",
				href: "https://github.com/ushiradineth/cron",
			},
		],
	},
	{
		title: "Hello Tiger",
		icon: hellotiger,
		period: "September 2023 - January 2023",
		designation: "Surge Global",
		technologies: [
			"Terraform",
			"AWS",
			"Kubernetes",
			"Docker",
			"Keycloak",
			"PostgreSQL",
			"Prometheus",
			"Grafana",
			"Jaeger",
			"Istio",
			"Kiali",
		],
		description:
			"A faster, safer, and hassle-free dating app prioritizing user satisfaction and safety for a top-notch online dating experience.",
		links: [
			{
				label: "Apple Store",
				logo: "mdi:apple",
				href: "https://apps.apple.com/lk/app/hello-tiger-dating-app-chat/id1575544065",
			},
			{
				label: "Google Play Store",
				logo: "mdi:android",
				href: "https://play.google.com/store/apps/details?id=com.appello.hellotiger&hl=en",
			},
		],
	},
	{
		title: "Studyrooms",
		icon: studyrooms,
		period: "March 2023 - August 2023",
		designation: "Surge Global",
		technologies: ["TypeScript", "NextJS", "NestJS", "GraphQL", "MongoDB", "Terraform", "AWS", "Kubernetes", "Keycloak", "Docker", "Jest"],
		description:
			"An online tuition platform that provides a wide variety of courses and access to skilled tutors, catering to a diverse range of learners.",
		links: [
			{
				label: "Website",
				logo: "mdi:web",
				href: "https://studyrooms.com",
			},
		],
	},
	{
		title: "SubM",
		icon: subm,
		period: "March 2023 - August 2023",
		designation: "University",
		technologies: [
			"TypeScript",
			"NextJS",
			"Expo",
			"React Native",
			"Turborepo",
			"PostgreSQL",
			"TailwindCSS",
			"Prisma",
			"tRPC",
			"React Mail",
			"Vercel",
		],
		description: "A Subscription management platform for businesses and users, connecting subscriptions, consumers, and providers.",
		links: [
			{
				label: "Android APK",
				logo: "mdi:android",
				href: "https://github.com/ushiradineth/subapp/releases",
			},
			{ label: "Website", logo: "mdi:web", href: "https://subm.ushira.com" },
			{
				label: "GitHub",
				logo: "mdi:github",
				href: "https://github.com/ushiradineth/subm",
			},
		],
	},
	{
		title: "Clonegram",
		icon: clonegram,
		period: "December 2022 - February 2023",
		designation: "Personal",
		technologies: ["TypeScript", "NextJS", "TailwindCSS", "Prisma", "tRPC", "Vercel"],
		description:
			"A website replicating Instagram built with TypeScript, NextJS, Prisma. Website hosted on Vercel. Database and Storage hosted on Supabase.",
		links: [
			{
				label: "Website",
				logo: "mdi:web",
				href: "https://clonegram.ushira.com",
			},
			{
				label: "GitHub",
				logo: "mdi:github",
				href: "https://github.com/ushiradineth/clonegram",
			},
		],
	},
	{
		title: "Celiao",
		icon: celiao,
		period: "December 2022 - February 2023",
		designation: "University",
		technologies: ["Java", "Android Studio", "Firebase"],
		description: "A Vehicle Rental Application with User, Booking and other management systems.",
		links: [
			{
				label: "GitHub",
				logo: "mdi:github",
				href: "https://github.com/ushiradineth/carApp",
			},
		],
	},
];
