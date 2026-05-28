import { createFileRoute, Link } from '@tanstack/react-router'
import { Mail, GithubIcon, LinkedinIcon } from 'lucide-react'

export const Route = createFileRoute('/resume')({ component: ResumePage })

function ResumePage() {
  return (
    <div className="min-h-screen bg-paper text-ink print:bg-white">
      <nav className="flex items-center justify-between px-[clamp(1.5rem,5vw,3rem)] py-6 print:hidden">
        <Link to="/" className="font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-100 hover:text-ink">
          ← Back
        </Link>
        <button
          onClick={() => window.print()}
          className="font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-100 hover:text-ink"
        >
          Save as PDF →
        </button>
      </nav>

      <main className="px-[clamp(1.5rem,5vw,3rem)] pb-32 print:px-0 print:pb-0">
        <article className="max-w-[720px] mx-auto pt-8">
          {/* Header */}
          <header className="mb-10 pb-6 border-b border-rule">
            <h1 className="font-display text-2xl font-medium tracking-tight">Fahruraji</h1>
            <p className="text-sm text-muted mt-1">Software Developer · South Jakarta, Indonesia</p>
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-neutral">
              <span className="inline-flex items-center gap-1"><Mail size={12} className="print:hidden" /> fahrurrozy4214@gmail.com</span>
              <span className="inline-flex items-center gap-1"><GithubIcon size={12} className="print:hidden" /> github.com/fhrrrzy</span>
              <span className="inline-flex items-center gap-1"><LinkedinIcon size={12} className="print:hidden" /> linkedin.com/in/fhrrrzy</span>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-8">
            <p className="text-sm leading-relaxed max-w-[60ch]">
              Frontend-focused developer with fullstack depth. 6+ years building web applications. from enterprise tools serving 71 factories to paperless platforms used by hundreds of schools. Vue.js, React, TypeScript, Laravel, PostgreSQL, Docker.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="font-mono text-xs uppercase tracking-widest text-neutral mb-4">Experience</h2>
            <div className="space-y-6">
              <ResumeEntry
                period="2025 – present"
                title="Software Developer"
                org="PT Perkebunan Nusantara IV"
                bullets={[
                  'Built CMMS, SAP PM-integrated equipment monitoring for 71 palm oil factories (Vue 3, Laravel, PostgreSQL).',
                  'Built Dendrogram Master: unified 200,000+ equipment rows across 71 factories using clustering algorithms.',
                  'Built Palmira, multi-provider AI chat workspace (Next.js 16, React 19, Prisma).',
                ]}
              />
              <ResumeEntry
                period="2024 – 2025"
                title="Software Engineer"
                org="Diskominfo Serdang Bedagai"
                bullets={[
                  'Developed government digital services. full lifecycle from requirements to deployment.',
                  'Built IT support ticketing system for internal operations.',
                ]}
              />
              <ResumeEntry
                period="2022 – 2024"
                title="Frontend Developer"
                org="Cowalaid"
                bullets={[
                  'Startup environment. Vue.js + Tailwind, component systems, API integration.',
                  'Collaborated on design systems and responsive UI patterns.',
                ]}
              />
              <ResumeEntry
                period="2019 – 2022"
                title="Freelance Developer"
                org="Independent"
                bullets={[
                  'Websites, Telegram bots, game modding. started at 18.',
                  'Client management, shipping fast, end-to-end delivery.',
                ]}
              />
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="font-mono text-xs uppercase tracking-widest text-neutral mb-4">Notable projects</h2>
            <div className="space-y-3 text-sm">
              <p><span className="font-medium">OAS (oassyst.com)</span> · Co-founded. Paperless competition judging. Hundreds of schools, 12h saved per event. Laravel, Vue.</p>
              <p><span className="font-medium">Cradle Space (cradlespace.co.id)</span> · Premium coworking landing page. Solo design → delivery. Next.js, GSAP.</p>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="font-mono text-xs uppercase tracking-widest text-neutral mb-4">Education</h2>
            <p className="text-sm"><span className="font-medium">B.S. Computer Science</span> · Universitas Negeri Medan (UNIMED), 2024</p>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="font-mono text-xs uppercase tracking-widest text-neutral mb-4">Skills</h2>
            <p className="text-sm text-muted">
              Vue.js · React · Next.js · TypeScript · Laravel · Inertia.js · PostgreSQL · MySQL · Redis · Docker · Linux · Cloudflare · Python · GSAP · Tailwind CSS · Prisma · SAP RFC
            </p>
          </section>

          {/* Languages */}
          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest text-neutral mb-4">Languages</h2>
            <p className="text-sm text-muted">
              Bahasa Indonesia (fluent) · English (intermediate) · Minang (fluent)
            </p>
          </section>
        </article>
      </main>
    </div>
  )
}

function ResumeEntry({ period, title, org, bullets }: {
  period: string
  title: string
  org: string
  bullets: string[]
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-sm">
          <span className="font-medium">{title}</span>
          <span className="text-muted">. {org}</span>
        </p>
        <span className="font-mono text-[11px] text-neutral shrink-0">{period}</span>
      </div>
      <ul className="mt-2 space-y-1">
        {bullets.map((b, i) => (
          <li key={i} className="text-xs text-muted leading-relaxed pl-3 relative before:content-['·'] before:absolute before:left-0 before:text-neutral">
            {b}
          </li>
        ))}
      </ul>
    </div>
  )
}
