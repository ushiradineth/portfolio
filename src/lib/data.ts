import type { ImageCollection, Project, Job, Blog } from "./types";

import one from "../images/gallery/1.jpeg";
import two from "../images/gallery/2.jpeg";
import three from "../images/gallery/3.jpeg";
import four from "../images/gallery/4.jpeg";
import five from "../images/gallery/5.jpeg";
import six from "../images/gallery/6.jpeg";
import seven from "../images/gallery/7.jpeg";
import eight from "../images/gallery/8.jpeg";
import nine from "../images/gallery/9.jpeg";
import ten from "../images/gallery/10.jpeg";
import eleven from "../images/gallery/11.jpeg";
import twelwe from "../images/gallery/12.jpeg";

export const images: ImageCollection[] = [
	{ file: one, alt: "Tea Castle" },
	{ file: two, alt: "River infront of a mountain" },
	{ file: three, alt: "Picture through a speedboat of a river" },
	{ file: four, alt: "Hike pathway" },
	{ file: five, alt: "Tall tree" },
	{ file: six, alt: "Tall trees" },
	{ file: seven, alt: "Overlooking road from a mountain" },
	{ file: eight, alt: "Person standing infront of a waterfall" },
	{ file: nine, alt: "Grassland with mist" },
	{ file: ten, alt: "Waterfall" },
	{ file: eleven, alt: "Grassland with a small waterfall" },
	{ file: twelwe, alt: "Strawberry flavored sweets" },
];

export const projects: Project[] = [
	{
		title: "Hello Tiger",
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
			{ logo: "ion:logo-apple", href: "https//:apps.apple.com/lk/app/hello-tiger-dating-app-chat/id1575544065" },
			{ logo: "ion:logo-android", href: "https//:play.google.com/store/apps/details?id=com.appello.hellotiger&hl=en" },
		],
	},
	{
		title: "Studyrooms",
		period: "March 2023 - August 2023",
		designation: "Surge Global",
		technologies: ["TypeScript", "NextJS", "NestJS", "GraphQL", "MongoDB", "Terraform", "AWS", "Kubernetes", "Keycloak", "Docker", "Jest"],
		description:
			"An online tuition platform that provides a wide variety of courses and access to skilled tutors, catering to a diverse range of learners.",
		links: [
			{
				logo: "mdi:web",
				href: "https://studyrooms.com",
			},
		],
	},
	{
		title: "SubM",
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
			{ logo: "ion:logo-android", href: "https://github.com/ushiradineth/subapp/releases" },
			{ logo: "mdi:web", href: "https://subm.ushira.com" },
			{ logo: "mdi:github", href: "https://github.com/ushiradineth/subm" },
		],
	},
	{
		title: "Clonegram",
		period: "December 2022 - February 2023",
		designation: "Personal",
		technologies: ["TypeScript", "NextJS", "TailwindCSS", "Prisma", "tRPC", "Vercel"],
		description:
			"A website replicating Instagram built with TypeScript, NextJS, Prisma. Website hosted on Vercel. Database and Storage hosted on Supabase.",
		links: [
			{ logo: "mdi:web", href: "https://clonegram.ushira.com" },
			{ logo: "mdi:github", href: "https://github.com/ushiradineth/clonegram" },
		],
	},
	{
		title: "Celiao",
		period: "December 2022 - February 2023",
		designation: "University",
		technologies: ["Java", "Android Studio", "Firebase", "Javax Mail"],
		description: "A Vehicle Rental Application with User, Booking and other management systems.",
		links: [{ logo: "mdi:github", href: "https://github.com/ushiradineth/carApp" }],
	},
];

export const jobs: Job[] = [
	{
		company: "Surge Global",
		href: "https://surge.global",
		designation: "Associate Software Engineer",
		period: "September 2023 - Present",
		points: [
			"Played a pivotal role in transitioning the existing infrastructure of the Hello Tiger dating app to an AWS EKS Kubernetes cluster, utilizing Terraform for efficient infrastructure management, resulting in a significant improvement in system scalability and cost	efficiency.",
			"Contributed to the design of the infrastructure, ensuring it aligned with specific project requirements, optimizing performance,	and reliability.",
			"Implemented a comprehensive suite of monitoring and observability tools, including Istio, Prometheus, Grafana, Kiali, and Jaeger,	to enable real-time system tracking and tracing, ensuring a smooth and reliable user experience.",
			"Managed and maintained database solutions efficiently by integrating ElasticSearch and the PostgreSQL operator for self-hosted databases, enhancing data control and scalability.",
			"Introduced GitOps practices using ArgoCD and Helm charts to automate deployment processes, guaranteeing consistency and efficiency	in managing infrastructure and applications on the AWS EKS Kubernetes cluster.",
		],
	},
	{
		company: "Surge Global",
		href: "https://surge.global",
		designation: "Software Engineering Intern",
		period: "March 2023 - August 2023",
		points: [
			"Enhanced the StudyRooms online tuition platform by improving the UI, and implementing OTP verifications through SNS.",
			"Played a pivotal role in migrating StudyRooms to AWS EKS Kubernetes using Terraform, significantly enhancing scalability and cost	efficiency.",
			"Implemented a real-time monitoring and tracing system using Prometheus, Grafana, Kiali, and Jaeger for enhanced system	observability.",
			"Utilized a self-hosted approach with Elasticsearch, MongoDB Ops Manager, and the PostgreSQL operator for efficient data management,	scaling, and cost reduction.",
			"Led an individual project, SubM, a Subscription Management Platform, which involved a diverse skill set in technologies like React Native, NextJS, TypeScript, and Terraform.",
			"Gained experience in full-stack development, DevOps, and various technologies such as Kubernetes, AWS, Docker, GraphQL, and more	during the internship.",
		],
	},
];

export const blogs: Blog[] = [
	{
		title: "Bitnami Sealed Secrets + Automating through CI",
		tags: ["GitOps", "ArgoCD", "Terrafrom", "Kubernetes", "CI/CD"],
	},
	{
		title: "AWS Load Balancers for Kubernetes + Setup",
		tags: ["AWS", "Load Balancing", "Terrafrom", "Kubernetes"],
	},
	{
		title: "GitOps for Kuberenetes with ArgoCD",
		tags: ["GitOps", "ArgoCD", "Terrafrom", "Kubernetes", "CI/CD"],
	},
	{
		title: "Automated Semantic Versioning with CI",
		link: "https://medium.com/@ushiradineth/automated-semantic-versioning-with-ci-7a331ee4e22f",
		date: new Date(2024, 2 - 1, 3),
		tags: ["GitFlow", "Git", "Semantic Versioning", "Bash", "CI/CD"],
	},
];
