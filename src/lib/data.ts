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
import celiao from "../images/projects/celiao.png";
import clonegram from "../images/projects/clonegram.png";
import cron from "../images/projects/cron.png";
import hellotiger from "../images/projects/hello-tiger.png";
import nb from "../images/projects/nb.jpeg";
import studyrooms from "../images/projects/studyrooms.png";
import subm from "../images/projects/subm.png";
import surge from "../images/work/surge-global.png";
import type { Blog, ImageCollection, Job, Project, Social } from "./types";

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

export const jobs: Job[] = [
  {
    company: "Surge Global",
    icon: surge,
    href: "https://surge.global",
    designation: "Software Engineer",
    period: "April 2024 - Present",
    points: [
      "Led a project as Senior Software Engineer and Developer Project Manager, using Agile methodologies with Jira for efficient task management and client communication. Acted as the primary client contact, ensuring clear communication and managing expectations throughout the development lifecycle.",
      "Overhauled system infrastructure migrating to Docker, utilising Ansible for automated environment setup, achieving a 2x increase in feature output within the same timeframe, while substantially enhancing system performance and security.",
    ],
  },
  {
    company: "Surge Global",
    icon: surge,
    href: "https://surge.global",
    designation: "Associate Software Engineer",
    period: "September 2023 - March 2024",
    points: [
      "Led a team to orchestrate the migration of the Hello Tiger infrastructure to an AWS EKS Kubernetes cluster. This initiative yielded substantial improvements in system scalability and cost-efficiency.",
      "Contributed to the design of the infrastructure, ensuring it aligned with specific project requirements, optimizing performance,	and reliability.",
      "Contributed to educating colleagues at Surge Global on Kubernetes, ArgoCD, CI/CD, and more through conducting informative sessions and writing insightful blog posts.",
      "Implemented a comprehensive suite of monitoring and observability tools, including Istio, Prometheus, Grafana, Kiali, and Jaeger, to enable real-time system tracking and tracing, ensuring a smooth and reliable user experience.",
      "Managed and maintained database solutions efficiently by integrating ElasticSearch and the PostgreSQL operator for self-hosted databases, enhancing data control and scalability.",
      "Introduced GitOps practices using ArgoCD and Helm charts to automate deployment process, guaranteeing consistency and efficiency in managing infrastructure and applications on the Kubernetes cluster.",
    ],
  },
  {
    company: "Surge Global",
    icon: surge,
    href: "https://surge.global",
    designation: "Software Engineering Intern",
    period: "March 2023 - August 2023",
    points: [
      "Enhanced the Study Rooms online tuition platform by integrating responsive and reusable components such as Carousels and Card Galleries.",
      "Contributed to extending the GraphQL and NestJS Backend of Study Rooms by implementing features like User OTP verifications, S3 Object Management and Input sanitization etc.",
      "Migrated the Study Rooms infrastructure to an AWS EKS Kubernetes cluster using Terraform, resulting in notable scalability enhancements and cost reductions up to 50%.",
      "Implemented a real-time monitoring and tracing system using Prometheus, Grafana, Kiali, and Jaeger for enhanced system	observability.",
      "Utilized a self-hosted approach with Elasticsearch, MongoDB Ops Manager, and the PostgreSQL operator for efficient data management, scaling, and cost reduction.",
      "Led an individual project, SubM, a Subscription Management Platform, which involved a diverse skill set in technologies like React Native, NextJS, TypeScript, and Terraform.",
      "Gained experience in full-stack development, DevOps, and various technologies such as Kubernetes, AWS, Docker, GraphQL, and more	during the internship.",
    ],
  },
];

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
    link: "https://surge.global/gitops-for-kuberenetes-with-argocd/",
    date: new Date(2024, 2 - 1, 20),
    tags: ["GitOps", "ArgoCD", "Terrafrom", "Kubernetes", "CI/CD"],
  },
  {
    title: "Automated Semantic Versioning with CI",
    link: "https://medium.com/@ushiradineth/automated-semantic-versioning-with-ci-7a331ee4e22f",
    date: new Date(2024, 2 - 1, 3),
    tags: ["GitFlow", "Git", "Semantic Versioning", "Bash", "CI/CD"],
  },
];

export const SocialLinks = new Map<"Twitter" | "LinkedIn" | "Medium" | "Github" | "CV", string>([
  ["Twitter", "https://www.twitter.com/ushiradineth"],
  ["LinkedIn", "https://www.linkedin.com/in/ushiradineth"],
  ["Medium", "https://www.medium.com/@ushiradineth"],
  ["Github", "https://www.github.com/ushiradineth"],
  ["CV", "https://cv.ushira.com"],
]);

export const socials: Social[] = [
  {
    title: "Twitter",
    description: "I barely post on Twitter but hope to use it soon",
    href: SocialLinks.get("Twitter")!,
    icon: "mdi:twitter",
  },
  {
    title: "LinkedIn",
    description: "I occasionally use LinkedIn as well",
    href: SocialLinks.get("LinkedIn")!,
    icon: "mdi:linkedin",
  },
  {
    title: "Medium",
    description: "I occasionally write blog posts",
    href: SocialLinks.get("Medium")!,
    icon: "simple-icons:medium",
  },
];
