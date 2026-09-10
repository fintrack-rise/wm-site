"use client";

import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { AnimatedTetrahedron } from "@/components/common/animated-tetrahedron";
import { ContactUs } from "@/components/common/contact-us";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-in-view";
import { TRENDS_APP_URL } from "@/lib/trends-app";
import { wmTrack } from "@/lib/wm-analytics";
import { useState } from "react";

export function CtaSection() {
  const pathname = usePathname();
  const { ref, isVisible } = useInView<HTMLDivElement>(0.2);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div
          ref={ref}
          className={`relative border border-foreground transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          onMouseMove={handleMouseMove}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-10 transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`,
            }}
          />

          <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-24">
            <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
              <div className="flex-1">
                <h2 className="mb-8 font-display text-4xl leading-[0.95] tracking-tight lg:text-7xl">
                  You bring the philosophy.
                  <br />
                  It does the work.
                </h2>

                <p className="mb-12 max-w-xl text-xl leading-relaxed text-muted-foreground">
                  Tell Within Market how you invest. It turns that thinking into a strategy, researches and validates it, and comes back when you actually need to decide.
                </p>

                <div className="flex flex-col items-start gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="group h-14 rounded-full bg-foreground px-8 text-base text-background hover:bg-foreground/90"
                    onClick={() => {
                      wmTrack("wm_site_start_trends_app_click", {
                        pathname,
                        section: "cta_banner",
                        page: "retail",
                      });
                      window.open(TRENDS_APP_URL, "_blank", "noopener,noreferrer");
                    }}
                  >
                    Start with your investment philosophy
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <ContactUs buttonClassName="h-14 rounded-full border border-foreground/20 px-8 text-base transition hover:bg-foreground/5" />
                </div>
              </div>

              <div className="-mr-16 hidden h-[500px] w-[500px] items-center justify-center lg:flex">
                <AnimatedTetrahedron />
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 h-32 w-32 border-b border-l border-foreground/10" />
          <div className="absolute bottom-0 left-0 h-32 w-32 border-t border-r border-foreground/10" />
        </div>
      </div>
    </section>
  );
}
