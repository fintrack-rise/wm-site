"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { LOGO_WIDE_HEIGHT, LOGO_WIDE_SRC, LOGO_WIDE_WIDTH } from "@/lib/brand";
import { ContactUs } from "@/components/common/contact-us";
import { TRENDS_APP_URL } from "@/lib/trends-app";
import { wmTrack, wmTrackCta } from "@/lib/wm-analytics";

const navLinks = [
  { name: "Product", href: "/#product" },
  { name: "How it works", href: "/#how-it-works" },
];

type SiteHeaderProps = {
  logoVariant: "retail_nav" | "business_nav";
};

export function SiteHeader({ logoVariant }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const trackNav = (label: string, href: string, placement: "header_desktop" | "header_mobile") => {
    wmTrack("wm_site_nav_click", { label, href, placement, pathname });
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed z-50 hidden transition-all duration-500 lg:block ${
          isScrolled ? "top-4 right-4 left-4" : "top-0 right-0 left-0"
        }`}
      >
        <nav
          className={`mx-auto transition-all duration-500 ${
            isScrolled
              ? "max-w-[1200px] rounded-2xl border border-foreground/10 bg-background/80 shadow-lg backdrop-blur-xl"
              : "max-w-[1400px] bg-transparent"
          }`}
        >
          <div
            className={`flex items-center justify-between px-6 transition-all duration-500 lg:px-8 ${
              isScrolled ? "h-14" : "h-20"
            }`}
          >
            <a
              href="/"
              className="flex shrink-0 items-center"
              onClick={() => wmTrack("wm_site_logo_click", { pathname, variant: logoVariant })}
            >
              <Image
                src={LOGO_WIDE_SRC}
                alt="Within Market"
                width={LOGO_WIDE_WIDTH}
                height={LOGO_WIDE_HEIGHT}
                priority
                className={`w-auto transition-all duration-500 ${isScrolled ? "h-8" : "h-11"}`}
              />
            </a>

            <div className="flex items-center gap-6 xl:gap-10">
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

            <div className="flex items-center gap-4">
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
          </div>
        </nav>
      </header>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/95 pt-[env(safe-area-inset-top)] backdrop-blur-xl lg:hidden">
        <div className="flex h-14 items-center justify-between px-4">
          <a
            href="/"
            className="flex shrink-0 items-center"
            onClick={() => {
              wmTrack("wm_site_logo_click", { pathname, variant: logoVariant });
              closeMobileMenu();
            }}
          >
            <Image
              src={LOGO_WIDE_SRC}
              alt="Within Market"
              width={LOGO_WIDE_WIDTH}
              height={LOGO_WIDE_HEIGHT}
              priority
              className="h-8 w-auto"
            />
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => {
              const next = !isMobileMenuOpen;
              wmTrack("wm_site_mobile_menu_toggle", { open: next, pathname });
              setIsMobileMenuOpen(next);
            }}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {isMobileMenuOpen ? (
      <div className="fixed inset-0 z-40 bg-background pt-[calc(3.5rem+env(safe-area-inset-top))] lg:hidden">
        <nav className="flex h-full flex-col px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <div className="flex flex-1 flex-col justify-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  trackNav(link.name, link.href, "header_mobile");
                  closeMobileMenu();
                }}
                className="border-b border-foreground/10 py-5 font-display text-4xl tracking-tight"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
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
                closeMobileMenu();
              }}
              className="flex h-14 items-center justify-center rounded-full border border-foreground/20 text-base"
            >
              Sign in
            </a>
            <ContactUs buttonClassName="flex h-14 w-full items-center justify-center rounded-full bg-foreground text-base text-background transition hover:bg-foreground/90" />
          </div>
        </nav>
      </div>
      ) : null}
    </>
  );
}
