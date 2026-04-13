import { ButtonLink } from "@/components/button-link";
import { brandLogoSrc, siteName } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Structured Financial Intelligence",
};

const problems = [
  "Investors follow multiple experts across platforms",
  "Videos are long, often distracting, and not always accessible",
  "Research reports are dense and difficult for retail users",
  "Important insights are buried in noise",
];

const solutionFeatures = [
  "Short summaries for quick understanding",
  "Deeper breakdowns without unnecessary complexity",
  "Focused feeds based on user interests",
  "Ability to explore only relevant insights",
];

const capabilities = [
  {
    title: "OCR for financial documents",
    body: "Works on scanned and text PDFs, then extracts structured financial content for downstream analysis.",
  },
  {
    title: "Research report simplification",
    body: "Converts complex reports into concise summaries with clear language and direct takeaways.",
  },
  {
    title: "Chat with citations",
    body: "Ask questions and get responses linked to specific report sections with source context side-by-side.",
  },
  {
    title: "Graph-based insights",
    body: "Visualize relationships across assets, sentiment, and experts for a clearer view of market narratives.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-zinc-800/80">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">WithinMarket</p>
            <h1 className="font-display mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Turn financial noise into structured, actionable intelligence
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300">
              Follow what matters. Skip distractions. Summarized insights from financial experts,
              research reports, and market signals - all in one focused feed.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/trends">Explore Trends</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact for Insights
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
            <p className="font-mono text-xs text-zinc-500">Focused feed preview</p>
            <div className="mt-3 space-y-3">
              {[
                {
                  expert: "R. Shah",
                  asset: "HUL",
                  summary: "Margin recovery likely over the next two quarters as input inflation moderates.",
                },
                {
                  expert: "P. Nair",
                  asset: "TCS",
                  summary: "Management commentary points to slower near-term demand but resilient deal pipeline.",
                },
                {
                  expert: "A. Gupta",
                  asset: "NIFTY IT",
                  summary: "Sentiment shifts from cautious to neutral after revised guidance and valuation reset.",
                },
              ].map((item) => (
                <article key={item.expert + item.asset} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
                  <p className="font-mono text-xs text-zinc-500">
                    Expert: {item.expert} | Asset: {item.asset}
                  </p>
                  <p className="mt-2 text-sm text-zinc-200">{item.summary}</p>
                  <button
                    type="button"
                    className="mt-3 text-xs text-zinc-400 transition-colors hover:text-zinc-100"
                  >
                    View deeper →
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800/80 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Financial content is fragmented and time-consuming
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {problems.map((item) => (
              <li key={item} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 text-sm text-zinc-300">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-zinc-800/80">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            A structured layer on top of financial content
          </h2>
          <p className="mt-5 max-w-3xl text-zinc-300">
            WithinMarket converts unstructured financial content into structured, queryable
            intelligence.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {solutionFeatures.map((item) => (
              <li key={item} className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 text-sm text-zinc-300">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-zinc-800/80 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">Products</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Trends (B2C)</p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                A focused financial feed for everyday investors
              </h3>
              <p className="mt-4 text-sm text-zinc-300">
                Track insights from financial experts, YouTube content, and research reports -
                without distractions.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-zinc-300">
                <li>- AI summaries of YouTube videos</li>
                <li>- Simplified research report insights</li>
                <li>- Search across experts and assets</li>
                <li>- Feed personalized to user interests</li>
              </ul>
              <p className="mt-5 text-xs text-zinc-500">
                Unlike YouTube: no distractions. Unlike Twitter: structured, signal-focused insights.
              </p>
              <div className="mt-6">
                <ButtonLink href="/trends">Go to Trends App</ButtonLink>
              </div>
            </article>

            <article className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                Insights (B2B - Coming Soon)
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                Intelligence layer for financial professionals
              </h3>
              <p className="mt-4 text-sm text-zinc-300">
                Designed for wealth managers, advisors, and financial institutions to extract
                structured insights from large volumes of financial documents.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-zinc-300">
                <li>- Document ingestion (PDF, scanned reports)</li>
                <li>- OCR for financial documents</li>
                <li>- RAG-based querying</li>
                <li>- Chat with citations from research reports</li>
                <li>- Analytics dashboards on extracted data</li>
              </ul>
              <p className="mt-5 text-xs text-zinc-500">Deployment: SaaS and on-premise</p>
              <div className="mt-6">
                <ButtonLink href="/contact" variant="secondary">
                  Contact for Early Access
                </ButtonLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800/80">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Built on a financial knowledge graph
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>- 25,000+ research reports processed</li>
                <li>- Entities extracted: assets, sentiment, time horizon, macro indicators, source attribution</li>
                <li>- Relationships modeled: who said what, about which asset, with what sentiment, in which context</li>
                <li>- Stored in a graph database (Neo4j)</li>
              </ul>
              <p className="mt-5 text-sm text-zinc-400">
                This enables structured querying, better summarization, and explainable insights with citations.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 font-mono text-xs text-zinc-400">
              <p className="text-zinc-500">$ query insight_graph</p>
              <p className="mt-3">Asset: HUL | Sentiment: Positive | Source: XYZ Report</p>
              <p>Expert: P. Nair | Horizon: 2Q | Context: Margin expansion</p>
              <p className="mt-4 text-zinc-500">{"// citation backed node path"}</p>
              <p>(Expert)-[MENTIONED]-&gt;(Asset)-[IN_CONTEXT]-&gt;(MacroIndicator)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800/80 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            From documents to decisions
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => (
              <article key={item.title} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
                <h3 className="text-base font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800/80">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Powered by the same system behind Trends
          </h2>
          <p className="mt-5 max-w-3xl text-zinc-300">
            The same intelligence engine powers both investor-facing summaries in Trends and
            enterprise-grade Insights workflows.
          </p>
          <div className="mt-8 rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/30 p-8 text-sm text-zinc-500">
            Demo placeholder: workflow preview and live query console
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Start exploring structured financial insights
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/trends">Explore Trends</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact Sales
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
