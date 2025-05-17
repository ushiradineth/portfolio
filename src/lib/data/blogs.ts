import type { Blog } from "../types";

export const blogs: Blog[] = [
	{
		title: "Automation with Ansible",
		tags: ["Automation", "CI/CD", "VMs", "Cloud"],
	},
	{
		title: "Bitnami Sealed Secrets + Automating through CI",
		tags: ["GitOps", "ArgoCD", "Terrafrom", "Kubernetes", "CI/CD"],
	},
	{
		title: "AWS Load Balancers for Kubernetes + Setup",
		tags: ["AWS", "Load Balancing", "Terrafrom", "Kubernetes"],
	},
	{
		title: "GitOps for Kubernetes with ArgoCD",
		link: "/blog/gitops-with-argocd/",
		date: new Date(2024, 2 - 1, 20),
		tags: ["GitOps", "ArgoCD", "Terrafrom", "Kubernetes", "CI/CD"],
	},
	{
		title: "Automated Semantic Versioning with CI",
		link: "/blog/automated-semantic-versioning-with-ci/",
		date: new Date(2024, 2 - 1, 3),
		tags: ["GitFlow", "Git", "Semantic Versioning", "Bash", "CI/CD"],
	},
];
