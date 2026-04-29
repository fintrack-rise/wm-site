import { Navigation } from "@/components/business/navigation";
import { HeroSection } from "@/components/business/hero-section";
import { FeaturesSection } from "@/components/business/features-section";
import { HowItWorksSection } from "@/components/business/how-it-works-section";
import { IntegrationsSection } from "@/components/business/integrations-section";
import { CtaSection } from "@/components/business/cta-section";
import { FooterSection } from "@/components/common/footer-section";

export function BusinessLanding() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <IntegrationsSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
