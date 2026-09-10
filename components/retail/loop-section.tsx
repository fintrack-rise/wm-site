"use client";

import { useInView } from "@/hooks/use-in-view";

const steps = [
  { number: "01", title: "Understand", body: "Tell us how you invest" },
  { number: "02", title: "Strategize", body: "Turn your philosophy into an investment strategy" },
  { number: "03", title: "Research", body: "AI researches and validates ideas for you" },
  { number: "04", title: "Act", body: "Decide, execute and manage your portfolio" },
  { number: "05", title: "Monitor", body: "AI keeps watching and tells you when something matters" },
];

export function LoopSection() {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative scroll-mt-28 overflow-hidden bg-foreground py-24 text-background lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <span className="mb-6 inline-flex items-center gap-3 font-mono text-sm text-background/50">
          <span className="h-px w-8 bg-background/30" />
          The loop
        </span>
        <h2
          className={`mb-16 font-display text-4xl tracking-tight lg:text-6xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          From your thinking to continuous intelligence.
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.number} className="border-t border-background/15 pt-6">
              <p className="mb-4 font-mono text-sm text-background/40">{step.number}</p>
              <h3 className="mb-3 font-display text-2xl lg:text-3xl">{step.title}</h3>
              <p className="text-sm leading-relaxed text-background/60">{step.body}</p>
              {index === steps.length - 1 ? (
                <p className="mt-4 font-mono text-xs text-background/40">↺ back to understand</p>
              ) : null}
            </div>
          ))}
        </div>
        <p className="mt-16 max-w-2xl text-lg text-background/60">
          You delegate research, analysis and monitoring. You keep the decision.
        </p>
      </div>
    </section>
  );
}
