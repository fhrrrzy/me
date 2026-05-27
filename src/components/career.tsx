export function Career() {
  return (
    <section className="reveal py-20 border-b border-rule" style={{ '--i': 3 } as React.CSSProperties}>
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
        <p className="font-mono text-xs uppercase tracking-widest text-muted pt-1">
          Career
        </p>
        <div className="space-y-4">
          <TimelineEntry year="2025" role="Software Developer" org="PTPN IV — enterprise tools, 71 factories" />
          <TimelineEntry year="2024" role="Software Engineer" org="Diskominfo — government digital services" />
          <TimelineEntry year="2024" role="B.S. Computer Science" org="UNIMED — graduated" />
          <TimelineEntry year="2022" role="Frontend Developer" org="Cowalaid — startup, design systems" />
          <TimelineEntry year="2019" role="Freelance" org="Websites, bots, game mods — started at 18" />
        </div>
      </div>
    </section>
  )
}

function TimelineEntry({ year, role, org }: {
  year: string
  role: string
  org: string
}) {
  return (
    <div className="grid grid-cols-[4ch_1fr] gap-6 items-baseline">
      <span className="font-mono text-xs text-neutral tabular-nums">
        {year}
      </span>
      <p className="text-sm">
        <span className="font-medium">{role}</span>
        <span className="text-muted"> — {org}</span>
      </p>
    </div>
  )
}
