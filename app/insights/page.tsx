import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";

export const metadata: Metadata = {
  title: "Insights (Coming Soon)",
};

export default function InsightsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
        Insights (Coming Soon)
      </p>
      <h1 className="font-display mt-4 text-4xl font-semibold text-zinc-900">
        Intelligence layer for financial professionals
      </h1>
      <p className="mt-5 max-w-2xl text-zinc-600">
        Enterprise workflows for document ingestion, OCR, RAG-based querying, and citation-backed
        analysis over research reports.
      </p>
      <div className="mt-8">
        <ButtonLink href="/contact">Contact for Early Access</ButtonLink>
      </div>
    </section>
  );
}
