import { MessageCircle } from 'lucide-react'

import { WHATSAPP_URL } from '@/lib/constants'

export function FloatingWhatsapp() {
  return (
    <a className="floating-wa" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Hablar con Zolution por WhatsApp">
      <MessageCircle size={24} fill="currentColor" />
    </a>
  )
}
