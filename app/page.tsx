import { ButtonLink } from "@/components/button-link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Structured Financial Intelligence",
};

const marqueeStats = [
  { value: "25,000+", label: "Research reports processed" },
  { value: "Graph-native", label: "Neo4j knowledge layer" },
  { value: "Citation-first", label: "Answers with sources" },
  { value: "OCR + RAG", label: "Scanned PDFs to queries" },
  { value: "Focused feeds", label: "Less noise, more signal" },
  { value: "Expert-aware", label: "Who said what, and when" },
];

const capabilityBlocks = [
  {
    n: "01",
    title: "OCR for financial documents",
    body: "Works on scanned and text PDFs, then extracts structured financial content for downstream analysis.",
  },
  {
    n: "02",
    title: "Research report simplification",
    body: "Converts complex reports into concise summaries with clear language and direct takeaways.",
  },
  {
    n: "03",
    title: "Chat with citations",
    body: "Ask questions and get responses linked to specific report sections with source context side-by-side.",
  },
  {
    n: "04",
    title: "Graph-based insights",
    body: "Visualize relationships across assets, sentiment, and experts for a clearer view of market narratives.",
  },
];

const processSteps = [
  {
    title: "Connect your sources",
    body: "Bring together experts, long-form video, and dense research—without hopping between tabs.",
  },
  {
    title: "Structure the noise",
    body: "WithinMarket turns fragmented financial content into a queryable layer you can search and summarize.",
  },
  {
    title: "Act with context",
    body: "Explore a focused feed, drill into citations, and trace claims back to the original document or clip.",
  },
];

const problems = [
  "Investors follow multiple experts across platforms",
  "Videos are long, often distracting, and not always accessible",
  "Research reports are dense and difficult for retail users",
  "Important insights are buried in noise",
];

const integrations = [
  "YouTube",
  "Equity research PDFs",
  "Neo4j",
  "Semantic search",
  "Expert feeds",
  "Custom corpora",
];

const trustBadges = ["Encryption in transit", "Tenant-aware deployments", "Audit-friendly citations", "Data residency options"];

