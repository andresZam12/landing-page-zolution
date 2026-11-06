'use client'

import { useEffect, useRef, useState } from 'react'
import { CalendarDays, Check } from 'lucide-react'

type Step =
  | { type: 'customer'; text: string; short?: boolean }
  | { type: 'agent'; text: string }
  | { type: 'typing' }
  | { type: 'slot'; text: string; available?: boolean }
  | { type: 'calendar' }

const steps: Step[] = [
  { type: 'customer', text: 'Hola, quisiera agendar una cita para esta semana.' },
  { type: 'typing' },
  { type: 'agent', text: '¡Hola! Claro que sí. Tengo estos espacios disponibles:' },
  { type: 'slot', text: 'Lunes 3:00 PM', available: true },
  { type: 'slot', text: 'Martes 10:30 AM' },
  { type: 'customer', text: 'El lunes a las 3 está perfecto.', short: true },
  { type: 'typing' },
  { type: 'agent', text: '¡Listo! Tu cita quedó confirmada para el lunes a las 3:00 PM.' },
  { type: 'calendar' },
]

export function PhoneMockup() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const started = useRef(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = wrapRef.current
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReducedMotion(true)
      setVisibleCount(steps.length)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          observer.disconnect()

          let i = 0
          const playNext = () => {
            i += 1
            setVisibleCount(i)
            if (i < steps.length) {
              const delay = steps[i - 1]?.type === 'typing' ? 650 : 1000
              window.setTimeout(playNext, delay)
            }
          }
          window.setTimeout(playNext, 500)
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const visibleSteps = steps.slice(0, visibleCount).filter((step) => !(reducedMotion && step.type === 'typing'))

  return (
    <div className="phone-wrap" ref={wrapRef} aria-hidden="true">
      <div className="phone-glow" />
      <div className="phone">
        <div className="phone-top">
          <span className="phone-time">9:41</span>
          <span>● ● ●</span>
        </div>
        <div className="chat-head">
          <div className="avatar">Z</div>
          <div>
            <strong>Zolution agent</strong>
            <small>En línea ahora</small>
          </div>
          <span className="dots">•••</span>
        </div>
        <div className="chat-body">
          <div className="date-pill">HOY</div>
          {visibleSteps.map((step, i) => {
            const key = `${step.type}-${i}`
            if (step.type === 'customer') {
              return (
                <div key={key} className={`bubble customer${step.short ? ' short' : ''}`}>
                  {step.text}
                </div>
              )
            }
            if (step.type === 'agent') {
              return (
                <div key={key} className="bubble agent">
                  {step.text}
                </div>
              )
            }
            if (step.type === 'typing') {
              return (
                <div key={key} className="bubble agent typing">
                  <span />
                  <span />
                  <span />
                </div>
              )
            }
            if (step.type === 'slot') {
              return (
                <div key={key} className={`slot-row${step.available ? '' : ' muted'}`}>
                  <span>{step.text}</span>
                  {step.available ? <Check size={14} /> : <span>›</span>}
                </div>
              )
            }
            return (
              <div key={key} className="calendar-card">
                <div className="calendar-icon">
                  <CalendarDays size={17} />
                </div>
                <div>
                  <strong>Cita confirmada</strong>
                  <span>Lun, 3:00 PM · Google Calendar</span>
                </div>
                <Check size={16} className="calendar-check" />
              </div>
            )
          })}
        </div>
        <div className="chat-input">
          <span>Escribe un mensaje...</span>
          <span className="send">↑</span>
        </div>
      </div>
    </div>
  )
}
