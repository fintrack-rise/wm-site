"use client";

const sources = [
  { name: "Company filings", category: "Source documents" },
  { name: "Financial statements", category: "Fundamentals" },
  { name: "Earnings calls", category: "Management commentary" },
  { name: "Research", category: "Evidence for the agent" },
  { name: "Market news", category: "Developments" },
  { name: "Macro events", category: "Context" },
  { name: "Price & volume", category: "Market data" },
  { name: "Sector data", category: "Industry structure" },
  { name: "Your portfolio", category: "Holdings and thesis" },
  { name: "Watchlists", category: "Names you follow" },
];

export function IntegrationsSection() {
  return (
    <section id="integrations" className="relative scroll-mt-28 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-24">
          <span className="mb-6 inline-flex items-center gap-3 font-mono text-sm text-muted-foreground">
            <span className="h-px w-8 bg-foreground/30" />
            What powers it
            <span className="h-px w-8 bg-foreground/30" />
          </span>
          <h2 className="mb-6 font-display text-4xl tracking-tight lg:text-6xl">
            An AI that does the research across the market.
          </h2>
          <p className="text-xl text-muted-foreground">
            Within Market brings these sources together so you don&apos;t have to. The data, filings, expert research and market feeds are the machinery underneath the agent — not the product itself.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sources.map((source) => (
            <div key={source.name} className="rounded-xl border border-foreground/10 bg-background px-6 py-5 text-center">
              <div className="text-lg font-medium">{source.name}</div>
              <div className="text-sm text-muted-foreground">{source.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