export default function HomePage() {
  return (
    <>
      <div className="relative overflow-hidden wm-mesh">
        <div className="pointer-events-none absolute inset-0 wm-grid-bg" aria-hidden />
        <section className="relative border-b border-zinc-200">
          <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
            <p className="wm-section-label text-center">Structured financial intelligence</p>
            <h1 className="font-display mx-auto mt-6 max-w-4xl text-center text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-900 sm:text-5xl sm:leading-[1.06] lg:text-6xl lg:leading-[1.05]">
              The platform
              <span className="block bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 bg-clip-text text-transparent">
                for clear market signal
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-zinc-600 sm:text-lg">
              Follow what matters. Skip distractions. Summarized insights from financial experts, research
              reports, and market signals—in one focused feed.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href="/trends">Explore Trends</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact for Insights
              </ButtonLink>
            </div>
          </div>
        </section>
      </div>

      <div className="border-b border-zinc-200 bg-zinc-100 py-6">
        <div className="relative overflow-hidden">
          <div className="flex w-max wm-marquee-track gap-16 px-4">
            {[...marqueeStats, ...marqueeStats].map((item, i) => (
              <div key={`${item.label}-${i}`} className="flex shrink-0 items-baseline gap-3">
                <span className="font-display text-xl font-semibold text-zinc-900 sm:text-2xl">{item.value}</span>
                <span className="text-sm text-zinc-600">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section id="capabilities" className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="wm-section-label">Capabilities</p>
          <h2 className="font-display mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Everything you need.
            <span className="text-zinc-500"> Nothing you don&apos;t.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-zinc-600">
            Financial content is fragmented and time-consuming. WithinMarket adds a structured layer so
            teams can move from documents to decisions.
          </p>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-6">
            {capabilityBlocks.map((item) => (
              <li
                key={item.n}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
              >
                <span className="font-display text-3xl font-semibold text-zinc-200 transition-colors group-hover:text-zinc-300">
                  {item.n}
                </span>
                <h3 className="mt-4 text-lg font-medium text-zinc-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.body}</p>
              </li>
            ))}
          </ul>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {problems.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="process" className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="wm-section-label">Process</p>
          <h2 className="font-display mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Three steps.
            <span className="text-zinc-500"> Infinite clarity.</span>
          </h2>
          <ol className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-8">
            {processSteps.map((step, idx) => (
              <li key={step.title} className="relative lg:pt-2">
                <span className="font-display text-5xl font-semibold text-zinc-200">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-medium text-zinc-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-16 overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-xl">
            <div className="flex items-center gap-2 border-b border-zinc-700 px-4 py-3">
              <span className="size-2.5 rounded-full bg-red-400/90" />
              <span className="size-2.5 rounded-full bg-amber-400/90" />
              <span className="size-2.5 rounded-full bg-emerald-400/90" />
              <span className="ml-2 font-mono text-xs text-zinc-500">insight_graph.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-zinc-400 sm:text-sm">
              <code>
                <span className="text-purple-400">import</span> {"{ connect } "}
                <span className="text-purple-400">from</span> <span className="text-emerald-400">&apos;@withinmarket/core&apos;</span>
                {"\n\n"}
                <span className="text-purple-400">await</span> connect({"{"}
                {"\n"}
                {"  "}source: <span className="text-emerald-400">&apos;research-corpus&apos;</span>,{"\n"}
                {"  "}graph: <span className="text-amber-300">true</span>,{"\n"}
                {"  "}citations: <span className="text-amber-300">true</span>,{"\n"}
                {"}"})
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="wm-section-label">Knowledge graph</p>
          <h2 className="font-display mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Built on a financial
            <span className="text-zinc-500"> knowledge graph</span>
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
              <ul className="space-y-3 text-sm text-zinc-600">
                <li>25,000+ research reports processed</li>
                <li>Entities: assets, sentiment, horizon, macro indicators, attribution</li>
                <li>Relationships: who said what, about which asset, in which context</li>
                <li>Stored in Neo4j for explainable, citation-backed answers</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-8 font-mono text-xs leading-relaxed text-zinc-500 shadow-lg">
              <p className="text-zinc-600">$ query insight_graph</p>
              <p className="mt-4 text-zinc-300">
                Asset: HUL | Sentiment: Positive | Source: XYZ Report
                <br />
                Expert: P. Nair | Horizon: 2Q | Context: Margin expansion
              </p>
              <p className="mt-6 text-zinc-600">{"// citation-backed node path"}</p>
              <p className="mt-2 text-zinc-400">(Expert)-[MENTIONED]-&gt;(Asset)-[IN_CONTEXT]-&gt;(MacroIndicator)</p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { k: "25k+", v: "Reports indexed" },
              { k: "Neo4j", v: "Graph store" },
              { k: "RAG", v: "Document Q&A" },
              { k: "<50ms*", v: "Target latency" },
            ].map((m) => (
              <div
                key={m.k}
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-5 text-center sm:px-5"
              >
                <p className="font-display text-2xl font-semibold text-zinc-900">{m.k}</p>
                <p className="mt-1 text-xs text-zinc-600">{m.v}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-zinc-500">* Illustrative; depends on deployment and corpus.</p>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="wm-section-label">Integrations</p>
          <h2 className="font-display mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Works with the stack
            <span className="text-zinc-500"> you already use</span>
          </h2>
          <div className="mt-10 flex flex-wrap gap-2">
            {integrations.map((name) => (
              <span
                key={name}
                className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="wm-section-label">Security</p>
          <h2 className="font-display mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Trust is non-negotiable
          </h2>
          <div className="mt-10 flex flex-wrap gap-2">
            {trustBadges.map((b) => (
              <span
                key={b}
                className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-medium uppercase tracking-wider text-zinc-600"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="wm-section-label">Products</p>
          <h2 className="font-display mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Simple, transparent
            <span className="text-zinc-500"> entry points</span>
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
              <p className="wm-section-label">Trends</p>
              <h3 className="font-display mt-4 text-xl font-semibold text-zinc-900">Focused investor feed</h3>
              <p className="mt-3 flex-1 text-sm text-zinc-600">
                AI summaries, expert signal, and search—without the noise of traditional feeds.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-600">
                <li>Personalized feed</li>
                <li>Video + report context</li>
                <li>Explore public trends</li>
              </ul>
              <div className="mt-8">
                <ButtonLink href="/trends" variant="secondary" className="w-full">
                  Open Trends
                </ButtonLink>
              </div>
            </article>

            <article className="relative flex flex-col rounded-2xl border border-violet-300/80 bg-gradient-to-b from-violet-50 to-white p-8 shadow-md ring-1 ring-violet-200/60">
              <span className="absolute right-6 top-6 rounded-full bg-violet-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-violet-800">
                Popular
              </span>
              <p className="wm-section-label">Insights</p>
              <h3 className="font-display mt-4 text-xl font-semibold text-zinc-900">Professional workspace</h3>
              <p className="mt-3 flex-1 text-sm text-zinc-600">
                Ingestion, OCR, RAG, and dashboards for teams that live in documents.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-600">
                <li>Private corpora</li>
                <li>Chat with citations</li>
                <li>SaaS or on-prem</li>
              </ul>
              <div className="mt-8">
                <ButtonLink href="/contact" className="w-full">
                  Request access
                </ButtonLink>
              </div>
            </article>

            <article className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
              <p className="wm-section-label">Enterprise</p>
              <h3 className="font-display mt-4 text-xl font-semibold text-zinc-900">Custom deployments</h3>
              <p className="mt-3 flex-1 text-sm text-zinc-600">
                Dedicated support, integrations, and SLAs for regulated environments.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-600">
                <li>Custom contracts</li>
                <li>Security review</li>
                <li>White-glove onboarding</li>
              </ul>
              <div className="mt-8">
                <ButtonLink href="/contact" variant="secondary" className="w-full">
                  Talk to sales
                </ButtonLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 sm:p-10 lg:p-12">
            <p className="wm-section-label">Platform</p>
            <h2 className="font-display mt-4 text-2xl font-semibold text-zinc-900 sm:text-3xl">
              Powered by the same system behind Trends
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-600">
              The same intelligence engine powers investor-facing summaries and enterprise-grade Insights
              workflows—so answers stay consistent from feed to boardroom.
            </p>
            <div className="mt-8 rounded-xl border border-dashed border-zinc-300 bg-white px-6 py-10 text-center text-sm text-zinc-500">
              Demo: workflow preview and live query console — contact us for a walkthrough.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            Ready to build clearer conviction?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-600">
            Start with Trends or talk to us about Insights and enterprise deployments.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/trends">Explore Trends</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact sales
            </ButtonLink>
          </div>
          <p className="mt-6 text-xs text-zinc-500">No credit card required for public Trends exploration.</p>
        </div>
      </section>
    </>
  );
}
