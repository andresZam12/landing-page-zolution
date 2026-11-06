import { ArrowUpRight, MessageCircle } from 'lucide-react'

import { REGISTER_URL, WHATSAPP_URL } from '@/lib/constants'
import { PhoneMockup } from './phone-mockup'

export function Hero() {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="eyebrow-dot" /> El agente que trabaja contigo
        </div>
        <h1>
          Tus clientes<br /><em>escriben.</em> Tu agenda<br />se llena.
        </h1>
        <p>Un agente de IA que atiende por WhatsApp y organiza tus citas en Google Calendar, a cualquier hora.</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={REGISTER_URL}>
            Crear mi agente <ArrowUpRight size={17} />
          </a>
          <a className="text-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <span className="wa-icon">
              <MessageCircle size={16} fill="currentColor" />
            </span>{' '}
            Hablar con nosotros
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
