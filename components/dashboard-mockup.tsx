export function DashboardMockup({ type }: { type: string }) {
  return (
    <div className={`dashboard ${type}`} aria-hidden="true">
      <div className="dash-sidebar">
        <div className="mini-logo">Z</div>
        <span className="side-active">⌂</span>
        <span>◫</span>
        <span>◌</span>
        <span>⚙</span>
      </div>
      <div className="dash-main">
        <div className="dash-bar">
          <span className="dash-title">{type === 'calendar-dash' ? 'Agenda' : 'Conversaciones'}</span>
          <span className="dash-user">AV</span>
        </div>
        {type === 'calendar-dash' ? (
          <>
            <div className="dash-week">
              <b>Junio 2025</b>
              <span>‹　›</span>
            </div>
            <div className="calendar-grid">
              {['LUN', 'MAR', 'MIÉ', 'JUE', 'VIE'].map((d) => (
                <span key={d} className="day-name">{d}</span>
              ))}
              {Array.from({ length: 15 }).map((_, i) => (
                <span key={i} className={i === 8 ? 'day selected' : 'day'}>{i + 1}</span>
              ))}
            </div>
            <div className="appointment">
              <i />
              <div>
                <b>Cita de valoración</b>
                <small>Hoy · 3:00 PM</small>
              </div>
              <span>Confirmada</span>
            </div>
            <div className="appointment">
              <i className="green-dot" />
              <div>
                <b>Seguimiento</b>
                <small>Hoy · 4:30 PM</small>
              </div>
              <span>Confirmada</span>
            </div>
          </>
        ) : (
          <>
            <div className="stat-row">
              <div>
                <small>Resueltas</small>
                <b>Conversaciones del día</b>
              </div>
              <strong>24</strong>
            </div>
            <div className="conversation">
              <span className="person">MC</span>
              <div>
                <b>María Camila</b>
                <small>Quisiera agendar para mañana...</small>
              </div>
              <em>Ahora</em>
            </div>
            <div className="conversation">
              <span className="person clay">JP</span>
              <div>
                <b>Juan Pablo</b>
                <small>¿Cuánto cuesta la consulta?</small>
              </div>
              <em>10 min</em>
            </div>
            <div className="conversation">
              <span className="person sand">LA</span>
              <div>
                <b>Laura Andrea</b>
                <small>Gracias, nos vemos el lunes.</small>
              </div>
              <em>24 min</em>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
