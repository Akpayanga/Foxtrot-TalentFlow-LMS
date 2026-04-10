import { useState } from 'react'

const INITIAL = [
  { id: 'assignment', label: 'Assignment Updates', on: true },
  { id: 'mentor',     label: 'Mentor Feedback',    on: true },
  { id: 'community',  label: 'Community Replies',  on: false },
  { id: 'team',       label: 'Team Activity',      on: true },
  { id: 'session',    label: 'Session Reminders',  on: true },
]

const styles = {
  card: { backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e5e7eb', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' },
  cardHeader: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' },
  cardTitle: { fontSize: '16px', fontWeight: '600', color: '#111827' },
  cardAction: { fontSize: '13px', fontWeight: '500', color: '#d97706', display: 'flex', alignItems: 'center', gap: '4px', transition: 'opacity 0.15s', cursor: 'pointer' },
  notifList: { display: 'flex', flexDirection: 'column', gap: 0 },
  notifRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 0', borderBottom: '1px solid #e5e7eb' },
  notifRowLast: { borderBottom: 'none', paddingBottom: 0 },
  notifLabel: { fontSize: '14px', color: '#111827' },
  toggle: { position: 'relative', width: '44px', height: '24px', flexShrink: 0 },
  toggleInput: { opacity: 0, width: 0, height: 0 },
  toggleTrack: { position: 'absolute', inset: 0, borderRadius: '9999px', backgroundColor: '#d1d5db', transition: 'background 0.2s', cursor: 'pointer' },
  toggleTrackOn: { backgroundColor: '#10b981' },
  toggleThumb: { position: 'absolute', top: '3px', left: '3px', width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#fff', transition: 'transform 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' },
  toggleThumbOn: { transform: 'translateX(20px)' },
}

export default function Notifications() {
  const [items, setItems] = useState(INITIAL)

  const toggle = (id) =>
    setItems(prev => prev.map(i => i.id === id ? { ...i, on: !i.on } : i))

  return (
    <section style={styles.card}>
      <div style={styles.cardHeader}>
        <h2 style={styles.cardTitle}>Notifications</h2>
        <a href="#" style={styles.cardAction}>Manage <span>→</span></a>
      </div>

      <div style={styles.notifList}>
        {items.map((item, idx) => (
          <div key={item.id} style={{...styles.notifRow, ...(idx === items.length - 1 ? styles.notifRowLast : {})}}>
            <span style={styles.notifLabel}>{item.label}</span>
            <label style={styles.toggle} aria-label={item.label}>
              <input
                type="checkbox"
                style={styles.toggleInput}
                checked={item.on}
                onChange={() => toggle(item.id)}
              />
              <span style={{...styles.toggleTrack, ...(item.on ? styles.toggleTrackOn : {})}}>
                <span style={{...styles.toggleThumb, ...(item.on ? styles.toggleThumbOn : {})}} />
              </span>
            </label>
          </div>
        ))}
      </div>
    </section>
  )
}