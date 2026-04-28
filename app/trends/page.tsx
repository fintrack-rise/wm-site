import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";

export const metadata: Metadata = {
  title: "Trends",
};

export default function TrendsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Trends</p>
      <h1 className="font-display mt-4 text-4xl font-semibold text-zinc-900">Focused investor feed</h1>
      <p className="mt-5 max-w-2xl text-zinc-600">
        Track summaries from financial experts, YouTube channels, and research reports without
        platform noise.
      </p>
      <div className="mt-8">
        <ButtonLink href="/contact" variant="secondary">
          Request Access
        </ButtonLink>
      </div>
    </section>
  );
}
