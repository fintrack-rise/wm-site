const philosophyFields = [
  ["Investment horizon", "Long term"],
  ["Style", "Quality + growth"],
  ["Key factors", "ROCE, reinvestment, moat"],
  ["Valuation sensitivity", "Moderate"],
  ["Turnover preference", "Low"],
];

export function PhilosophyMock({ compact = false }: { compact?: boolean }) {
  return (
    <div className="space-y-5">
      <div>
        <p className="mb-2 font-mono text-xs text-muted-foreground">You</p>
        <p className={`rounded-lg bg-muted/60 p-4 leading-relaxed text-foreground/90 ${compact ? "text-sm" : "text-sm sm:text-base"}`}>
          I look for businesses that can compound earnings for many years. I care about capital allocation, ROCE, competitive advantage and reasonable valuations. I don&apos;t want to trade frequently.
        </p>
      </div>

      <div className="flex justify-center">
        <span className="font-mono text-xs text-muted-foreground">↓</span>
      </div>

      <div>
        <p className="mb-2 font-mono text-xs text-muted-foreground">Within Market</p>
        <p className="mb-4 text-sm text-foreground/80">Here&apos;s what I understand about your philosophy.</p>
        <dl className="space-y-2">
          {philosophyFields.map(([label, value]) => (
            <div key={label} className="flex items-start justify-between gap-4 border-b border-foreground/5 py-2 last:border-0">
              <dt className="font-mono text-xs text-muted-foreground">{label}</dt>
              <dd className="text-right text-sm">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
