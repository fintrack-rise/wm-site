"use client";

import { useInView } from "@/hooks/use-in-view";

const sources = ["News", "Research", "Earnings", "Filings", "Macro", "Prices"];

export function ProblemSection() {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section ref={ref} className="relative scroll-mt-28 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <span className="mb-6 inline-flex items-center gap-3 font-mono text-sm text-muted-foreground">
          <span className="h-px w-8 bg-foreground/30" />
          The problem
        </span>
        <h2
          className={`mb-10 font-display text-4xl tracking-tight lg:text-6xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          You don&apos;t need more information.
          <br />
          <span className="text-muted-foreground">You need less work.</span>
        </h2>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:text-xl">
            <p>Markets generate more information every day than any investor can realistically process.</p>
            <p>News. Earnings. Filings. Analyst research. Macro events. Price movements. Management commentary.</p>
            <p>The hard part isn&apos;t finding information.</p>
            <p className="text-foreground">It&apos;s knowing what matters to your strategy.</p>
          </div>

          <div className="border border-foreground/10 p-6 sm:p-8">
            <div className="space-y-3">
              {sources.map((source) => (
                <div key={source} className="flex items-center gap-3">
                  <span className="w-24 font-mono text-xs text-muted-foreground sm:w-28">{source}</span>
                  <span className="h-px flex-1 bg-foreground/15" />
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-4">
              <span className="h-px flex-1 bg-foreground/20" />
              <span className="rounded-full border border-foreground/20 px-4 py-2 font-mono text-sm">YOU</span>
              <span className="h-px flex-1 bg-foreground/20" />
            </div>
            <p className="mt-4 text-center font-mono text-xs text-muted-foreground">Read → Analyze → Decide</p>
            <p className="mt-6 text-center font-display text-2xl">Too much work</p>
          </div>
        </div>
      </div>
    </section>
  );
}
