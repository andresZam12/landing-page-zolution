'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  CircleCheck,
  Menu,
  MessageCircle,
  Play,
  Sparkles,
  X,
} from 'lucide-react'

const whatsappUrl = 'https://wa.me/573177199202'
const loginUrl = 'https://zolution-agent.vercel.app/login'
const registerUrl = `${loginUrl}?registro=1`

const features = [
  { number: '01', title: 'Responde por ti', text: 'Dudas, servicios y precios. Tu agente responde con el tono de tu negocio, incluso cuando tú estás ocupado.', icon: MessageCircle, accent: 'orange' },
  { number: '02', title: 'Agenda sin choques', text: 'Revisa tu calendario antes de confirmar. Si no quedó en tu agenda, el agente no lo confirma.', icon: CalendarDays, accent: 'green' },
  { number: '03', title: 'Cambia y cancela', text: 'Tus clientes pueden mover o cancelar una cita directamente por WhatsApp, sin esperas ni llamadas.', icon: CircleCheck, accent: 'cream' },
  { number: '04', title: 'Todo en un panel', text: 'Conversaciones y citas en un solo lugar para que siempre sepas qué está pasando.', icon: Sparkles, accent: 'purple' },
  { number: '05', title: 'Mide con datos reales', text: 'Conoce tu tasa de resolución y el tiempo de respuesta para mejorar cada día.', icon: ArrowUpRight, accent: 'orange' },
  { number: '06', title: 'Pruébalo antes', text: 'Usa el simulador y descubre cómo atendería tu agente antes de conectar tu número.', icon: Play, accent: 'green' },
]

const faqs = [
  ['¿Qué necesito para empezar?', 'Solo regístrate y cuéntanos sobre tu negocio. Te acompañamos para dejar tu agente listo.'],
  ['¿Puedo probarlo antes de conectar mi número?', 'Sí. Puedes usar el simulador para probar tu agente antes de atender a tus clientes.'],
  ['¿Funciona con Google Calendar?', 'Sí. Google Calendar se conecta desde la plataforma para revisar disponibilidad y gestionar tus citas.'],
  ['¿Qué pasa si dos clientes piden la misma hora?', 'El agente revisa tu calendario antes de confirmar. Si no quedó en tu agenda, el agente no lo confirma.'],
  ['¿Puedo ver las conversaciones?', 'Sí. Puedes ver tus conversaciones y citas desde el panel de Zolution.'],
]

function Logo() {
  return <a href="#inicio" className="logo" aria-label="Zolution, inicio"><span className="logo-mark">Z</span><span>Zolution</span></a>
}

function PhoneMockup() {
  return (
    <div className="phone-wrap" aria-label="Vista previa de una conversación de Zolution">
      <div className="phone-glow" />
      <div className="phone">
        <div className="phone-top"><span className="phone-time">9:41</span><span>● ● ●</span></div>
        <div className="chat-head"><div className="avatar">Z</div><div><strong>Zolution agent</strong><small>En línea ahora</small></div><span className="dots">•••</span></div>
        <div className="chat-body">
          <div className="date-pill">HOY</div>
          <div className="bubble customer">Hola, quisiera agendar una cita para esta semana.</div>
          <div className="bubble agent">¡Hola! Claro que sí. Tengo estos espacios disponibles:</div>
          <div className="slot-row"><span>Lunes 3:00 PM</span><Check size={14} /></div>
          <div className="slot-row muted"><span>Martes 10:30 AM</span><span>›</span></div>
          <div className="bubble customer short">El lunes a las 3 está perfecto.</div>
          <div className="bubble agent">¡Listo! Tu cita quedó confirmada para el lunes a las 3:00 PM.</div>
          <div className="calendar-card"><div className="calendar-icon"><CalendarDays size={17} /></div><div><strong>Cita confirmada</strong><span>Lun, 3:00 PM · Google Calendar</span></div><Check size={16} className="calendar-check" /></div>
        </div>
        <div className="chat-input"><span>Escribe un mensaje...</span><span className="send">↑</span></div>
      </div>
    </div>
  )
}

