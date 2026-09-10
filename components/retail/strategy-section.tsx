"use client";

import { MockWindow } from "@/components/retail/mock-window";
import { useInView } from "@/hooks/use-in-view";

const inputs = [
  "Investment horizon",
  "Risk tolerance",
  "Preferred sectors",
  "Quality criteria",
  "Valuation discipline",
  "Portfolio constraints",
  "Exit conditions",
];

const outputs = [
  "Companies to investigate",
  "Companies to monitor",
  "Signals that matter",
  "Events that could invalidate the thesis",
];

export function StrategySection() {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section ref={ref} className="relative scroll-mt-28 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <span className="mb-6 inline-flex items-center gap-3 font-mono text-sm text-muted-foreground">
          <span className="h-px w-8 bg-foreground/30" />
          02 · Strategize
        </span>
        <h2
          className={`mb-8 font-display text-4xl tracking-tight lg:text-6xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          Turn your thinking into a strategy.
        </h2>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:text-xl">
            <p>Your philosophy is the starting point. Within Market turns it into something actionable.</p>
            <p>Define what you look for, what you avoid, what matters most, and what would change your mind.</p>
            <p className="text-foreground">AI helps operationalize your investment thinking — it does not pick stocks for you.</p>
          </div>
          <MockWindow title="strategy">
            <p className="mb-3 font-mono text-xs text-muted-foreground">Your philosophy</p>
            <ul className="mb-6 space-y-2">
              {inputs.map((item) => (
                <li key={item} className="border-b border-foreground/5 py-1.5 text-sm">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-3 text-center font-mono text-xs text-muted-foreground">↓ Your strategy</p>
            <ul className="space-y-2">
              {outputs.map((item) => (
                <li key={item} className="rounded-md bg-muted/50 px-3 py-2 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </MockWindow>
        </div>
      </div>
    </section>
  );
}
