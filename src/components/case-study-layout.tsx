import { Link } from '@tanstack/react-router'

export function CaseStudyLayout({ title, context, role, tech, description, problem, solution, result, screenshots, url }: {
  title: string
  context: string
  role: string
  tech: string
  description: string
  problem: string[]
  solution: string[]
  result: string
  screenshots?: { src: string; label: string }[]
  url?: string
}) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <nav className="flex items-center justify-between px-[clamp(1.5rem,5vw,3rem)] py-6">
        <Link to="/" className="font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-100 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus">
          ← Back
        </Link>
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-100 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus">
            Visit site →
          </a>
        )}
      </nav>

      <main className="px-[clamp(1.5rem,5vw,3rem)] pb-32">
        <article className="max-w-[720px] mx-auto pt-12">
          <header className="mb-16">
            <p className="font-mono text-xs uppercase tracking-widest text-neutral mb-4">{context}</p>
            <h1 className="font-display text-3xl font-medium tracking-tight mb-4">{title}</h1>
            <p className="text-base text-muted leading-relaxed max-w-[55ch]">{description}</p>
            <p className="mt-4 font-mono text-[11px] text-neutral">{role} · {tech}</p>
          </header>

          {screenshots && screenshots.length > 0 && (
            <div className="mb-16 -mx-[clamp(1.5rem,5vw,3rem)] px-[clamp(1.5rem,5vw,3rem)] relative">
              <div className="overflow-x-auto scrollbar-none">
                <div className="flex gap-3 pb-4" style={{ minWidth: 'min-content' }}>
                  {screenshots.map((s, i) => (
                    <figure key={i} className="relative shrink-0 h-[300px] rounded-lg overflow-hidden border border-rule bg-paper-2">
                      <img src={s.src} alt={`${title} - ${s.label}`} className="h-full w-auto" loading={i === 0 ? 'eager' : 'lazy'} />
                      <figcaption className="absolute bottom-0 left-0 right-0 px-3 py-2 font-mono text-[10px] text-neutral uppercase tracking-wider bg-paper/90 backdrop-blur-sm">
                        {s.label}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
              {screenshots.length > 1 && (
                <div className="absolute right-0 top-0 bottom-4 w-12 pointer-events-none bg-gradient-to-l from-paper to-transparent" />
              )}
            </div>
          )}

          <section className="mb-12">
            <h2 className="font-mono text-xs uppercase tracking-widest text-neutral mb-4">Problem</h2>
            <ul className="space-y-2">
              {problem.map((p, i) => (
                <li key={i} className="text-sm text-muted leading-relaxed flex gap-2">
                  <span className="text-neutral shrink-0">·</span>
                  {p}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-mono text-xs uppercase tracking-widest text-neutral mb-4">Solution</h2>
            <ul className="space-y-2">
              {solution.map((s, i) => (
                <li key={i} className="text-sm text-muted leading-relaxed flex gap-2">
                  <span className="text-neutral shrink-0">·</span>
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-mono text-xs uppercase tracking-widest text-neutral mb-4">Result</h2>
            <p className="text-sm text-muted leading-relaxed">{result}</p>
          </section>
        </article>
      </main>

      <footer className="px-[clamp(1.5rem,5vw,3rem)] py-8 border-t border-rule">
        <div className="max-w-[720px] mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-widest text-neutral">
            Fahruraji · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}
