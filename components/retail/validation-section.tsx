"use client";

import { MockWindow } from "@/components/retail/mock-window";
import { useInView } from "@/hooks/use-in-view";

const checks = [
  "Revenue growth",
  "Industry structure",
  "Competitive position",
  "Capital allocation",
  "Management execution",
  "Valuation",
  "Key risks",
  "What would invalidate the thesis",
];

export function ValidationSection() {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section ref={ref} className="relative scroll-mt-28 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <span className="mb-6 inline-flex items-center gap-3 font-mono text-sm text-muted-foreground">
          <span className="h-px w-8 bg-foreground/30" />
          04 · Validate
        </span>
        <h2
          className={`mb-8 font-display text-4xl tracking-tight lg:text-6xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          Have an investment idea? Put it to the test.
        </h2>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:text-xl">
            <p>
              Instead of asking AI for an opinion, ask it to <span className="text-foreground">test yours</span>.
            </p>
            <p>The system can validate, challenge and strengthen investment thinking — rather than merely agreeing with you.</p>
          </div>
          <MockWindow title="thesis-test">
            <p className="mb-2 font-mono text-xs text-muted-foreground">You</p>
            <p className="mb-5 rounded-lg bg-muted/60 p-4 text-sm leading-relaxed">
              I think Company X can become a major player in this sector over the next 5 years.
            </p>
            <p className="mb-3 font-mono text-xs text-muted-foreground">Within Market · Let&apos;s test that thesis.</p>
            <ul className="mb-5 space-y-2">
              {checks.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <span className="font-mono text-xs text-foreground/70">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-2 text-center font-mono text-[11px] sm:text-xs">
              <div className="rounded-md border border-foreground/15 px-2 py-2">Supported</div>
              <div className="rounded-md bg-muted px-2 py-2">Needs more evidence</div>
              <div className="rounded-md border border-foreground/15 px-2 py-2">Contradicted</div>
            </div>
          </MockWindow>
        </div>
      </div>
    </section>
  );
}
