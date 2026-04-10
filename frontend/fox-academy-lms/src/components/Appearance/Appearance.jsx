import { useState } from 'react'

const styles = {
  card: { backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e5e7eb', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' },
  cardTitle: { fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '20px' },
  appearanceGroup: { marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' },
  appearanceGroupLast: { marginBottom: 0 },
  fieldLabel: { fontSize: '11px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6b7280' },
  pillGroup: { display: 'flex', gap: '8px', flexWrap: 'wrap' },
  pillBtn: { padding: '7px 18px', borderRadius: '9999px', border: '1px solid #d1d5db', backgroundColor: '#ffffff', fontSize: '13px', fontWeight: '500', color: '#6b7280', transition: 'all 0.15s', cursor: 'pointer' },
  pillBtnHover: { borderColor: '#d97706', color: '#d97706' },
  pillBtnActive: { backgroundColor: '#d97706', borderColor: '#d97706', color: '#fff', fontWeight: '600' },
  pillBtnActiveHover: { backgroundColor: '#b45309', borderColor: '#b45309', color: '#fff' },
}

export default function Appearance() {
  const [theme, setTheme] = useState('light')
  const [fontSize, setFontSize] = useState('medium')

  return (
    <section style={styles.card}>
      <h2 style={styles.cardTitle}>Appearance</h2>

      <div style={styles.appearanceGroup}>
        <span style={styles.fieldLabel}>Theme Selection</span>
        <div style={styles.pillGroup}>
          {['light', 'dark'].map(t => (
            <button
              key={t}
              style={{
                ...styles.pillBtn,
                ...(theme === t ? styles.pillBtnActive : {}),
              }}
              onMouseEnter={(e) => {
                if (theme !== t) Object.assign(e.target.style, styles.pillBtnHover)
                else Object.assign(e.target.style, styles.pillBtnActiveHover)
              }}
              onMouseLeave={(e) => {
                if (theme === t) Object.assign(e.target.style, styles.pillBtnActive)
                else Object.assign(e.target.style, styles.pillBtn)
              }}
              onClick={() => setTheme(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div style={{...styles.appearanceGroup, ...styles.appearanceGroupLast}}>
        <span style={styles.fieldLabel}>Font Size</span>
        <div style={styles.pillGroup}>
          {['small', 'medium', 'large'].map(s => (
            <button
              key={s}
              style={{
                ...styles.pillBtn,
                ...(fontSize === s ? styles.pillBtnActive : {}),
              }}
              onMouseEnter={(e) => {
                if (fontSize !== s) Object.assign(e.target.style, styles.pillBtnHover)
                else Object.assign(e.target.style, styles.pillBtnActiveHover)
              }}
              onMouseLeave={(e) => {
                if (fontSize === s) Object.assign(e.target.style, styles.pillBtnActive)
                else Object.assign(e.target.style, styles.pillBtn)
              }}
              onClick={() => setFontSize(s)}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}