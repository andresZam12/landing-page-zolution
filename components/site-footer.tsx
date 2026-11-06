import { MessageCircle } from 'lucide-react'

import { WHATSAPP_URL } from '@/lib/constants'
import { Logo } from './logo'

export function SiteFooter() {
  return (
    <footer>
      <div className="container footer-top">
        <div>
          <Logo />
          <p>
            Atención inteligente.<br />Agenda en orden.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <b>Producto</b>
            <a href="#funciones">Funciones</a>
            <a href="#conexion">Cómo se conecta</a>
            <a href="#preguntas">Preguntas</a>
          </div>
          <div>
            <b>Empresa</b>
            <a href="#que-es">Qué es Zolution</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Contacto</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Zolution. Hecho para negocios que avanzan.</span>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          <MessageCircle size={15} /> +57 317 719 9202
        </a>
      </div>
    </footer>
  )
}
