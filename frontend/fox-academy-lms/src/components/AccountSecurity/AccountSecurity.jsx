const styles = {
  card: { backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e5e7eb', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' },
  cardHeader: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' },
  cardTitle: { fontSize: '16px', fontWeight: '600', color: '#111827' },
  cardAction: { fontSize: '13px', fontWeight: '500', color: '#d97706', display: 'flex', alignItems: 'center', gap: '4px', transition: 'opacity 0.15s', cursor: 'pointer' },
  fieldGroup: { display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' },
  fieldGroupLast: { marginBottom: 0 },
  fieldLabel: { fontSize: '11px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6b7280' },
  fieldValue: { fontSize: '14px', color: '#111827' },
  passwordDots: { letterSpacing: '0.12em', fontSize: '16px' },
  divider: { height: '1px', backgroundColor: '#e5e7eb', margin: '20px 0' },
  btnDanger: { backgroundColor: 'transparent', border: 'none', color: '#ef4444', fontSize: '13px', fontWeight: '600', padding: 0, transition: 'opacity 0.15s', cursor: 'pointer' },
}

export default function AccountSecurity() {
  return (
    <section style={styles.card}>
      <div style={styles.cardHeader}>
        <h2 style={styles.cardTitle}>Account &amp; Security</h2>
        <a href="#" style={styles.cardAction}>Manage <span>→</span></a>
      </div>

      <div style={styles.fieldGroup}>
        <span style={styles.fieldLabel}>Email</span>
        <span style={styles.fieldValue}>amaraobi@gmail.com</span>
      </div>

      <div style={styles.fieldGroup}>
        <span style={styles.fieldLabel}>Password</span>
        <span style={{...styles.fieldValue, ...styles.passwordDots}}>••••••••••••</span>
      </div>

      <div style={{...styles.fieldGroup, ...styles.fieldGroupLast}}>
        <span style={styles.fieldLabel}>Active Sessions</span>
        <span style={styles.fieldValue}>2 Devices (Lagos, Nigeria)</span>
      </div>

      <div style={styles.divider} />
      <button style={styles.btnDanger}>Delete Account</button>
    </section>
  )
}