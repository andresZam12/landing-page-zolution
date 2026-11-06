import {
  ArrowUpRight,
  CalendarDays,
  CircleCheck,
  MessageCircle,
  Play,
  Sparkles,
} from 'lucide-react'

import { Reveal } from './reveal'

const features = [
  { number: '01', title: 'Responde por ti', text: 'Dudas, servicios y precios. Tu agente responde con el tono de tu negocio, incluso cuando tú estás ocupado.', icon: MessageCircle, accent: 'orange' },
  { number: '02', title: 'Agenda sin choques', text: 'Revisa tu calendario antes de confirmar. Si no quedó en tu agenda, el agente no lo confirma.', icon: CalendarDays, accent: 'green' },
  { number: '03', title: 'Cambia y cancela', text: 'Tus clientes pueden mover o cancelar una cita directamente por WhatsApp, sin esperas ni llamadas.', icon: CircleCheck, accent: 'cream' },
  { number: '04', title: 'Todo en un panel', text: 'Conversaciones y citas en un solo lugar para que siempre sepas qué está pasando.', icon: Sparkles, accent: 'purple' },
  { number: '05', title: 'Mide con datos reales', text: 'Conoce tu tasa de resolución y el tiempo de respuesta para mejorar cada día.', icon: ArrowUpRight, accent: 'orange' },
  { number: '06', title: 'Pruébalo antes', text: 'Usa el simulador y descubre cómo atendería tu agente antes de conectar tu número.', icon: Play, accent: 'green' },
]

export function FeaturesSection() {
  return (
    <section className="section features-section" id="que-es">
      <div className="container">
        <div className="section-intro">
          <div>
            <span className="section-kicker">/ LA IDEA</span>
            <h2>
              Más tiempo para<br /><span>lo que importa.</span>
            </h2>
          </div>
          <p>Zabio se encarga de las conversaciones repetitivas para que tú puedas enfocarte en atender, crecer y hacer bien tu trabajo.</p>
        </div>
        <div className="feature-grid" id="funciones">
          {features.map(({ number, title, text, icon: Icon, accent }, i) => (
            <Reveal key={number} delay={i * 70}>
              <article className={`feature-card ${accent}`}>
                <div className="feature-top">
                  <span className="feature-number">/ {number}</span>
                  <Icon size={21} strokeWidth={1.6} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="feature-arrow">↗</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
