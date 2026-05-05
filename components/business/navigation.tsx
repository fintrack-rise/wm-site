"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ContactUs } from "@/components/common/contact-us";
import { wmTrack } from "@/lib/wm-analytics";

const navLinks = [
  { name: "Retail", href: "/retail" },
  { name: "Business", href: "/business" },
  { name: "Features", href: "#features" },
  { name: "How it works", href: "#how-it-works" },
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
          <div className="hidden md:flex items-center gap-12">
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
          <div className="hidden md:flex items-center gap-4">
            <ContactUs />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              const next = !isMobileMenuOpen;
              wmTrack("wm_site_mobile_menu_toggle", { open: next, pathname });
              setIsMobileMenuOpen(next);
            }}
            className="md:hidden p-2"
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

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${isMobileMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  trackNav(link.name, link.href, "header_mobile");
                  setIsMobileMenuOpen(false);
                }}
                className={`text-5xl font-display text-foreground hover:text-muted-foreground transition-all duration-500 ${isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                  }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms" }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Bottom CTAs */}
          <div className={`flex gap-4 pt-8 border-t border-foreground/10 transition-all duration-500 ${isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            <a
              href="#"
              onClick={() => {
                wmTrack("wm_site_sign_in_click", { pathname, placement: "mobile_menu" });
                setIsMobileMenuOpen(false);
              }}
              className="flex-1 rounded-full border border-foreground/20 px-5 py-3 text-center text-base transition hover:bg-foreground/5"
            >
              Sign in
            </a>
            <div className="flex-1">
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
