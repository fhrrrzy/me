import { createFileRoute } from '@tanstack/react-router'
import { CaseStudyLayout } from '#/components/case-study-layout'

export const Route = createFileRoute('/work/palmira')({ component: PalmiraPage })

function PalmiraPage() {
  return (
    <CaseStudyLayout
      title="Palmira"
      context="PTPN IV · Started Apr 2026"
      role="Frontend developer"
      tech="Next.js 16, React 19, TypeScript, Prisma, PostgreSQL, Docker"
      description="Multi-provider AI chat workspace for internal teams. Switch between GPT, Claude, and custom endpoints without losing context. Project-scoped instructions, streaming responses, full-text search across months of conversations."
      problem={[
        'Existing AI chat tools locked to one provider. when one has downtime, work stops.',
        'No project-based organization. conversations pile up with no context separation.',
        'No custom instructions per project. every chat starts from zero context.',
        'Sensitive company data cannot go through third-party consumer tools.',
        'No way to search across months of AI conversations to find past solutions.',
      ]}
      solution={[
        'Multi-provider adapter. OpenAI, Anthropic, and any OpenAI-compatible endpoint. Switch mid-conversation.',
        'Project-scoped instructions. each project carries its own system prompt so the AI knows the domain.',
        'Streaming responses via SSE. real-time token delivery, no waiting for full completion.',
        'AI-generated conversation titles for automatic, contextual naming.',
        'Full-text search across all conversations with archive/star organization.',
        'Self-hosted on Docker. sensitive operational data stays on company infrastructure.',
      ]}
      result="A production-ready AI workspace deployed internally at PTPN IV. Teams use it for development assistance, report generation, and operational documentation. The multi-provider architecture means no single point of failure. when one API has downtime, users switch to another without losing their workflow."
    />
  )
}
