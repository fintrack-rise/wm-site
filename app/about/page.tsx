import { ButtonLink } from "@/components/button-link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mission, vision, and positioning for Within Market—connected market intelligence for research-first teams.",
};

const intersections = [
  "Financial research",
  "Intelligence tooling",
  "AI-powered discovery",
  "Relationship-aware market analysis",
];

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            About Within Market
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">Mission</h2>
        <p className="mt-4 max-w-2xl text-xl text-zinc-800 leading-relaxed">
          We believe investors need better tools for understanding markets, not just more content.
        </p>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">Vision</h2>
          <p className="mt-4 max-w-2xl text-xl text-zinc-800 leading-relaxed">
            Within Market is building a connected market intelligence layer that helps people move from
            scattered information to informed conviction.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">Positioning</h2>
        <p className="mt-4 max-w-2xl text-zinc-600 leading-relaxed">
          The product sits at the intersection of:
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {intersections.map((i) => (
            <li
              key={i}
              className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-700"
            >
              {i}
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <ButtonLink href="/contact">Get in touch</ButtonLink>
        </div>
      </section>
    </div>
  );
}
