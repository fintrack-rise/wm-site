"use client";

const integrations = [
  { name: "YouTube", category: "Expert channels" },
  { name: "Research PDFs", category: "Broker reports" },
  { name: "Earnings Calls", category: "Transcripts" },
  { name: "Expert Feeds", category: "Curated voices" },
  { name: "Macro Calendar", category: "Events" },
  { name: "Portfolio Watchlists", category: "User tracking" },
  { name: "Market News", category: "Sentiment layer" },
  { name: "Sector Heatmaps", category: "Trend view" },
  { name: "Screeners", category: "Idea discovery" },
  { name: "Company Filings", category: "Source documents" },
  { name: "Price Alerts", category: "Signal triggers" },
  { name: "Knowledge Graph", category: "Connected insights" },
];

export function IntegrationsSection() {
  return (
    <section id="integrations" className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Integrations
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            Works with everything
            <br />
            you already use.
          </h2>
          <p className="text-xl text-muted-foreground">
            Built for trends workflow across retail investing and financial research.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration) => (
            <div key={integration.name} className="rounded-xl border border-foreground/10 bg-background px-6 py-5 text-center">
              <div className="text-lg font-medium">{integration.name}</div>
              <div className="text-sm text-muted-foreground">{integration.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
