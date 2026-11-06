
export function GoogleCalendarIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="17" rx="2.5" fill="#fff" stroke="#DADCE0" strokeWidth="1" />
      <path d="M3 8.5a2.5 2.5 0 0 1 2.5-2.5h13A2.5 2.5 0 0 1 21 8.5V9H3v-.5Z" fill="#4285F4" />
      <rect x="6.5" y="1.8" width="2" height="5" rx="1" fill="#4285F4" />
      <rect x="15.5" y="1.8" width="2" height="5" rx="1" fill="#4285F4" />
      <rect x="6" y="12" width="3.6" height="3.6" fill="#34A853" />
      <rect x="10.2" y="12" width="3.6" height="3.6" fill="#FBBC05" />
      <rect x="14.4" y="12" width="3.6" height="3.6" fill="#EA4335" />
    </svg>
  )
}