import { ArrowUpRight, MessageCircle } from 'lucide-react'

import { WHATSAPP_URL } from '@/lib/constants'
import { Reveal } from './reveal'

export function FinalCta() {
  return (
    <section className="final-cta" id="contacto">
      <div className="cta-orb orb-one" />
      <div className="cta-orb orb-two" />
      <Reveal className="container cta-content">
        <span className="section-kicker light-kicker">/ EMPIEZA HOY</span>
        <h2>
          Tu próximo cliente<br />puede <em>escribirte</em> hoy.
        </h2>
        <p>Haz que cada conversación cuente.</p>
        <div className="hero-actions">
          <a className="btn btn-light" href="/login">
            Crear mi agente <ArrowUpRight size={17} />
          </a>
          <a className="cta-wa" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <MessageCircle size={18} fill="currentColor" /> Hablar con nosotros
          </a>
        </div>
      </Reveal>
    </section>
  )
}
