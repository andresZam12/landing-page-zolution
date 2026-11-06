import { ArrowUpRight } from 'lucide-react'

import { REGISTER_URL } from '@/lib/constants'
import { DashboardMockup } from './dashboard-mockup'
import { Reveal } from './reveal'

export function ShowcaseSection() {
  return (
    <section className="showcase section">
      <div className="container showcase-grid">
        <Reveal className="showcase-copy">
          <span className="section-kicker">/ 01 — ATENCIÓN</span>
          <h2>
            Una conversación<br /><span>que sí avanza.</span>
          </h2>
          <p>Tu agente entiende lo que tus clientes necesitan, responde con claridad y los lleva al siguiente paso: una cita en tu agenda.</p>
          <a className="text-link dark-link" href={REGISTER_URL}>
            Conoce el simulador <ArrowUpRight size={17} />
          </a>
        </Reveal>
        <Reveal delay={120}>
          <DashboardMockup type="conversation-dash" />
        </Reveal>
      </div>
    </section>
  )
}
