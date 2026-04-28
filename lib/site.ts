export const siteName = "WithinMarket";

/** Primary mark for header / hero (square launcher asset). */
export const brandLogoSrc = "/logo-images/ios-192.png";

export const navItems = [
  { href: "/#capabilities", label: "Features" },
  { href: "/#process", label: "How it works" },
  { href: "/product", label: "Product" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerColumns = [
  {
    title: "Product",
    links: [
      { href: "/trends", label: "Trends" },
      { href: "/insights", label: "Insights" },
      { href: "/use-cases", label: "Use cases" },
      { href: "/product", label: "Overview" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
] as const;
