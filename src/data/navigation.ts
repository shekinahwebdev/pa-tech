import { services } from "./services";

export const mainNav = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: services.map((service) => ({
      label: service.navLabel,
      href: service.href,
      description: service.summary,
      icon: service.icon,
    })),
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerCompanyLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;
