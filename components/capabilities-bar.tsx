import { CheckCircle2, Clock } from 'lucide-react'

import { GoogleCalendarIcon } from './google-calendar-icon'
import { WhatsAppIcon } from './whatsapp-icon'

const items = [
  { label: 'WhatsApp', icon: <WhatsAppIcon size={24} />, tone: 'whatsapp' },
  { label: 'Google Calendar', icon: <GoogleCalendarIcon size={24} />, tone: 'calendar' },
  { label: 'Disponible 24/7', icon: <Clock size={24} />, tone: 'clock' },
  { label: 'Sin citas duplicadas', icon: <CheckCircle2 size={24} />, tone: 'check' },
]

export function CapabilitiesBar() {
  return (
    <section className="capabilities">
      <div className="container capability-row">
        <span className="cap-label">Zabio se integra con: </span>
        {items.map(({ label, icon, tone }) => (
          <span className="capability" key={label}>
            <span className={`capability-icon ${tone}`}>{icon}</span>
            {label}
          </span>
        ))}
      </div>
    </section>
  )
}