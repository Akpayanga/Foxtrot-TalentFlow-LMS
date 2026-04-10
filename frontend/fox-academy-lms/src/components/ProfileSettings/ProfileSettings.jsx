import { useState } from 'react'

const styles = {
  card: { backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' },
  cardHeader: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' },
  cardTitle: { fontSize: '16px', fontWeight: '600', color: '#111827' },
  cardAction: { fontSize: '13px', fontWeight: '500', color: '#d97706', display: 'flex', alignItems: 'center', gap: '4px', transition: 'opacity 0.15s', cursor: 'pointer', background: 'none', border: 'none', padding: 0 },
  profileBanner: { backgroundColor: '#d97706', borderRadius: '8px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '28px', marginBottom: '24px' },
  profileBannerAvatar: { width: '56px', height: '56px', borderRadius: '9999px', overflow: 'hidden', border: '3px solid rgba(255,255,255,.35)', flexShrink: 0 },
  profileBannerAvatarImg: { width: '100%', height: '100%', objectFit: 'cover' },
  profileBannerInfo: { display: 'flex', flexDirection: 'column', gap: '3px' },
  profileBannerLabel: { fontSize: '10px', fontWeight: '600', letterSpacing: '.08em', color: 'rgba(255,255,255,.75)', textTransform: 'uppercase' },
  profileBannerValue: { fontSize: '15px', fontWeight: '600', color: '#fff', display: 'flex', alignItems: 'center', gap: '4px' },
  profileBannerIcon: { fontSize: '13px', opacity: .85 },
  profileForm: { display: 'flex', flexDirection: 'column', gap: 0 },
  fieldGroup: { display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' },
  fieldGroupLast: { marginBottom: 0 },
  fieldLabel: { fontSize: '11px', fontWeight: '600', letterSpacing: '.06em', textTransform: 'uppercase', color: '#6b7280' },
  formInput: { width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', backgroundColor: '#fff', outline: 'none', transition: 'border-color 0.15s, box-shadow 0.15s' },
  formInputReadonly: { backgroundColor: '#fafafa', color: '#111827', cursor: 'default', borderColor: '#e5e7eb' },
  formTextarea: { minHeight: '80px', resize: 'none' },
  btnPrimary: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '10px 20px', backgroundColor: '#d97706', color: '#fff', fontSize: '13px', fontWeight: '600', border: 'none', borderRadius: '8px', transition: 'background 0.15s, transform 0.1s', cursor: 'pointer', marginTop: '20px' },
  btnPrimaryHover: { backgroundColor: '#b45309' },
  btnPrimaryActive: { transform: 'scale(0.98)' },
}

export default function ProfileSettings() {
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({
    fullName: 'Amara Obi',
    bio: 'UX Design enthusiast with a passion for academic interfaces...',
    linkedin: 'linkedin.com/in/amaraobi',
  })

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  return (
    <section style={styles.card}>
      <div style={styles.cardHeader}>
        <h2 style={styles.cardTitle}>Profile Settings</h2>
        <button style={styles.cardAction} onClick={() => setEditing(e => !e)}>
          {editing ? 'Cancel' : 'Edit'} <span>→</span>
        </button>
      </div>

      {/* Profile Banner */}
      <div style={styles.profileBanner}>
        <div style={styles.profileBannerAvatar}>
          <img src="https://i.pravatar.cc/56?img=47" alt="Amara Obi" style={styles.profileBannerAvatarImg} />
        </div>
        <div style={styles.profileBannerInfo}>
          <span style={styles.profileBannerLabel}>NAME</span>
          <span style={styles.profileBannerValue}>{form.fullName}</span>
        </div>
        <div style={styles.profileBannerInfo}>
          <span style={styles.profileBannerLabel}>DISCIPLINE</span>
          <span style={styles.profileBannerValue}>
            UX Design <span style={styles.profileBannerIcon}>🔒</span>
          </span>
        </div>
        <div style={styles.profileBannerInfo}>
          <span style={styles.profileBannerLabel}>COHORT</span>
          <span style={styles.profileBannerValue}>
            Cohort 3 <span style={styles.profileBannerIcon}>🔒</span>
          </span>
        </div>
      </div>

      {/* Form Fields */}
      <div style={styles.profileForm}>
        <div style={styles.fieldGroup}>
          <label style={styles.fieldLabel} htmlFor="fullName">Full Name</label>
          {editing ? (
            <input
              id="fullName"
              name="fullName"
              style={styles.formInput}
              value={form.fullName}
              onChange={handleChange}
              onFocus={(e) => Object.assign(e.target.style, {borderColor: '#d97706', boxShadow: '0 0 0 3px rgba(217,119,6,0.12)'})}
              onBlur={(e) => Object.assign(e.target.style, {borderColor: '#d1d5db', boxShadow: 'none'})}
            />
          ) : (
            <div style={{...styles.formInput, ...styles.formInputReadonly}}>{form.fullName}</div>
          )}
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.fieldLabel} htmlFor="bio">Bio</label>
          {editing ? (
            <textarea
              id="bio"
              name="bio"
              style={{...styles.formInput, ...styles.formTextarea}}
              value={form.bio}
              onChange={handleChange}
              rows={3}
              onFocus={(e) => Object.assign(e.target.style, {borderColor: '#d97706', boxShadow: '0 0 0 3px rgba(217,119,6,0.12)'})}
              onBlur={(e) => Object.assign(e.target.style, {borderColor: '#d1d5db', boxShadow: 'none'})}
            />
          ) : (
            <div style={{...styles.formInput, ...styles.formInputReadonly, ...styles.formTextarea}}>{form.bio}</div>
          )}
        </div>

        <div style={{...styles.fieldGroup, ...styles.fieldGroupLast}}>
          <label style={styles.fieldLabel} htmlFor="linkedin">LinkedIn</label>
          {editing ? (
            <input
              id="linkedin"
              name="linkedin"
              style={styles.formInput}
              value={form.linkedin}
              onChange={handleChange}
              onFocus={(e) => Object.assign(e.target.style, {borderColor: '#d97706', boxShadow: '0 0 0 3px rgba(217,119,6,0.12)'})}
              onBlur={(e) => Object.assign(e.target.style, {borderColor: '#d1d5db', boxShadow: 'none'})}
            />
          ) : (
            <div style={{...styles.formInput, ...styles.formInputReadonly}}>{form.linkedin}</div>
          )}
        </div>
      </div>

      <button
        style={styles.btnPrimary}
        onClick={() => setEditing(false)}
        onMouseEnter={(e) => Object.assign(e.target.style, styles.btnPrimaryHover)}
        onMouseLeave={(e) => Object.assign(e.target.style, {backgroundColor: '#d97706'})}
        onMouseDown={(e) => Object.assign(e.target.style, styles.btnPrimaryActive)}
        onMouseUp={(e) => Object.assign(e.target.style, {transform: 'scale(1)'})}
      >
        Edit Profile
      </button>
    </section>
  )
}