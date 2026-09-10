import { Navigation } from "@/components/retail/navigation";
import { HeroSection } from "@/components/retail/hero-section";
import { ProblemSection } from "@/components/retail/problem-section";
import { PhilosophySection } from "@/components/retail/philosophy-section";
import { StrategySection } from "@/components/retail/strategy-section";
import { ResearchSection } from "@/components/retail/research-section";
import { ValidationSection } from "@/components/retail/validation-section";
import { PortfolioSection } from "@/components/retail/portfolio-section";
import { MonitoringSection } from "@/components/retail/monitoring-section";
import { LoopSection } from "@/components/retail/loop-section";
import { FutureCapabilitiesSection } from "@/components/retail/future-capabilities";
import { IntegrationsSection } from "@/components/retail/integrations-section";
import { CtaSection } from "@/components/retail/cta-section";
import { FooterSection } from "@/components/common/footer-section";

export function RetailLanding() {
  return (
    <main className="noise-overlay relative min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <PhilosophySection />
      <StrategySection />
      <ResearchSection />
      <ValidationSection />
      <PortfolioSection />
      <MonitoringSection />
      <LoopSection />
      <IntegrationsSection />
      <FutureCapabilitiesSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
