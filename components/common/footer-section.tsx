"use client";

import { usePathname } from "next/navigation";
import { AnimatedWave } from "./animated-wave";
import { ContactUs } from "./contact-us";
import { wmTrack } from "@/lib/wm-analytics";

const productLinks = [
  { name: "Product", href: "/#product" },
  { name: "How it works", href: "/#how-it-works" },
];

export function FooterSection() {
  const pathname = usePathname();

  return (
    <footer className="relative border-t border-foreground/10">
      <div className="pointer-events-none absolute inset-0 h-64 overflow-hidden opacity-20">
        <AnimatedWave />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-6 lg:gap-8">
            <div className="md:col-span-3">
              <a
                href="/"
                className="mb-6 inline-flex items-center gap-2"
                onClick={() => wmTrack("wm_site_footer_logo_click", { pathname })}
              >
                <span className="font-display text-2xl">Within Market</span>
                <span className="font-mono text-xs text-muted-foreground">TM</span>
              </a>

              <p className="mb-8 max-w-xs leading-relaxed text-muted-foreground">
                Within Market turns your investment philosophy into a continuously working AI investment strategy.
              </p>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-medium">Product</h3>
              <ul className="space-y-4">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() =>
                        wmTrack("wm_site_footer_link_click", {
                          pathname,
                          category: "Product",
                          label: link.name,
                          href: link.href,
                        })
                      }
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-medium">Company</h3>
              <ContactUs
                buttonLabel="Contact"
                buttonClassName="text-sm text-muted-foreground transition-colors hover:text-foreground"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-foreground/10 py-8 md:flex-row">
          <p className="text-sm text-muted-foreground">2026 Within Market Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
