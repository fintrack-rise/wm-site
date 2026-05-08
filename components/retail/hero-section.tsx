"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSphere } from "@/components/common/animated-sphere";
import { wmTrack } from "@/lib/wm-analytics";

type HeroSlide = {
  src: string;
  caption: string;
  device: "desktop" | "mobile";
};

const heroSlides: HeroSlide[] = [
  {
    src: "/retail-app-shots/mobile/feed.jpeg",
    caption: "Focused feed of market signals from experts you follow",
    device: "mobile",
  },
  {
    src: "/retail-app-shots/mobile/search.jpeg",
    caption: "Search across reports, videos, and expert opinions in seconds",
    device: "mobile",
  },
  {
    src: "/retail-app-shots/desktop/chat-citation.png",
    caption: "Ask questions and get source-backed answers with citations",
    device: "desktop",
  },
  {
    src: "/retail-app-shots/desktop/sector-analysis.png",
    caption: "Understand sector-level trends with structured analysis",
    device: "desktop",
  },
  {
    src: "/retail-app-shots/mobile/asset-analysis.jpeg",
    caption: "Analyze assets quickly with clear, actionable breakdowns",
    device: "mobile",
  },
  {
    src: "/retail-app-shots/desktop/expert-analysis.png",
    caption: "Track expert conviction, calls, and changing market views",
    device: "desktop",
  },
];

export function HeroSection() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  const openTrendsApp = (ctaLabel: string) => {
    wmTrack("wm_site_experience_trends_app_click", { pathname, section: "hero", cta_label: ctaLabel });
    window.open("https://trends.withinmarket.com", "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeSlide = heroSlides[slideIndex];
  const goToNextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % heroSlides.length);
  };
  const goToPrevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isLightboxOpen]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated sphere background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-40 pointer-events-none">
        <AnimatedSphere />
      </div>

      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        {/* Eyebrow */}
        <div
          className={`mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="w-8 h-px bg-foreground/30" />
            The platform for modern investors
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-12">
          <h1
            className={`text-[clamp(3rem,12vw,10rem)] font-display leading-[0.9] tracking-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <span className="block">The platform</span>
            <span className="block">for modern investors</span>
          </h1>
        </div>

        {/* Description */}
        <div className="grid gap-10 items-center">
          <div className="space-y-8">
            <p
              className={`text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              Your toolkit to turn information into intelligence.
              Track experts, extract signals, and stay ahead of the market.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <Button
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
                onClick={() => openTrendsApp("experience_trends_app")}
              >
                Experience trends app
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
                onClick={() =>
                  wmTrack("wm_site_watch_demo_click", { pathname, section: "hero", page: "retail" })
                }
              >
                Watch demo
              </Button>
            </div>
          </div>

        </div>

      </div>

      {/* Embedded app screenshot slider */}
      <div
        className={`relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-16 lg:px-12 lg:pb-24 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
      >
        <div
          className="rounded-2xl border border-foreground/10 bg-background p-3 sm:p-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={(e) => {
            setIsPaused(true);
            const x = e.touches[0]?.clientX;
            touchStartXRef.current = typeof x === "number" ? x : null;
          }}
          onTouchEnd={(e) => {
            const startX = touchStartXRef.current;
            const endX = e.changedTouches[0]?.clientX;
            touchStartXRef.current = null;
            setIsPaused(false);
            if (typeof startX !== "number" || typeof endX !== "number") return;
            const deltaX = endX - startX;
            if (Math.abs(deltaX) < 50) return;
            if (deltaX < 0) {
              goToNextSlide();
            } else {
              goToPrevSlide();
            }
          }}
        >
          <div
            className={`relative w-full overflow-hidden rounded-xl bg-muted/40 ${activeSlide.device === "mobile"
              ? "aspect-9/18 max-h-[65vh] mx-auto max-w-[280px] sm:max-w-[320px] md:max-w-[360px]"
              : "aspect-16/10 max-h-[52vh] md:max-h-[56vh]"
              }`}
            role="button"
            tabIndex={0}
            aria-label="Open screenshot in full screen"
            onClick={() => setIsLightboxOpen(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsLightboxOpen(true);
              }
            }}
          >
            <Image
              key={activeSlide.src}
              src={activeSlide.src}
              alt={activeSlide.caption}
              fill
              sizes="(max-width: 768px) 92vw, (max-width: 1280px) 80vw, 1100px"
              className="object-contain"
              priority={slideIndex === 0}
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between px-2 md:flex">
              <button
                type="button"
                aria-label="Previous screenshot"
                className="pointer-events-auto rounded-full bg-background/85 px-3 py-2 text-sm text-foreground shadow-sm transition hover:bg-background"
                onClick={goToPrevSlide}
              >
                Prev
              </button>
              <button
                type="button"
                aria-label="Next screenshot"
                className="pointer-events-auto rounded-full bg-background/85 px-3 py-2 text-sm text-foreground shadow-sm transition hover:bg-background"
                onClick={goToNextSlide}
              >
                Next
              </button>
            </div>
          </div>
          <p className="mt-4 text-center text-sm sm:text-base text-muted-foreground">
            {activeSlide.caption}
          </p>
          <p className="mt-1 text-center text-xs text-muted-foreground md:hidden">
            Swipe to browse screenshots
          </p>
          <div className="mt-3 flex items-center justify-center gap-2">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.src}
                type="button"
                className={`h-1.5 rounded-full transition-all ${idx === slideIndex ? "w-6 bg-foreground/70" : "w-2 bg-foreground/25 hover:bg-foreground/40"
                  }`}
                onClick={() => setSlideIndex(idx)}
                aria-label={`Show screenshot ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {isLightboxOpen ? (
        <div
          className="fixed inset-0 z-80 bg-black/90 p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot preview"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-20 rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium text-black shadow-sm hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              setIsLightboxOpen(false);
            }}
            aria-label="Close full screen preview"
          >
            Close
          </button>
          <div
            className="relative mx-auto h-full w-full max-w-7xl pt-14"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeSlide.src}
              alt={activeSlide.caption}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      ) : null}

      {/* Scroll indicator */}

    </section>
  );
}
