"use client";

import { MockWindow } from "@/components/retail/mock-window";
import { PhilosophyMock } from "@/components/retail/philosophy-mock";
import { useInView } from "@/hooks/use-in-view";

const extraFields = [
  ["Preferred sectors", "Compounders, capital-light"],
  ["What you avoid", "High turnover, weak allocation"],
  ["What would change your mind", "ROCE compression, diluted moat"],
];

export function PhilosophySection() {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section id="product" ref={ref} className="relative scroll-mt-28 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <span className="mb-6 inline-flex items-center gap-3 font-mono text-sm text-muted-foreground">
          <span className="h-px w-8 bg-foreground/30" />
          01 · Understand
        </span>
        <h2
          className={`mb-8 font-display text-4xl tracking-tight lg:text-6xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          Tell it how you invest.
        </h2>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:text-xl">
            <p>Every investor has a different way of thinking.</p>
            <p>
              Long-term compounders. Value investors. Growth investors. Income-focused investors. Momentum strategies. Or a combination that is uniquely yours.
            </p>
            <p className="text-foreground">Within Market starts there — through conversation, not a questionnaire.</p>
          </div>
          <MockWindow title="conversation">
            <PhilosophyMock />
            <dl className="mt-2 space-y-2 border-t border-foreground/10 pt-4">
              {extraFields.map(([label, value]) => (
                <div key={label} className="flex items-start justify-between gap-4 py-1">
                  <dt className="font-mono text-xs text-muted-foreground">{label}</dt>
                  <dd className="text-right text-sm">{value}</dd>
                </div>
              ))}
            </dl>
          </MockWindow>
        </div>
      </div>
    </section>
  );
}
