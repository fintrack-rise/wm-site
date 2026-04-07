import { ButtonLink } from "@/components/button-link";
import { ProductPreviewMock } from "@/components/product-preview-mock";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

const benefits = [
  {
    title: "Connected intelligence",
    body: "Link experts, assets, and sectors instead of analyzing each in isolation.",
  },
  {
    title: "Signal over noise",
    body: "Surface patterns and trends instead of drowning in disconnected posts.",
  },
  {
    title: "Personalized research",
    body: "Follow the analysts that matter and shape your workspace around your lens.",
  },
  {
    title: "Semantic search",
    body: "Discover relevant insight by meaning and context, not only keywords.",
  },
  {
    title: "Trend-based analysis",
    body: "See sentiment and recommendation movement over time with clear buckets.",
  },
  {
    title: "Decision-ready workflows",
    body: "Move from discovery to conviction in one connected research flow.",
  },
];

const audiences = [
  { title: "Active investors", body: "Higher-signal research in less time." },
  { title: "Research analysts", body: "Structured comparison across narratives and themes." },
  { title: "Advisory teams", body: "Track movement and surface research faster." },
  { title: "Financial platforms", body: "An intelligence layer for discovery and premium UX." },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-zinc-800/80">
        <div className="wm-glow pointer-events-none absolute inset-0" aria-hidden />
        <div className="wm-grid-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-amber-500/90">
            Market intelligence
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Market intelligence, made decision-ready
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Within Market helps investors cut through noise by turning expert signals, asset trends,
            sector narratives, and market relationships into one intelligent research experience.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/contact">Request Demo</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Get Early Access
            </ButtonLink>
            <ButtonLink href="/product" variant="ghost" className="px-0!">
              Explore Product →
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800/80 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-display max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
            Most market research tools give you content. Very few give you clarity.
          </h2>
          <p className="mt-6 max-w-2xl text-zinc-400 leading-relaxed">
            Investors are forced to piece together decisions from fragmented research, disconnected
            expert commentary, noisy feeds, and tools that surface keywords instead of insight.
            Within Market turns that fragmented flow into structured, decision-ready intelligence.
          </p>
        </div>
      </section>

      <section className="border-b border-zinc-800/80">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            One connected workspace for market research
          </h2>
          <p className="mt-6 max-w-2xl text-zinc-400 leading-relaxed">
            Within Market combines asset analysis, sector analysis, expert intelligence, and semantic
            discovery into a single workflow. Instead of jumping across tools, move from signal
            discovery to conviction-building in one place.
          </p>
        </div>
      </section>

      <section className="border-b border-zinc-800/80 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Why Within Market stands out
          </h2>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <li
                key={b.title}
                className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-700"
              >
                <h3 className="font-medium text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{b.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-zinc-800/80">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <h2 className="font-display text-center text-2xl font-semibold text-white sm:text-3xl">
            Your research workspace
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm text-zinc-400">
            A single surface for analysis, search, and saved insight—without fake performance claims
            or noisy trading chrome.
          </p>
          <div className="mt-14">
            <ProductPreviewMock />
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800/80 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Not another finance content feed
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
                Traditional tools
              </p>
              <ul className="mt-4 space-y-3 text-zinc-400">
                <li>• Isolated content without relationships</li>
                <li>• Keyword search that misses context</li>
                <li>• Information overload</li>
                <li>• Weak links between experts, sectors, and assets</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-amber-500/90">
                Within Market
              </p>
              <ul className="mt-4 space-y-3 text-zinc-300">
                <li>• Intelligence organized around decisions</li>
                <li>• Trends and relationships surfaced clearly</li>
                <li>• Personalization through expert follows</li>
                <li>• Faster discovery of what matters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800/80">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Who it is for
          </h2>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {audiences.map((a) => (
              <li
                key={a.title}
                className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6"
              >
                <h3 className="font-medium text-white">{a.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{a.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center">
            <Link href="/use-cases" className="text-sm text-amber-400 hover:text-amber-300">
              View use cases →
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-linear-to-b from-zinc-950 to-zinc-900">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            See how modern market research should feel
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Move from fragmented information to connected insight—faster, clearer, and more
            actionable.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/contact">Book a Demo</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Talk to Us
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
