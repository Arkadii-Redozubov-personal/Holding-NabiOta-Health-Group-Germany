import { NavigationItem } from "@/types/content";

export const mainNavigation: NavigationItem[] = [
  { label: "Startseite", href: "/" },
  { label: "Über uns", href: "/about" },
  { label: "Unsere Bereiche", href: "/areas" },
  { label: "Unsere Werte", href: "/values" },
  { label: "Karriere", href: "/career" },
  { label: "News", href: "/news" },
  { label: "Kontakt", href: "/contact" },
];

export const footerLegalNavigation: NavigationItem[] = [
  { label: "Impressum", href: "/imprint" },
  { label: "Datenschutz", href: "/privacy" },
  { label: "Cookie-Einstellungen", href: "#cookies" },
];

export const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com", icon: "Linkedin" },
  { name: "XING", href: "https://www.xing.com", icon: "Briefcase" },
  { name: "Instagram", href: "https://www.instagram.com", icon: "Instagram" },
  { name: "YouTube", href: "https://www.youtube.com", icon: "Youtube" },
];

export const languages = [
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "en", label: "EN", name: "English" },
  { code: "ru", label: "RU", name: "Русский" },
];
