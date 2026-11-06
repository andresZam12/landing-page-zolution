const items = ['WhatsApp', 'Google Calendar', 'Disponible 24/7', 'Sin citas duplicadas']
const icons = ['◉', '▣', '◷', '✓']

export function CapabilitiesBar() {
  return (
    <section className="capabilities">
      <div className="container capability-row">
        <span className="cap-label">Zabio se integra con</span>
        {items.map((item, i) => (
          <span className="capability" key={item}>
            <i>{icons[i]}</i>
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
