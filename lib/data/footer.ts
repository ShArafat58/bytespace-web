import type { NavLink } from "@/lib/data/navigation";

export type FooterLinkGroup = {
  label: string;
  links: NavLink[];
};

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    label: "Browse",
    links: [
      { label: "Featured Courses", href: "#courses" },
      { label: "Featured Categories", href: "#courses" },
      { label: "Business", href: "#courses" },
      { label: "IT", href: "#courses" },
      { label: "Design", href: "#courses" },
    ],
  },
  {
    label: "Categories",
    links: [
      { label: "Development", href: "#courses" },
      { label: "Marketing", href: "#courses" },
      { label: "Photography", href: "#courses" },
      { label: "Finance", href: "#courses" },
      { label: "Sport", href: "#courses" },
    ],
  },
  {
    label: "Platform",
    links: [
      { label: "Become a Creator", href: "#creators" },
      { label: "Affiliate Program", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Help", href: "#" },
      { label: "About", href: "#" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
];
