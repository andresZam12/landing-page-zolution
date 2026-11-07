import { ArrowUpRight } from 'lucide-react'

import { REGISTER_URL, WHATSAPP_URL } from '@/lib/constants'
import { BrandWatermark } from './brand-watermark'
import { Reveal } from './reveal'
import { WhatsAppIcon } from './whatsapp-icon'

export function FinalCta() {
  return (
    <section className="final-cta" id="contacto">
      <div className="cta-orb-clip">
        <div className="cta-orb orb-one" />
        <div className="cta-orb orb-two" />
      </div>
      <BrandWatermark variant="black" className="cta-watermark" />
      <Reveal className="container cta-content">
        <span className="section-kicker light-kicker">/ EMPIEZA HOY</span>
        <h2>
          Tu próximo cliente<br />puede <em>escribirte</em> hoy.
        </h2>
        <p>Haz que cada conversación cuente.</p>
        <div className="hero-actions">
          <a className="btn btn-dark" href={REGISTER_URL}>
            Crear mi agente <ArrowUpRight size={17} />
          </a>
          <a className="cta-wa" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <WhatsAppIcon size={17} /> Hablar con nosotros
          </a>
        </div>
      </Reveal>
    </section>
  )
}
