import { createFileRoute } from '@tanstack/react-router'
import { CaseStudyLayout } from '#/components/case-study-layout'

export const Route = createFileRoute('/work/oas')({
  component: OasPage,
  head: () => ({ meta: [{ title: 'OAS · Fahruraji' }] }),
})

function OasPage() {
  return (
    <CaseStudyLayout
      title="OAS"
      context="Co-founded · Started Feb 2025"
      role="Co-founder & developer"
      tech="Laravel, Inertia.js, Vue, Tailwind CSS, Filament, PostgreSQL, Docker"
      description="Paperless competition judging platform for Paskibra events. Real-time scoring, instant results, eliminated 12+ hours of manual tabulation per event. Used by hundreds of schools across Indonesia."
      screenshots={[
        { src: "/screenshots/oas.webp", label: "Desktop" },
        { src: "/screenshots/oas-mobile.webp", label: "Mobile" },
      ]}
      url="https://oassyst.com"
      problem={[
        'Competition scoring done entirely on paper. score sheets got lost, calculations had errors.',
        'Manual tabulation took until dawn (12+ hours per event) with organizers working through the night.',
        'Parents and teams had zero visibility into scores until the final announcement.',
        'No transparency. scoring disputes were common with no audit trail.',
        'Each event required custom paper forms, manual NPP assignment, and hand-calculated rankings.',
      ]}
      solution={[
        'Digital registration replacing paper forms entirely.',
        'Live scoring by judges via mobile. tap to score, no paper handling.',
        'Automatic score calculation and ranking in real-time.',
        'Real-time score visibility for parents and teams on their phones.',
        'Flexible event configuration for various competition types.',
        'Filament admin panel for organizers to manage events without technical knowledge.',
        'Complete audit trail. every score timestamped and attributable.',
      ]}
      result="Time savings of 12+ hours per event. Used by hundreds of schools across Indonesia. Judges focus on judging instead of paperwork. Parents watch scores in real-time. Complete transparency eliminates scoring disputes."
    />
  )
}
