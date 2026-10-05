import type { ReactNode } from "react";
import { FooterSection } from "@/components/common/footer-section";
import { Navigation } from "@/components/retail/navigation";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation />
      <article className="mx-auto max-w-2xl px-6 pb-24 pt-32 lg:px-8">
        <h1 className="text-4xl tracking-tight text-foreground">{title}</h1>
        <div className="mt-10 space-y-10 text-base leading-relaxed text-muted-foreground">{children}</div>
      </article>
      <FooterSection />
    </main>
  );
}
