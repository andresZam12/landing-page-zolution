import { CapabilitiesBar } from '@/components/capabilities-bar'
import { ConnectionSection } from '@/components/connection-section'
import { FaqSection } from '@/components/faq-section'
import { FeaturesSection } from '@/components/features-section'
import { FinalCta } from '@/components/final-cta'
import { FloatingWhatsapp } from '@/components/floating-whatsapp'
import { Hero } from '@/components/hero'
import { ShowcaseSection } from '@/components/showcase-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { StepsSection } from '@/components/steps-section'

export default function Page() {
  return (
    <main id="inicio">
      <SiteHeader />
      <Hero />
      <CapabilitiesBar />
      <FeaturesSection />
      <ShowcaseSection />
      <StepsSection />
      <ConnectionSection />
      <FaqSection />
      <FinalCta />
      <SiteFooter />
      <FloatingWhatsapp />
    </main>
  )
}
