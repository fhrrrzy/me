import { ProjectEntry } from './project-entry'

export function SelectedWork() {
  return (
    <section className="reveal py-20 border-b border-rule" style={{ '--i': 2 } as React.CSSProperties}>
      <p className="font-mono text-xs uppercase tracking-widest text-muted mb-12">
        Selected work
      </p>

      <div className="space-y-12">
        <ProjectEntry
          title="CMMS — Equipment Monitoring"
          context="PTPN IV · 2025"
          description="SAP PM-integrated system tracking equipment health across 71 palm oil factories. Real-time dashboards, maintenance scheduling, failure prediction."
          role="Fullstack developer (team)"
          tech="Vue 3, Laravel, PostgreSQL, SAP RFC"
        />
        <ProjectEntry
          title="Dendrogram Master"
          context="PTPN IV · 2025"
          description="Data unification tool reconciling equipment naming across 71 factories using dendrogram-based clustering. Reduced manual validation from months to hours."
          role="Solo engineer"
          tech="Vue 3, Laravel, Python, PostgreSQL"
        />
        <ProjectEntry
          title="OAS — Oassyst.com"
          context="Co-founded · 2024"
          description="Paperless competition judging platform for Paskibra events. Real-time scoring, instant results, eliminated 12+ hours of manual tabulation. Used by hundreds of schools across Indonesia."
          role="Co-founder & developer"
          tech="Laravel, Inertia, Vue, PostgreSQL"
          url="https://oassyst.com"
        />
        <ProjectEntry
          title="Cradle Space"
          context="Freelance · 2024"
          description="Landing page for a premium coworking space in Medan. Solo from design through deployment — modern, clean, with intentional motion. The owner loved it."
          role="Solo (design → delivery)"
          tech="Next.js, GSAP, Tailwind"
          url="https://cradlespace.co.id"
        />
        <ProjectEntry
          title="Palmira"
          context="PTPN IV · 2026"
          description="Multi-provider AI chat workspace for internal teams. Switch between GPT, Claude, and custom endpoints without losing context. Project-scoped instructions, streaming responses, full-text search across months of conversations."
          role="Frontend developer"
          tech="Next.js 16, React 19, TypeScript, Prisma, PostgreSQL"
        />
      </div>

      <div className="mt-12 pt-8 border-t border-rule">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral mb-4">Also built</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-1 text-sm text-muted">
          <span>PicaRet — rubber plantation management</span>
          <span>Drakos — Telegram bot for game servers</span>
          <span>Fintr — personal finance tracker</span>
          <span>Sergai FM — radio streaming UI</span>
        </div>
      </div>
    </section>
  )
}
