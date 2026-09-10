"use client";

import { MockWindow } from "@/components/retail/mock-window";
import { useInView } from "@/hooks/use-in-view";

export function MonitoringSection() {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section ref={ref} className="relative scroll-mt-28 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <span className="mb-6 inline-flex items-center gap-3 font-mono text-sm text-muted-foreground">
          <span className="h-px w-8 bg-foreground/30" />
          06 · Monitor
        </span>
        <h2
          className={`mb-8 font-display text-4xl tracking-tight lg:text-6xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          Your strategy keeps working after you close the app.
        </h2>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:text-xl">
            <p>Markets change. Companies change. Your thesis can change.</p>
            <p>Within Market keeps watching the signals connected to your strategy and portfolio.</p>
            <p className="text-foreground">You don&apos;t need to keep checking. You hear about it when it actually matters — and why.</p>
          </div>
          <div className="space-y-6">
            <MockWindow title="relevance-filter">
              <p className="mb-4 text-center font-mono text-xs text-muted-foreground">Your strategy</p>
              <div className="mb-4 grid grid-cols-3 gap-2 text-center font-mono text-[11px] sm:text-xs">
                <div className="rounded-md bg-muted/60 px-2 py-3">Company events</div>
                <div className="rounded-md bg-muted/60 px-2 py-3">Industry changes</div>
                <div className="rounded-md bg-muted/60 px-2 py-3">Macro events</div>
              </div>
              <p className="mb-2 text-center font-mono text-xs">Is it relevant to my strategy?</p>
              <p className="text-center text-sm">Yes → tell me why, and which part of the thesis is affected.</p>
            </MockWindow>
            <MockWindow title="notification">
              <p className="mb-2 font-display text-xl">Something changed in your thesis</p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Management reduced its margin outlook for the next two years.
              </p>
              <p className="mb-4 text-sm leading-relaxed">
                This matters because your strategy depends on sustained operating leverage.
              </p>
              <p className="font-mono text-xs text-foreground/70">Review impact →</p>
            </MockWindow>
          </div>
        </div>
      </div>
    </section>
  );
}
