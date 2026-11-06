import { ArrowUpRight } from 'lucide-react'

import { REGISTER_URL, WHATSAPP_URL } from '@/lib/constants'
import { PhoneMockup } from './phone-mockup'
import { WhatsAppIcon } from './whatsapp-icon'

export function Hero() {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="eyebrow-dot" /> El agente que trabaja contigo
        </div>
        <h1>
          <span className="hero-line">Convierte cada</span>
          <span className="hero-line">mensaje en</span>
          <span className="hero-line">
            una{' '}
            <span className="hero-emphasis">
              <em>oportunidad.</em>
              <svg className="hero-underline" viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
                <path d="M4 14C70 2 230 2 296 13" />
              </svg>
            </span>
          </span>
        </h1>
        <p>Un agente de IA que atiende por WhatsApp y organiza tus citas en Google Calendar, a cualquier hora. <br />
        
         Ocúpate de tus asuntos sin problema.</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={REGISTER_URL}>
            Crear mi agente <ArrowUpRight size={17} />
          </a>
          <a className="text-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <span className="wa-icon">
              <WhatsAppIcon size={15} />
            </span>{' '}
            Habla con nosotros
          </a>
        </div>
        <div className="trust">
          <span className="trust-avatars">
            <i>✦</i>
            <i>●</i>
            <i>✚</i>
          </span>
          <span>
            Si no quedó en tu agenda,<br />
            <b>el agente no lo confirma.</b>
          </span>
        </div>
      </div>
      <PhoneMockup />
    </section>
  )
}
