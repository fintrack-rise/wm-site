export const siteName = "Within Market";

export const navItems = [
  { href: "/product", label: "Product" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLinks = [
  ...navItems,
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;
