import type { Social } from "../types";

export const SocialLinks = new Map<"Twitter" | "LinkedIn" | "YouTube" | "Github" | "CV", string>([
  ["Twitter", "https://www.twitter.com/ushiradineth"],
  ["LinkedIn", "https://www.linkedin.com/in/ushiradineth"],
  ["YouTube", "https://www.youtube.com"],
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
    title: "YouTube",
    description: "I occasionally make videos",
    href: SocialLinks.get("YouTube")!,
    icon: "mdi:youtube",
  },
  {
    title: "LinkedIn",
    description: "I occasionally use LinkedIn as well",
    href: SocialLinks.get("LinkedIn")!,
    icon: "mdi:linkedin",
  },
];
