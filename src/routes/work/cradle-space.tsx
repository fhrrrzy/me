import { createFileRoute } from '@tanstack/react-router'
import { CaseStudyLayout } from '#/components/case-study-layout'

export const Route = createFileRoute('/work/cradle-space')({ component: CradleSpacePage })

function CradleSpacePage() {
  return (
    <CaseStudyLayout
      title="Cradle Space"
      context="Freelance · Started Nov 2025"
      role="Solo (design → delivery)"
      tech="Next.js, TypeScript, GSAP, Tailwind CSS, Filament CMS, Docker"
      description="Landing page for a premium coworking space in Medan. Solo from design through deployment. modern, clean, with intentional motion. The owner loved it."
      screenshot="/screenshots/cradle-space.png"
      url="https://cradlespace.co.id"
      problem={[
        'The previous web presence did not communicate the brand\'s premium positioning.',
        'Potential clients could not quickly understand what made Cradle Space different.',
        'No storytelling. the site listed features instead of selling the experience.',
        'Mobile experience was an afterthought.',
      ]}
      solution={[
        'Video-based intro animation setting the premium tone immediately.',
        'Advanced dual navigation. desktop floating card + mobile hamburger with GSAP transitions.',
        'Infinite scroll carousel with touch/drag support and snap-to-card behavior.',
        '"Why Cradle?" section with compelling value propositions (credibility, network, retention).',
        'Service showcase with multi-image carousels per offering.',
        'Client logo wall (39+ companies).',
        'Multi-language support (EN/ID).',
        'Filament CMS backend so the owner can update content without a developer.',
      ]}
      result="The owner loved it. 'modern, clean, with good animation' was the feedback. Clients tell them the site made them want to visit. The motion design and storytelling approach landed exactly as intended."
    />
  )
}
