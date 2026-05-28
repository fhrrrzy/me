import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'

export function ProjectEntry({ title, context, description, role, tech, to }: {
  title: string
  context: string
  description: string
  role: string
  tech: string
  to: '/work/cmms' | '/work/dendrogram' | '/work/palmira' | '/work/oas' | '/work/cradle-space'
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8">
      <div className="font-mono text-xs text-neutral pt-1">
        {context}
      </div>
      <div>
        <h3 className="text-base font-medium mb-1">
          <Link
            to={to}
            className="inline-flex items-center gap-1.5 transition-colors duration-100 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          >
            {title}
            <ArrowUpRight size={12} className="text-neutral" />
          </Link>
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
