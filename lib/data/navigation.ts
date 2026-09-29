export type NavLink = {
  label: string;
  href: string;
};

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

export const authNavLinks: NavLink[] = [
  { label: "Sign In", href: "/login" },
  { label: "Join Us", href: "/signup" },
];