function DashboardMockup({ type }: { type: string }) {
  return <div className={`dashboard ${type}`} aria-hidden="true"><div className="dash-sidebar"><div className="mini-logo">Z</div><span className="side-active">⌂</span><span>◫</span><span>◌</span><span>⚙</span></div><div className="dash-main"><div className="dash-bar"><span className="dash-title">{type === 'calendar-dash' ? 'Agenda' : 'Conversaciones'}</span><span className="dash-user">AV</span></div>{type === 'calendar-dash' ? <><div className="dash-week"><b>Junio 2025</b><span>‹　›</span></div><div className="calendar-grid">{['LUN','MAR','MIÉ','JUE','VIE'].map((d) => <span key={d} className="day-name">{d}</span>)}{Array.from({ length: 15 }).map((_, i) => <span key={i} className={i === 8 ? 'day selected' : 'day'}>{i + 1}</span>)}</div><div className="appointment"><i /> <div><b>Cita de valoración</b><small>Hoy · 3:00 PM</small></div><span>Confirmada</span></div><div className="appointment"><i className="green-dot" /> <div><b>Seguimiento</b><small>Hoy · 4:30 PM</small></div><span>Confirmada</span></div></> : <><div className="stat-row"><div><small>Resueltas</small><b>Conversaciones del día</b></div><strong>24</strong></div><div className="conversation"><span className="person">MC</span><div><b>María Camila</b><small>Quisiera agendar para mañana...</small></div><em>Ahora</em></div><div className="conversation"><span className="person clay">JP</span><div><b>Juan Pablo</b><small>¿Cuánto cuesta la consulta?</small></div><em>10 min</em></div><div className="conversation"><span className="person sand">LA</span><div><b>Laura Andrea</b><small>Gracias, nos vemos el lunes.</small></div><em>24 min</em></div></>}</div></div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  return <main id="inicio">
    <div className="announcement"><span><Sparkles size={13} /> Acceso anticipado para negocios en Colombia.</span><a href={whatsappUrl} target="_blank" rel="noreferrer">Hablemos <ArrowUpRight size={13} /></a></div>
    <header className="nav"><div className="container nav-inner"><Logo /><nav className={menuOpen ? 'nav-links open' : 'nav-links'}><a href="#que-es" onClick={() => setMenuOpen(false)}>Qué es</a><a href="#funciones" onClick={() => setMenuOpen(false)}>Funciones</a><a href="#conexion" onClick={() => setMenuOpen(false)}>Cómo se conecta</a><a href="#preguntas" onClick={() => setMenuOpen(false)}>Preguntas</a><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a><div className="mobile-actions"><a className="btn btn-ghost" href={loginUrl}>Entrar</a><a className="btn btn-dark" href={registerUrl}>Regístrate <ArrowUpRight size={16} /></a></div></nav><div className="nav-actions"><a className="login-link" href={loginUrl}>Entrar</a><a className="btn btn-dark" href={registerUrl}>Regístrate <ArrowUpRight size={16} /></a></div><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>{menuOpen ? <X /> : <Menu />}</button></div></header>

    <section className="hero container"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot" /> El agente que trabaja contigo</div><h1>Tus clientes<br /><em>escriben.</em> Tu agenda<br />se llena.</h1><p>Un agente de IA que atiende por WhatsApp y organiza tus citas en Google Calendar, a cualquier hora.</p><div className="hero-actions"><a className="btn btn-primary" href={registerUrl}>Crear mi agente <ArrowUpRight size={17} /></a><a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer"><span className="wa-icon"><MessageCircle size={16} fill="currentColor" /></span> Hablar con nosotros</a></div><div className="trust"><span className="trust-avatars"><i>✦</i><i>●</i><i>✚</i></span><span>Si no quedó en tu agenda,<br /><b>el agente no lo confirma.</b></span></div></div><PhoneMockup /></section>

    <section className="capabilities"><div className="container capability-row"><span className="cap-label">Zolution se integra con</span>{['WhatsApp', 'Google Calendar', 'Disponible 24/7', 'Sin citas duplicadas'].map((item, i) => <span className="capability" key={item}><i>{['◉','▣','◷','✓'][i]}</i>{item}</span>)}</div></section>

    <section className="section features-section" id="que-es"><div className="container"><div className="section-intro"><div><span className="section-kicker">/ LA IDEA</span><h2>Más tiempo para<br /><span>lo que importa.</span></h2></div><p>Zolution se encarga de las conversaciones repetitivas para que tú puedas enfocarte en atender, crecer y hacer bien tu trabajo.</p></div><div className="feature-grid" id="funciones">{features.map(({ number, title, text, icon: Icon, accent }) => <article className={`feature-card ${accent}`} key={number}><div className="feature-top"><span className="feature-number">/ {number}</span><Icon size={21} strokeWidth={1.6} /></div><h3>{title}</h3><p>{text}</p><span className="feature-arrow">↗</span></article>)}</div></div></section>

    <section className="showcase section"><div className="container showcase-grid"><div className="showcase-copy"><span className="section-kicker">/ 01 — ATENCIÓN</span><h2>Una conversación<br /><span>que sí avanza.</span></h2><p>Tu agente entiende lo que tus clientes necesitan, responde con claridad y los lleva al siguiente paso: una cita en tu agenda.</p><a className="text-link dark-link" href={registerUrl}>Conoce el simulador <ArrowUpRight size={17} /></a></div><DashboardMockup type="conversation-dash" /></div></section>

    <section className="steps section"><div className="container"><div className="center-intro"><span className="section-kicker">/ ASÍ DE SIMPLE</span><h2>De mensaje a cita.<br /><span>Sin complicaciones.</span></h2></div><div className="steps-grid">{[['01','Regístrate.','Crea tu cuenta y cuéntanos lo esencial de tu negocio.'],['02','Cuéntanos.','Definimos tus servicios, horarios y la forma en que quieres atender.'],['03','Pruébalo.','Usa el simulador y conversa con tu agente antes de conectarlo.'],['04','Conéctalo.','Te acompañamos a dejar tu número listo para empezar.']].map(([n,t,d], i) => <div className="step" key={n}><span className="step-number">{n}</span><div className="step-line" />{i < 3 && <div className="step-connector" />}<h3>{t}</h3><p>{d}</p></div>)}</div></div></section>

    <section className="connection section" id="conexion"><div className="container connection-grid"><div><span className="section-kicker">/ 02 — CONEXIÓN</span><h2>Tu equipo,<br /><span>siempre conectado.</span></h2><p>Google Calendar se conecta desde la plataforma. Para WhatsApp, te acompañamos a dejar tu número listo y funcionando.</p><a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Conectar mi WhatsApp <ArrowUpRight size={17} /></a></div><div className="flow"><div className="flow-node whatsapp-node"><MessageCircle size={21} />WhatsApp</div><div className="flow-arrow">→</div><div className="flow-node agent-node"><span>Z</span>Agente</div><div className="flow-arrow">→</div><div className="flow-node calendar-node"><CalendarDays size={20} />Google Calendar</div><div className="flow-arrow">→</div><div className="flow-node panel-node"><Sparkles size={19} />Panel</div><div className="flow-line" /></div></div></section>

    <section className="section faq-section" id="preguntas"><div className="container faq-grid"><div><span className="section-kicker">/ PREGUNTAS</span><h2>Lo que quieres<br /><span>saber.</span></h2><p>¿No encuentras lo que buscas?</p><a className="text-link dark-link" href={whatsappUrl} target="_blank" rel="noreferrer">Escríbenos <ArrowUpRight size={17} /></a></div><div className="faq-list">{faqs.map(([question, answer], i) => <div className={`faq-item ${openFaq === i ? 'active' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>{question}</span><ChevronDown size={19} /></button>{openFaq === i && <p>{answer}</p>}</div>)}</div></div></section>

    <section className="final-cta" id="contacto"><div className="cta-orb orb-one" /><div className="cta-orb orb-two" /><div className="container cta-content"><span className="section-kicker light-kicker">/ EMPIEZA HOY</span><h2>Tu próximo cliente<br />puede <em>escribirte</em> hoy.</h2><p>Haz que cada conversación cuente.</p><div className="hero-actions"><a className="btn btn-light" href={registerUrl}>Crear mi agente <ArrowUpRight size={17} /></a><a className="cta-wa" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} fill="currentColor" /> Hablar con nosotros</a></div></div></section>

    <footer><div className="container footer-top"><div><Logo /><p>Atención inteligente.<br />Agenda en orden.</p></div><div className="footer-links"><div><b>Producto</b><a href="#funciones">Funciones</a><a href="#conexion">Cómo se conecta</a><a href="#preguntas">Preguntas</a></div><div><b>Empresa</b><a href="#que-es">Qué es Zolution</a><a href={whatsappUrl} target="_blank" rel="noreferrer">Contacto</a></div></div></div><div className="container footer-bottom"><span>© 2026 Zolution. Hecho para negocios que avanzan.</span><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={15} /> +57 317 719 9202</a></div></footer><a className="floating-wa" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Hablar con Zolution por WhatsApp"><MessageCircle size={24} fill="currentColor" /></a>
  </main>
}
