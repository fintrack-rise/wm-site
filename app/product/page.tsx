import { ButtonLink } from "@/components/button-link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Within Market organizes research around assets, sectors, experts, and themes—with semantic search and saved insights.",
};

const capabilities = [
  {
    title: "Asset analysis",
    body: "Explore sentiment and recommendation changes for specific assets over time.",
  },
  {
    title: "Sector analysis",
    body: "Identify broader narratives, compare thematic movement, and see where momentum builds.",
  },
  {
    title: "Expert analysis",
    body: "Track influential voices, map conviction, and connect activity to assets and sectors.",
  },
  {
    title: "Expert following",
    body: "Personalize the platform by following experts whose perspectives matter to you.",
  },
  {
    title: "Semantic search",
    body: "Go beyond exact-match search to discover relevant insight through meaning and context.",
  },
  {
    title: "Saved insights",
    body: "Keep valuable research close at hand so strong ideas are easy to revisit.",
  },
];

const steps = [
  "Follow experts and define your research lens",
  "Explore asset, sector, and expert intelligence",
  "Use search to discover deeper market context",
  "Save and revisit high-value insights",
];

export default function ProductPage() {
  return (
    <div className="border-b border-zinc-200">
      <section className="relative overflow-hidden border-b border-zinc-200 bg-white">
        <div className="wm-glow pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Product overview
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-600 leading-relaxed">
            Within Market is a market intelligence platform that organizes research around assets,
            sectors, experts, and emerging market themes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="font-display text-xl font-semibold text-zinc-900 sm:text-2xl">
          Core capabilities
        </h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <li
              key={c.title}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-6"
            >
              <h3 className="font-medium text-zinc-900">{c.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{c.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-display text-xl font-semibold text-zinc-900 sm:text-2xl">
            How it works
          </h2>
          <ol className="mt-10 space-y-6">
            {steps.map((s, i) => (
              <li key={s} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-violet-300 bg-violet-50 text-sm font-medium text-violet-800">
                  {i + 1}
                </span>
                <p className="pt-1 text-zinc-700">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="font-display text-xl font-semibold text-zinc-900 sm:text-2xl">
          Built for serious research
        </h2>
        <p className="mt-6 max-w-2xl text-zinc-600 leading-relaxed">
          The platform combines structured market data, connected relationship intelligence,
          AI-powered semantic retrieval, and a modern web architecture—so teams can ship a credible,
          scalable intelligence experience.
        </p>
        <div className="mt-10">
          <ButtonLink href="/contact">Request Demo</ButtonLink>
        </div>
      </section>
    </div>
  );
}
