export const siteName = "WithinMarket";

/** Primary mark for header / hero (square launcher asset). */
export const brandLogoSrc = "/logo-images/ios-192.png";

export const navItems = [
  { href: "/trends", label: "Trends" },
  { href: "/insights", label: "Insights (Coming Soon)" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLinks = [
  ...navItems,
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;
