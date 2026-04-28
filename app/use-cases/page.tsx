import { ButtonLink } from "@/components/button-link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "Within Market for active investors, analysts, advisory teams, and financial platforms—signal over noise.",
};

const blocks = [
  {
    title: "Active investors",
    body: "Faster discovery of expert conviction, market themes, and asset-level change.",
  },
  {
    title: "Analysts and researchers",
    body: "Structured ways to compare signals across sectors, assets, and expert narratives.",
  },
  {
    title: "Advisory teams",
    body: "A cleaner workflow for tracking market movement and surfacing relevant research faster.",
  },
  {
    title: "Financial platforms",
    body: "A strong intelligence layer for research, engagement, and premium product experiences.",
  },
];

const scenarios = [
  "Track how sentiment around an asset shifts over time",
  "See which experts are most active in a sector",
  "Find related insight through semantic search",
  "Build a personalized research routine with follows and saved items",
];

export default function UseCasesPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-zinc-200 bg-white">
        <div className="wm-grid-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Built for people who need signal, not noise
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-600">
            Whether you invest, analyze, advise, or build products—Within Market is designed around
            decision-ready research workflows.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <ul className="grid gap-6 md:grid-cols-2">
          {blocks.map((b) => (
            <li
              key={b.title}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-8"
            >
              <h2 className="font-display text-lg font-semibold text-zinc-900">{b.title}</h2>
              <p className="mt-3 text-zinc-600 leading-relaxed">{b.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-display text-xl font-semibold text-zinc-900 sm:text-2xl">
            Example workflows
          </h2>
          <ul className="mt-8 space-y-4 text-zinc-700">
            {scenarios.map((s) => (
              <li key={s} className="flex gap-3">
                <span className="text-violet-600">→</span>
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <ButtonLink href="/contact">Talk to Us</ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
