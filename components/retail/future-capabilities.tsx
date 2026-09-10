"use client";

import { useInView } from "@/hooks/use-in-view";

const capabilities = [
  { title: "Understand me", body: "Start from how you actually invest." },
  { title: "Build my strategy", body: "Turn philosophy into something you can run." },
  { title: "Find opportunities", body: "Investigate names that fit your criteria." },
  { title: "Validate my ideas", body: "Test a thesis instead of asking for a pick." },
  { title: "Understand my portfolio", body: "Connect holdings to why you own them." },
  { title: "Monitor my thesis", body: "Watch what would change your mind." },
  { title: "Alert me when something matters", body: "Come back only when a decision is needed." },
];

export function FutureCapabilitiesSection() {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section
      id="future-capabilities"
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
          One system
        </span>
        <h2
          className={`mb-6 font-display text-4xl tracking-tight lg:text-6xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          One intelligence layer across your investment journey
        </h2>
        <p className="mb-16 max-w-2xl text-lg text-background/60">
          These are connected capabilities inside one process — not a catalogue of unrelated features.
        </p>

        <div className="grid gap-0 md:grid-cols-2">
          {capabilities.map((item, index) => (
            <div key={item.title} className="border-t border-background/10 py-8 md:odd:pr-12 md:even:border-l md:even:pl-12">
              <p className="mb-3 font-mono text-xs text-background/40">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mb-2 font-display text-2xl lg:text-3xl">{item.title}</h3>
              <p className="text-background/60">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
