import type { Job } from "../types";
import surge from "../../images/work/surge-global.png";

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
