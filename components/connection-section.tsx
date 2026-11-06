import { ArrowUpRight, CalendarDays, Sparkles } from 'lucide-react'

import { WHATSAPP_URL } from '@/lib/constants'
import { Reveal } from './reveal'
import { WhatsAppIcon } from './whatsapp-icon'

export function ConnectionSection() {
  return (
    <section className="connection section" id="conexion">
      <div className="container connection-grid">
        <Reveal>
          <span className="section-kicker">/ 02 — CONEXIÓN</span>
          <h2>
            Tu equipo,<br /><span>siempre conectado.</span>
          </h2>
          <p>Google Calendar se conecta desde la plataforma. Para WhatsApp, te acompañamos a dejar tu número listo y funcionando.</p>
          <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Conectar mi WhatsApp <ArrowUpRight size={17} />
          </a>
        </Reveal>
        <Reveal delay={120} className="flow">
          <div className="flow-node whatsapp-node">
            <WhatsAppIcon size={20} />
            WhatsApp
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-node agent-node">
            <span>Z</span>
            Agente
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-node calendar-node">
            <CalendarDays size={20} />
            Google Calendar
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-node panel-node">
            <Sparkles size={19} />
            Panel
          </div>
          <div className="flow-line" />
        </Reveal>
      </div>
    </section>
  )
}
