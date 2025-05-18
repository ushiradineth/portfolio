import type { Job } from "../types";
import surge from "../../images/work/surge-global.png";

export const jobs: Job[] = [
	{
		company: "Surge Global",
		icon: surge,
		href: "https://surge.global",
		designation: "Senior Software Engineer",
		period: "April 2025 – Present",
		points: [
			"Hardened and secured a GKE cluster using private nodes, Istio mTLS, air-gapped networking, and Prowler/Trivy security audits.",
			"Led infrastructure and app deployments behind Cloudflare Zero Trust tunnels, managing NGFW, CronJobs, and multi-cloud alerts.",
			"Handled staging/production infra planning, worked directly with GCP partners and MCIT teams on a government-backed project, ensuring compliance and resilience under strict constraints.",
		],
	},
	{
		company: "Surge Global",
		icon: surge,
		href: "https://surge.global",
		designation: "Software Engineer",
		period: "April 2024 – March 2025",
		points: [
			"Led cloud migrations from Azure to GCP using Terraform, GKE, and a Hub-and-Spoke architecture for a multi-org deployment.",
			"Containerized and deployed systems (WordPress, Keycloak, custom apps) across dev/staging/prod with ArgoCD and Helm.",
			"Built internal observability stack (Loki, Promtail, Tempo, Prometheus), conducted intern interviews, and created dev environments with Ansible and containerd.",
			"Delivered client-facing projects, including VAPT fixes, deployment pipelines, and mobile backend integrations (RevenueCat, Ambassador, Apple Connect), increasing delivery confidence and security posture.",
		],
	},
	{
		company: "Surge Global",
		icon: surge,
		href: "https://surge.global",
		designation: "Associate Software Engineer",
		period: "September 2023 – March 2024",
		points: [
			"Migrated Hello Tiger’s infrastructure to AWS EKS with full CI/CD via ArgoCD and Helm, enabling auto-scaling, observability, and near-zero downtime during releases.",
			"Researched and implemented WebRTC, Spring Boot, Karpenter, and GraalVM optimizations; improved Istio traffic management.",
			"Standardized GitOps workflows, configured observability with Kiali and Prometheus, and maintained secure TLS and sealed secrets.",
			"Created architecture diagrams and demo environments for clients, led Terraform refactoring, and optimized AWS/Azure networking.",
		],
	},
	{
		company: "Surge Global",
		icon: surge,
		href: "https://surge.global",
		designation: "Software Engineering Intern",
		period: "March 2023 – August 2023",
		points: [
			"Enhanced Studyrooms (Next.js + GraphQL) with UI/UX improvements, caching optimizations, and Mongo virtual fields.",
			"Built a Kubernetes-based demo system from scratch with Keycloak, Terraform, and Docker, deployed via Helm.",
			"Explored AWS VPC, EKS, OpenSearch, Jaeger, and Kafka in depth; implemented SNS OTP verification and S3 constraints.",
			"Completed over 25 independent R&D tasks across infrastructure, DevOps, and full-stack engineering, laying a strong foundation in production-readiness and system design.",
		],
	},
];
