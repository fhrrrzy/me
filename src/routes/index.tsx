import { createFileRoute } from '@tanstack/react-router'
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Nav — N9 Edge-aligned minimal */}
      <nav className="flex items-center justify-between px-[clamp(1.5rem,5vw,3rem)] py-6">
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          / fahrurrozy
        </span>
        <a
          href="mailto:fahrurrozy4214@gmail.com"
          className="font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-100 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
        >
          Say hello →
        </a>
      </nav>

      <main className="px-[clamp(1.5rem,5vw,3rem)] pb-32">
        <div className="max-w-[960px] mx-auto">

          {/* Hero — Stat-Led: large number + qualifier */}
          <header className="reveal pt-20 pb-24 border-b border-rule" style={{ '--i': 0 } as React.CSSProperties}>
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-8">
              <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 align-middle" />
              Portfolio · 2025 Edition
            </p>
            <h1 className="font-display text-[clamp(4rem,12vw,8rem)] font-light leading-none tracking-tighter text-ink">
              200k+
            </h1>
            <p className="text-lg font-normal mt-4 text-ink max-w-[45ch]">
              rows of equipment data unified across 71 factories. Months of manual work, collapsed into hours.
            </p>
            <p className="mt-6 text-sm text-muted max-w-[50ch]">
              Frontend specialist. Fullstack when needed. Also ships paperless platforms, AI workspaces, and the occasional Telegram bot.
            </p>
            <a
              href="#contact"
              className="inline-block mt-8 font-mono text-xs uppercase tracking-widest text-ink transition-colors duration-100 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              Get in touch →
            </a>
          </header>

          {/* Section: Capabilities */}
          <section className="reveal py-20 border-b border-rule" style={{ '--i': 1 } as React.CSSProperties}>
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
              <p className="font-mono text-xs uppercase tracking-widest text-muted pt-1">
                What I do
              </p>
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 text-sm text-muted">
                  <span>Vue.js, React, Next.js, TypeScript</span>
                  <span>Laravel, Inertia, REST APIs</span>
                  <span>PostgreSQL, MySQL, Redis</span>
                  <span>Docker, Linux, Cloudflare</span>
                  <span>Python automation, Telegram bots</span>
                  <span>Data pipelines, Excel validation</span>
                </div>
                <p className="mt-6 text-xs text-neutral max-w-[50ch]">
                  If it's repetitive, I build a tool for it. If two systems need to talk, I write the bridge.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Selected work */}
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

          {/* Section: Testimonials */}
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

          {/* Section: Contact */}
          <section id="contact" className="reveal py-20" style={{ '--i': 5 } as React.CSSProperties}>
            <p className="text-xs text-neutral mb-12 max-w-[45ch]">
              Also: milk enjoyer, former game modder, runs a Telegram bot 24/7 on a VPS.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
              <p className="font-mono text-xs uppercase tracking-widest text-muted pt-1">
                Get in touch
              </p>
              <div>
                <div className="flex flex-col sm:flex-row gap-6 mb-8">
                  <a
                    href="mailto:fahrurrozy4214@gmail.com"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink transition-colors duration-100 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                  >
                    <Mail size={14} />
                    Email
                  </a>
                  <a
                    href="https://github.com/fhrrrzy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-100 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                  >
                    <Github size={14} />
                    GitHub
                    <ArrowUpRight size={10} />
                  </a>
                  <a
                    href="https://linkedin.com/in/fhrrrzy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-100 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                  >
                    <Linkedin size={14} />
                    LinkedIn
                    <ArrowUpRight size={10} />
                  </a>
                </div>
                <p className="text-xs text-neutral max-w-[45ch]">
                  Open to freelance and collaborations. Async preferred, WIB timezone, evenings and weekends. I like owning a clear scope end-to-end.
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Footer — Ft4 Dense typographic */}
      <footer className="px-[clamp(1.5rem,5vw,3rem)] py-8 border-t border-rule">
        <div className="max-w-[960px] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-neutral">
            Fahrurrozy · South Jakarta · 2025
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-neutral">
            Currently building something, probably.
          </p>
        </div>
      </footer>
    </div>
  )
}

function ProjectEntry({ title, context, description, role, tech, url }: {
  title: string
  context: string
  description: string
  role: string
  tech: string
  url?: string
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8">
      <div className="font-mono text-xs text-neutral pt-1">
        {context}
      </div>
      <div>
        <h3 className="text-base font-medium mb-1">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors duration-100 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              {title}
              <ArrowUpRight size={12} className="text-neutral" />
            </a>
          ) : (
            title
          )}
        </h3>
        <p className="text-sm text-muted leading-relaxed max-w-[50ch] mb-2">
          {description}
        </p>
        <p className="font-mono text-[11px] text-neutral">
          {role} · {tech}
        </p>
      </div>
    </div>
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
