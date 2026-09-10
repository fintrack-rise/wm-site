"use client";

import Image from "next/image";
import { MockWindow } from "@/components/retail/mock-window";
import { useInView } from "@/hooks/use-in-view";

const workstreams = ["Filings", "Earnings", "News", "Financials"];

export function ResearchSection() {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section ref={ref} className="relative scroll-mt-28 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <span className="mb-6 inline-flex items-center gap-3 font-mono text-sm text-muted-foreground">
          <span className="h-px w-8 bg-foreground/30" />
          03 · Research
        </span>
        <h2
          className={`mb-8 font-display text-4xl tracking-tight lg:text-6xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          Then let it do the work.
        </h2>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:text-xl">
            <p>Once your strategy is defined, Within Market continuously works through the information that matters to it.</p>
            <p>
              It can research companies, analyze financials, read filings, follow earnings calls, track relevant news, compare businesses and validate investment ideas against your criteria.
            </p>
            <p className="text-foreground">You only see what matters to your strategy.</p>
          </div>
          <div className="space-y-6">
            <MockWindow title="research-loop">
              <p className="mb-4 text-center font-mono text-xs text-muted-foreground">Your strategy</p>
              <div className="mb-6 rounded-md border border-foreground/15 px-4 py-3 text-center font-display text-xl">
                Within Market AI
              </div>
              <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {workstreams.map((item) => (
                  <div key={item} className="rounded-md bg-muted/60 px-2 py-2 text-center font-mono text-xs">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-center text-sm">Relevant findings — not another feed to read.</p>
            </MockWindow>
            <div className="overflow-hidden rounded-xl border border-foreground/10">
              <div className="relative aspect-16/10 bg-muted/40">
                <Image
                  src="/retail-app-shots/desktop/chat-citation.png"
                  alt="Research answers grounded in filings, earnings, and other sources"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover object-top"
                />
              </div>
              <p className="px-4 py-3 text-sm text-muted-foreground">
                Research is evidence for your strategy — including expert notes when they help test a thesis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
