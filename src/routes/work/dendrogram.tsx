import { createFileRoute } from '@tanstack/react-router'
import { CaseStudyLayout } from '#/components/case-study-layout'

export const Route = createFileRoute('/work/dendrogram')({ component: DendrogramPage })

function DendrogramPage() {
  return (
    <CaseStudyLayout
      title="Dendrogram Master"
      context="PTPN IV · Started Jan 2026"
      role="Solo engineer"
      tech="TypeScript, PLpgSQL, Docker, Shell scripts"
      description="Data unification tool that reconciles equipment naming across 71 factories using dendrogram-based clustering. Turned months of manual Google Sheets validation into hours of automated processing."
      problem={[
        '71 factories each named the same equipment differently. no standard nomenclature.',
        'Validating 6,000+ equipment rows per factory (200,000+ total) was done manually in Google Sheets.',
        'The manual process took months and was error-prone. mismatches slipped through constantly.',
        'No way to detect which names referred to the same physical equipment across factories.',
      ]}
      solution={[
        'Built a TypeScript web application for uploading and validating Excel files against a master schema.',
        'Implemented dendrogram-based clustering to group similar equipment names across factories.',
        'PLpgSQL functions handle the heavy data processing directly in PostgreSQL. no round-trips.',
        'Automated mismatch detection flags errors instantly on upload instead of manual row-by-row checking.',
        'Shell scripts and Docker for consistent deployment and batch processing.',
      ]}
      result="200,000+ rows of equipment data unified across 71 factories. What took months of manual validation now completes in hours. The system catches naming mismatches automatically, eliminating human error from the unification process."
    />
  )
}
