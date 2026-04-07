export function ProductPreviewMock() {
  const labels = [
    { text: "Asset analysis", className: "top-[12%] left-[4%]" },
    { text: "Sector analysis", className: "top-[8%] right-[8%]" },
    { text: "Expert analysis", className: "bottom-[38%] left-[2%]" },
    { text: "Semantic search", className: "top-[42%] right-[4%]" },
    { text: "Saved insights", className: "bottom-[12%] right-[10%]" },
  ];

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute inset-0 -z-10 rounded-2xl bg-amber-500/5 blur-3xl" aria-hidden />
      <div className="relative overflow-hidden rounded-2xl border border-zinc-700/80 bg-zinc-900/80 shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          <span className="ml-3 text-xs text-zinc-500">Workspace</span>
        </div>
        <div className="grid gap-0 md:grid-cols-[1fr_1.2fr]">
          <div className="border-b border-zinc-800 p-4 md:border-b-0 md:border-r">
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Navigation</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li className="rounded-md bg-zinc-800/60 px-2 py-1.5 text-zinc-200">Home</li>
              <li className="px-2 py-1.5">Asset analysis</li>
              <li className="px-2 py-1.5">Sector analysis</li>
              <li className="px-2 py-1.5">Expert analysis</li>
            </ul>
          </div>
          <div className="p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs text-zinc-500">Sentiment · Recommendation</p>
              <span className="rounded bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400">Monthly</span>
            </div>
            <div className="flex h-28 items-end justify-between gap-1 rounded-lg border border-zinc-800 bg-zinc-950/50 px-2 pb-2 pt-4">
              {[40, 65, 45, 80, 55, 70, 50].map((h, i) => (
                <div
                  key={i}
                  className="w-full rounded-t bg-gradient-to-t from-amber-900/40 to-amber-500/50"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-zinc-800 bg-zinc-950/30 p-2">
                <p className="text-[10px] text-zinc-500">Search</p>
                <p className="mt-1 truncate text-xs text-zinc-400">Semantic query…</p>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-zinc-950/30 p-2">
                <p className="text-[10px] text-zinc-500">Following</p>
                <p className="mt-1 text-xs text-zinc-400">Experts you track</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {labels.map((l) => (
        <span
          key={l.text}
          className={`pointer-events-none absolute hidden rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] text-amber-200/90 sm:block ${l.className}`}
        >
          {l.text}
        </span>
      ))}
    </div>
  );
}
