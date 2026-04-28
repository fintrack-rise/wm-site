import Link from "next/link";
import { footerColumns, siteName } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <p className="font-display text-lg font-semibold tracking-tight text-zinc-900">{siteName}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-600">
              The platform for teams who need clear financial signal. Structure experts, reports, and
              market context in one place.
            </p>
            <p className="mt-6 flex items-center gap-2 text-xs text-zinc-500">
              <span className="inline-block size-1.5 rounded-full bg-emerald-500" aria-hidden />
              Systems operational
            </p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="wm-section-label">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-14 border-t border-zinc-200 pt-8 text-xs text-zinc-500">
          © {new Date().getFullYear()} {siteName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
