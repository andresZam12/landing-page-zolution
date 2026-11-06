'use client'

import { useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'

import { WHATSAPP_URL } from '@/lib/constants'
import { Reveal } from './reveal'

const faqs: [string, string][] = [
  ['¿Qué necesito para empezar?', 'Solo regístrate y cuéntanos sobre tu negocio. Te acompañamos para dejar tu agente listo.'],
  ['¿Puedo probarlo antes de conectar mi número?', 'Sí. Puedes usar el simulador para probar tu agente antes de atender a tus clientes.'],
  ['¿Funciona con Google Calendar?', 'Sí. Google Calendar se conecta desde la plataforma para revisar disponibilidad y gestionar tus citas.'],
  ['¿Qué pasa si dos clientes piden la misma hora?', 'El agente revisa tu calendario antes de confirmar. Si no quedó en tu agenda, el agente no lo confirma.'],
  ['¿Puedo ver las conversaciones?', 'Sí. Puedes ver tus conversaciones y citas desde el panel de Zolution.'],
]

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <section className="section faq-section" id="preguntas">
      <div className="container faq-grid">
        <Reveal>
          <span className="section-kicker">/ PREGUNTAS</span>
          <h2>
            Lo que quieres<br /><span>saber.</span>
          </h2>
          <p>¿No encuentras lo que buscas?</p>
          <a className="text-link dark-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Escríbenos <ArrowUpRight size={17} />
          </a>
        </Reveal>
        <Reveal delay={100} className="faq-list">
          {faqs.map(([question, answer], i) => (
            <div className={`faq-item ${openFaq === i ? 'active' : ''}`} key={question}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                <span>{question}</span>
                <ChevronDown size={19} />
              </button>
              {openFaq === i && <p>{answer}</p>}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
