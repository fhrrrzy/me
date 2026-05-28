import { ArrowUpRight } from 'lucide-react'

export function BentoGrid() {
  return (
    <section className="reveal px-[clamp(1.5rem,5vw,3rem)] pb-20" style={{ '--i': 1 } as React.CSSProperties}>
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* Large tile. CMMS */}
        <div className="sm:col-span-2 p-6 rounded-lg border border-rule bg-paper-2">
          <p className="font-mono text-[10px] uppercase tracking-widest text-neutral mb-3">PTPN IV · 2026</p>
          <h3 className="text-lg font-medium mb-2">CMMS: Equipment Monitoring</h3>
          <p className="text-sm text-muted leading-relaxed max-w-[50ch]">
            SAP PM-integrated system tracking equipment health across 71 palm oil factories. Real-time dashboards, maintenance scheduling, failure prediction.
          </p>
          <p className="mt-4 font-mono text-[10px] text-neutral">Vue 3 · Laravel · PostgreSQL · SAP RFC</p>
        </div>

        {/* Stat tile */}
        <div className="p-6 rounded-lg border border-rule bg-paper-2 flex flex-col justify-between">
          <p className="font-mono text-[10px] uppercase tracking-widest text-neutral">Data unified</p>
          <p className="font-display text-4xl font-light tracking-tighter mt-4">200k+</p>
          <p className="text-xs text-muted mt-2">rows across 71 factories</p>
        </div>

        {/* Dendrogram */}
        <div className="p-6 rounded-lg border border-rule bg-paper-2">
          <p className="font-mono text-[10px] uppercase tracking-widest text-neutral mb-3">PTPN IV · 2026</p>
          <h3 className="text-base font-medium mb-2">Dendrogram Master</h3>
          <p className="text-sm text-muted leading-relaxed">
            Data unification via dendrogram clustering. Months of manual validation → hours.
          </p>
          <p className="mt-3 font-mono text-[10px] text-neutral">Vue 3 · Laravel · Python</p>
        </div>

        {/* Palmira */}
        <div className="p-6 rounded-lg border border-rule bg-paper-2">
          <p className="font-mono text-[10px] uppercase tracking-widest text-neutral mb-3">PTPN IV · 2026</p>
          <h3 className="text-base font-medium mb-2">Palmira</h3>
          <p className="text-sm text-muted leading-relaxed">
            Multi-provider AI chat workspace. Switch GPT/Claude mid-conversation. Project-scoped instructions.
          </p>
          <p className="mt-3 font-mono text-[10px] text-neutral">Next.js 16 · React 19 · Prisma</p>
        </div>

        {/* OAS. linked */}
        <div className="p-6 rounded-lg border border-rule bg-paper-2">
          <p className="font-mono text-[10px] uppercase tracking-widest text-neutral mb-3">Co-founded · 2026</p>
          <h3 className="text-base font-medium mb-2">
            <a href="https://oassyst.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition-colors duration-100 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus">
              OAS
              <ArrowUpRight size={12} className="text-neutral" />
            </a>
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            Paperless competition judging. Hundreds of schools across Indonesia. 12h saved per event.
          </p>
          <p className="mt-3 font-mono text-[10px] text-neutral">Laravel · Inertia · Vue</p>
        </div>

        {/* Cradle Space. linked */}
        <div className="sm:col-span-2 p-6 rounded-lg border border-rule bg-paper-2">
          <p className="font-mono text-[10px] uppercase tracking-widest text-neutral mb-3">Freelance · 2026</p>
          <h3 className="text-base font-medium mb-2">
            <a href="https://cradlespace.co.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition-colors duration-100 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus">
              Cradle Space
              <ArrowUpRight size={12} className="text-neutral" />
            </a>
          </h3>
          <p className="text-sm text-muted leading-relaxed max-w-[50ch]">
            Landing page for a premium coworking space in Medan. Solo from design through deployment. modern, clean, intentional motion. The owner loved it.
          </p>
          <p className="mt-3 font-mono text-[10px] text-neutral">Next.js · GSAP · Tailwind</p>
        </div>

        {/* Skills tile */}
        <div className="p-6 rounded-lg border border-rule bg-paper-2">
          <p className="font-mono text-[10px] uppercase tracking-widest text-neutral mb-3">Stack</p>
          <div className="space-y-1 text-sm text-muted">
            <p>Vue, React, Next.js, TS</p>
            <p>Laravel, PostgreSQL, Redis</p>
            <p>Docker, Linux, Cloudflare</p>
            <p>Python, Telegram bots</p>
          </div>
        </div>

        {/* Quote tile */}
        <div className="sm:col-span-2 p-6 rounded-lg border border-rule bg-paper-2">
          <blockquote>
            <p className="text-base leading-relaxed max-w-[50ch]">
              "We used to validate 6,000 rows per factory in Google Sheets. across 71 factories that's 200,000+ rows by hand. Now the system catches mismatches automatically."
            </p>
            <cite className="block mt-3 font-mono text-[10px] text-neutral not-italic uppercase tracking-wider">
              Internal user. PTPN IV
            </cite>
          </blockquote>
        </div>

        {/* Also built */}
        <div className="p-6 rounded-lg border border-rule bg-paper-2">
          <p className="font-mono text-[10px] uppercase tracking-widest text-neutral mb-3">Also built</p>
          <p className="text-sm text-muted">PicaRet · Drakos bot · Fintr · Sergai FM</p>
        </div>

        {/* Career tile */}
        <div className="sm:col-span-2 p-6 rounded-lg border border-rule bg-paper-2">
          <p className="font-mono text-[10px] uppercase tracking-widest text-neutral mb-3">Career</p>
          <div className="space-y-2 text-sm">
            <p><span className="font-mono text-xs text-neutral">2025</span> <span className="ml-3 font-medium">Software Developer</span> <span className="text-muted">. PTPN IV</span></p>
            <p><span className="font-mono text-xs text-neutral">2024</span> <span className="ml-3 font-medium">Software Engineer</span> <span className="text-muted">. Diskominfo</span></p>
            <p><span className="font-mono text-xs text-neutral">2024</span> <span className="ml-3 font-medium">B.S. Computer Science</span> <span className="text-muted">. UNIMED</span></p>
            <p><span className="font-mono text-xs text-neutral">2022</span> <span className="ml-3 font-medium">Frontend Developer</span> <span className="text-muted">. Cowalaid</span></p>
            <p><span className="font-mono text-xs text-neutral">2019</span> <span className="ml-3 font-medium">Freelance</span> <span className="text-muted">. started at 18</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}
