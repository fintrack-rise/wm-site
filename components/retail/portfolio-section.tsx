"use client";

import { MockWindow } from "@/components/retail/mock-window";
import { useInView } from "@/hooks/use-in-view";

export function PortfolioSection() {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section ref={ref} className="relative scroll-mt-28 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <span className="mb-6 inline-flex items-center gap-3 font-mono text-sm text-muted-foreground">
          <span className="h-px w-8 bg-foreground/30" />
          05 · Portfolio
        </span>
        <h2
          className={`mb-8 font-display text-4xl tracking-tight lg:text-6xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          Your portfolio, understood in context.
        </h2>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:text-xl">
            <p>Your portfolio shouldn&apos;t just show what you own.</p>
            <p className="text-foreground">It should understand why you own it.</p>
            <p>Each holding is connected to your thesis, your strategy criteria, the evidence, recent changes, and the impact on that thesis.</p>
          </div>
          <MockWindow title="RELIANCE · thesis">
            <p className="mb-4 font-display text-3xl">RELIANCE</p>
            <div className="space-y-5 text-sm">
              <div>
                <p className="mb-2 font-mono text-xs text-muted-foreground">Why you own it</p>
                <ul className="space-y-1">
                  <li>✓ Strong cash generation</li>
                  <li>✓ New energy optionality</li>
                  <li>✓ Improving ROCE</li>
                </ul>
              </div>
              <div>
                <p className="mb-2 font-mono text-xs text-muted-foreground">What changed</p>
                <p>⚠ Retail margin pressure</p>
              </div>
              <div>
                <p className="mb-2 font-mono text-xs text-muted-foreground">What matters to your thesis</p>
                <ul className="space-y-1">
                  <li>✓ Core business intact</li>
                  <li>⚠ Monitor capital allocation</li>
                </ul>
              </div>
              <p className="rounded-lg bg-muted/60 p-4 leading-relaxed">
                Thesis remains intact, but watch retail margins and how capital is allocated over the next two years.
              </p>
            </div>
          </MockWindow>
        </div>
      </div>
    </section>
  );
}
