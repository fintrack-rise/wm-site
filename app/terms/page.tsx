import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for Within Market marketing site.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <h1 className="font-display text-3xl font-semibold text-zinc-900">Terms of use</h1>
      <p className="mt-8 text-sm text-zinc-600 leading-relaxed">
        This page is a placeholder for your terms of use. Replace with counsel-approved terms that
        cover acceptable use of the marketing site, disclaimers (especially around financial content),
        limitation of liability, and governing law.
      </p>
      <p className="mt-6 text-sm text-zinc-500">
        Last updated: {new Date().toISOString().slice(0, 10)}
      </p>
    </div>
  );
}
