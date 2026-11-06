import { WHATSAPP_URL } from '@/lib/constants'
import { WhatsAppIcon } from './whatsapp-icon'

export function FloatingWhatsapp() {
  return (
    <a className="floating-wa-wrap" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Conecta tu empresa por WhatsApp">
      <span className="floating-wa-bubble">Conecta tu empresa</span>
      <span className="floating-wa">
        <WhatsAppIcon size={26} />
      </span>
    </a>
  )
}
