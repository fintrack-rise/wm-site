"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { brandLogoSrc, navItems, siteName } from "@/lib/site";
import { ButtonLink } from "@/components/button-link";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label={siteName}>
          <img
            src={brandLogoSrc}
            alt=""
            width={44}
            height={44}
            className="h-10 w-10 rounded-lg border border-zinc-200 bg-white object-contain shadow-sm"
          />
          <span className="font-display hidden text-sm font-semibold tracking-tight text-zinc-900 sm:inline">
            {siteName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${isActive(item.href) ? "text-zinc-900" : "text-zinc-600 hover:text-zinc-900"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="/contact"
            className="hidden text-sm text-zinc-600 transition-colors hover:text-zinc-900 md:inline"
          >
            Talk to us
          </Link>
          <ButtonLink href="/trends" variant="primary" className="py-2! px-4! text-xs">
            Explore Trends
          </ButtonLink>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t border-zinc-200 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm text-zinc-700 hover:bg-zinc-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-zinc-200 pt-4">
              <ButtonLink href="/contact" variant="secondary" className="w-full text-center">
                Talk to us
              </ButtonLink>
              <ButtonLink href="/trends" variant="primary" className="w-full text-center">
                Explore Trends
              </ButtonLink>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
