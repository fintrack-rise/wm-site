"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ContactUs } from "@/components/common/contact-us";
import { TRENDS_APP_URL } from "@/lib/trends-app";
import { wmTrack, wmTrackCta } from "@/lib/wm-analytics";

const navLinks = [
  { name: "Product", href: "/#product" },
  { name: "How it works", href: "/#how-it-works" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const trackNav = (label: string, href: string, placement: "header_desktop" | "header_mobile") => {
    wmTrack("wm_site_nav_click", { label, href, placement, pathname });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${isScrolled ? "top-4 right-4 left-4" : "top-0 right-0 left-0"}`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "max-w-[1200px] rounded-2xl border border-foreground/10 bg-background/80 shadow-lg backdrop-blur-xl"
            : "max-w-[1400px] bg-transparent"
        }`}
      >
        <div className={`flex items-center justify-between px-6 transition-all duration-500 lg:px-8 ${isScrolled ? "h-14" : "h-20"}`}>
          <a
            href="/"
            className="group flex shrink-0 items-center gap-2"
            onClick={() => wmTrack("wm_site_logo_click", { pathname, variant: "retail_nav" })}
          >
            <span className={`font-display tracking-tight whitespace-nowrap transition-all duration-500 ${isScrolled ? "text-xl" : "text-2xl"}`}>
              Within Market
            </span>
            <span className={`hidden font-mono text-muted-foreground transition-all duration-500 sm:inline ${isScrolled ? "mt-0.5 text-[10px]" : "mt-1 text-xs"}`}>
              TM
            </span>
          </a>

          <div className="hidden items-center gap-6 xl:gap-10 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => trackNav(link.name, link.href, "header_desktop")}
                className="group relative text-sm text-foreground/70 transition-colors duration-300 hover:text-foreground"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={TRENDS_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                wmTrackCta({
                  cta_label: "sign_in",
                  section: "header_desktop",
                  pathname,
                  destination: TRENDS_APP_URL,
                })
              }
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              Sign in
            </a>
            <ContactUs />
          </div>

          <button
            onClick={() => {
              const next = !isMobileMenuOpen;
              wmTrack("wm_site_mobile_menu_toggle", { open: next, pathname });
              setIsMobileMenuOpen(next);
            }}
            className="p-2 lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`mx-auto mt-2 w-full max-w-[1200px] transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-2 rounded-2xl border border-foreground/10 bg-background/95 shadow-xl backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-foreground/10 px-4 py-3">
            <span className="text-sm font-medium text-muted-foreground">Menu</span>
            <button
              type="button"
              className="rounded-md p-1.5 text-foreground/80 hover:bg-foreground/10"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="max-h-[70vh] overflow-y-auto px-4 py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    trackNav(link.name, link.href, "header_mobile");
                    setIsMobileMenuOpen(false);
                  }}
                  className="rounded-xl px-3 py-3 text-lg font-medium text-foreground hover:bg-foreground/5"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-4 flex gap-3 border-t border-foreground/10 pt-4">
              <a
                href={TRENDS_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  wmTrackCta({
                    cta_label: "sign_in",
                    section: "mobile_menu",
                    pathname,
                    destination: TRENDS_APP_URL,
                  });
                  setIsMobileMenuOpen(false);
                }}
                className="flex-1 rounded-full border border-foreground/20 px-4 py-2.5 text-center text-sm transition hover:bg-foreground/5"
              >
                Sign in
              </a>
              <div className="flex-1">
                <ContactUs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
