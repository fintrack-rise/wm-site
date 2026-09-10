"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { AnimatedSphere } from "@/components/common/animated-sphere";
import { MockWindow } from "@/components/retail/mock-window";
import { PhilosophyMock } from "@/components/retail/philosophy-mock";
import { Button } from "@/components/ui/button";
import { TRENDS_APP_URL } from "@/lib/trends-app";
import { wmTrackCta } from "@/lib/wm-analytics";

export function HeroSection() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openTrendsApp = (ctaLabel: string) => {
    wmTrackCta({
      cta_label: ctaLabel,
      section: "hero",
      pathname,
      destination: TRENDS_APP_URL,
    });
    window.open(TRENDS_APP_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 right-0 h-[600px] w-[600px] -translate-y-1/2 opacity-40 lg:h-[800px] lg:w-[800px]">
        <AnimatedSphere />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{ top: `${12.5 * (i + 1)}%`, left: 0, right: 0 }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{ left: `${8.33 * (i + 1)}%`, top: 0, bottom: 0 }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pt-32 pb-12 lg:px-12 lg:pt-40 lg:pb-16">
        <div className={`mb-8 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
          <span className="inline-flex items-center gap-3 font-mono text-sm text-muted-foreground">
            <span className="h-px w-8 bg-foreground/30" />
            Your thinking, continuously at work
          </span>
        </div>

        <h1
          className={`mb-10 font-display text-[clamp(2.25rem,7vw,6.5rem)] leading-[0.92] tracking-tight transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <span className="block">Your investment philosophy.</span>
          <span className="block">Put to work.</span>
        </h1>

        <div className="space-y-8">
          <p
            className={`max-w-2xl text-xl leading-relaxed text-muted-foreground lg:text-2xl transition-all delay-200 duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            Within Market understands how you invest, helps turn your philosophy into a strategy, does the research for you, and keeps watching what matters — so you don&apos;t have to.
          </p>

          <div
            className={`flex flex-col items-start gap-4 sm:flex-row transition-all delay-300 duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            <Button
              size="lg"
              className="group h-14 rounded-full bg-foreground px-8 text-base text-background hover:bg-foreground/90"
              onClick={() => openTrendsApp("start_with_philosophy")}
            >
              Start with your investment philosophy
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-foreground/20 px-8 text-base hover:bg-foreground/5"
              onClick={() => {
                wmTrackCta({
                  cta_label: "see_how_it_works",
                  section: "hero",
                  pathname,
                });
                document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See how it works
            </Button>
          </div>
        </div>
      </div>

      <div className={`relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-16 lg:px-12 lg:pb-24 transition-all delay-500 duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
        <div className="mx-auto max-w-2xl">
          <MockWindow
            title="philosophy.md"
            footer={<p className="font-mono text-xs text-muted-foreground">Build a strategy around this?</p>}
          >
            <PhilosophyMock compact />
          </MockWindow>
        </div>
      </div>
    </section>
  );
}
