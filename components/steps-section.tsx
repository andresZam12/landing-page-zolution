import { Reveal } from './reveal'

const steps: [string, string, string][] = [
  ['01', 'Regístrate.', 'Crea tu cuenta y cuéntanos lo esencial de tu negocio.'],
  ['02', 'Cuéntanos.', 'Definimos tus servicios, horarios y la forma en que quieres atender.'],
  ['03', 'Pruébalo.', 'Usa el simulador y conversa con tu agente antes de conectarlo.'],
  ['04', 'Conéctalo.', 'Te acompañamos a dejar tu número listo para empezar.'],
]

export function StepsSection() {
  return (
    <section className="steps section">
      <div className="container">
        <div className="center-intro">
          <span className="section-kicker">/ ASÍ DE SIMPLE</span>
          <h2>
            De mensaje a cita.<br /><span>Sin complicaciones.</span>
          </h2>
        </div>
        <div className="steps-grid">
          {steps.map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 90} className="step">
              <span className="step-number">{n}</span>
              <div className="step-line" />
              {i < steps.length - 1 && <div className="step-connector" />}
              <h3>{t}</h3>
              <p>{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
