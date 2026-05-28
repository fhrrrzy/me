import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="px-[clamp(1.5rem,5vw,3rem)] py-8 border-t border-rule">
      <div className="max-w-[960px] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-widest text-neutral">
          Fahruraji · South Jakarta · {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-4">
          <Link to="/resume" className="font-mono text-[10px] uppercase tracking-widest text-neutral transition-colors duration-100 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus">
            Resume
          </Link>
          <span className="text-neutral text-[10px]">·</span>
          <p className="font-mono text-[10px] uppercase tracking-widest text-neutral">
            Currently building something, probably.
          </p>
        </div>
      </div>
    </footer>
  )
}
