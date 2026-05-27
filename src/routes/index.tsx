import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '#/components/nav'
import { Hero } from '#/components/hero'
import { Capabilities } from '#/components/capabilities'
import { SelectedWork } from '#/components/selected-work'
import { Career } from '#/components/career'
import { References } from '#/components/references'
import { Contact } from '#/components/contact'
import { Footer } from '#/components/footer'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />

      <main className="px-[clamp(1.5rem,5vw,3rem)] pb-32">
        <div className="max-w-[960px] mx-auto">
          <Hero />
          <Capabilities />
          <SelectedWork />
          <Career />
          <References />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  )
}
