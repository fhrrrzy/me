export function References() {
  return (
    <section className="reveal py-20 border-b border-rule" style={{ '--i': 4 } as React.CSSProperties}>
      <p className="font-mono text-xs uppercase tracking-widest text-muted mb-12">
        References
      </p>

      <div className="space-y-12">
        <blockquote>
          <p className="text-lg leading-relaxed max-w-[50ch]">
            "We used to validate 6,000 equipment rows per factory in Google Sheets — across 71 factories that's over 200,000 rows by hand. Now the system catches mismatches automatically. Months of work collapsed into hours."
          </p>
          <cite className="block mt-3 font-mono text-xs text-muted not-italic uppercase tracking-wider">
            Internal user — PTPN IV, on Dendrogram Master
          </cite>
        </blockquote>

        <blockquote>
          <p className="text-lg leading-relaxed max-w-[50ch]">
            "OAS cut our event processing time by 12 hours. Registration to final scores used to take until dawn — now it's done before dinner."
          </p>
          <cite className="block mt-3 font-mono text-xs text-muted not-italic uppercase tracking-wider">
            Kak Ibas — Event Organizer, KOPIONEPAS
          </cite>
        </blockquote>
      </div>
    </section>
  )
}
