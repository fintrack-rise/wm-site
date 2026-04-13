import Link from "next/link";
import { footerLinks, siteName } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-white">
              {siteName}
            </p>
            <p className="mt-2 max-w-sm text-sm text-zinc-500">
              Turn financial noise into structured, actionable intelligence.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-400 transition-colors hover:text-zinc-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-10 border-t border-zinc-800 pt-8 text-xs text-zinc-600">
          © {new Date().getFullYear()} {siteName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
