import { Navigation } from "@/components/retail/navigation";
import { HeroSection } from "@/components/retail/hero-section";
import { FeaturesSection } from "@/components/retail/features-section";
import { FutureCapabilitiesSection } from "@/components/retail/future-capabilities";
import { InfrastructureSection } from "@/components/retail/infrastructure-section";
import { MetricsSection } from "@/components/retail/metrics-section";
import { IntegrationsSection } from "@/components/retail/integrations-section";
import { SecuritySection } from "@/components/retail/security-section";
import { DevelopersSection } from "@/components/retail/developers-section";
import { TestimonialsSection } from "@/components/retail/testimonials-section";
import { PricingSection } from "@/components/retail/pricing-section";
import { CtaSection } from "@/components/retail/cta-section";
import { FooterSection } from "@/components/common/footer-section";

export function RetailLanding() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <FutureCapabilitiesSection />
      <IntegrationsSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
