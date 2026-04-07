import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for Within Market marketing site.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <h1 className="font-display text-3xl font-semibold text-white">Privacy policy</h1>
      <p className="mt-8 text-sm text-zinc-400 leading-relaxed">
        This page is a placeholder for your legal privacy policy. Replace this content with text
        reviewed by counsel before production use. It should describe what data you collect on this
        marketing site (for example, contact form submissions, analytics cookies), how you use it,
        retention, and user rights.
      </p>
      <p className="mt-6 text-sm text-zinc-500">
        Last updated: {new Date().toISOString().slice(0, 10)}
      </p>
    </div>
  );
}
