import { createFileRoute } from '@tanstack/react-router'
import { CaseStudyLayout } from '#/components/case-study-layout'

export const Route = createFileRoute('/work/cmms')({
  component: CmmsPage,
  head: () => ({ meta: [{ title: 'CMMS: Equipment Monitoring · Fahruraji' }] }),
})

function CmmsPage() {
  return (
    <CaseStudyLayout
      title="CMMS: Equipment Monitoring"
      context="PTPN IV · Started Sep 2025"
      role="Fullstack developer (team)"
      tech="Vue 3, Laravel, PostgreSQL, SAP RFC, Docker, Jupyter Notebook"
      screenshots={[
        { src: "/screenshots/cmms.webp", label: "Dashboard" },
        { src: "/screenshots/cmms-landing.webp", label: "Landing page" },
        { src: "/screenshots/cmms-login.webp", label: "Login" },
      ]}
      description="SAP PM-integrated system tracking equipment health across 71 palm oil factories. Real-time dashboards, maintenance scheduling, and failure prediction for plant managers."
      problem={[
        'Equipment data scattered across SAP PM and local spreadsheets. no unified view for plant managers.',
        'Maintenance scheduling was reactive, not predictive. failures happened before anyone noticed trends.',
        'No real-time visibility into equipment health across 71 geographically distributed factories.',
        'Manual reporting took days to compile and was outdated by the time it reached decision-makers.',
      ]}
      solution={[
        'Built a Vue 3 frontend with real-time dashboards showing equipment health across all factories.',
        'Integrated directly with SAP PM via RFC calls. no manual data entry, no sync lag.',
        'Implemented predictive maintenance indicators using historical failure data (Jupyter Notebook analysis).',
        'Dockerized deployment for consistent environments across development and production.',
        'Role-based access so factory managers see their plant, regional managers see the aggregate.',
      ]}
      result="Plant managers now have real-time visibility into equipment health without opening SAP. Maintenance scheduling shifted from reactive to predictive. The system serves as the single source of truth for equipment status across all 71 factories."
    />
  )
}
