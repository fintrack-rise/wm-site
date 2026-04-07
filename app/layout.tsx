import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteName } from "@/lib/site";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-sans-display",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans-body",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: `${siteName} | AI-Powered Market Intelligence Platform`,
    template: `%s | ${siteName}`,
  },
  description:
    "Within Market helps investors and research teams analyze assets, sectors, and expert conviction through connected intelligence, semantic search, and decision-ready market research workflows.",
  keywords: [
    "market intelligence platform",
    "investor research platform",
    "expert sentiment analysis",
    "asset and sector analysis",
    "semantic financial search",
    "AI market research",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    title: `${siteName} | AI-Powered Market Intelligence Platform`,
    description:
      "Connected intelligence for assets, sectors, and experts. Research-first workflows with semantic discovery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full`}>
      <body className={`${sans.className} min-h-full flex flex-col antialiased`}>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
