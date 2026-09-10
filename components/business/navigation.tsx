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
      className={`fixed z-50 transition-all duration-500 ${isScrolled
        ? "top-4 left-4 right-4"
        : "top-0 left-0 right-0"
        }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${isScrolled || isMobileMenuOpen
          ? "bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg max-w-[1200px]"
          : "bg-transparent max-w-[1400px]"
          }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${isScrolled ? "h-14" : "h-20"
            }`}
        >
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => wmTrack("wm_site_logo_click", { pathname, variant: "business_nav" })}
          >
            <span className={`font-display tracking-tight transition-all duration-500 ${isScrolled ? "text-xl" : "text-2xl"}`}>Within Market</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => trackNav(link.name, link.href, "header_desktop")}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              const next = !isMobileMenuOpen;
              wmTrack("wm_site_mobile_menu_toggle", { open: next, pathname });
              setIsMobileMenuOpen(next);
            }}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

      </nav>

      {/* Mobile Menu - compact panel */}
      <div
        className={`lg:hidden mx-auto mt-2 w-full max-w-[1200px] transition-all duration-300 ${isMobileMenuOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
      >
        <div className="mx-2 rounded-2xl border border-foreground/10 bg-background/95 backdrop-blur-xl shadow-xl">
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
