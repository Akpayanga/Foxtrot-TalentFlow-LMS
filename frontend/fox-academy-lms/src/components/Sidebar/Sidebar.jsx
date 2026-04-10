import { useState } from 'react'

const QUICK_LINKS = [
  {
    id: 'help',
    label: 'Help Center',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  },
  {
    id: 'support',
    label: 'Contact Support',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    id: 'privacy',
    label: 'Privacy Policy',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    id: 'terms',
    label: 'Terms of Service',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
]

const styles = {
  card: { backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' },
  sidebarAccount: { textAlign: 'center' },
  sidebarLabel: { fontSize: '11px', fontWeight: '600', letterSpacing: '.08em', textTransform: 'uppercase', color: '#9ca3af', textAlign: 'left', marginBottom: '16px' },
  sidebarProfile: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', marginBottom: '16px' },
  sidebarAvatar: { width: '72px', height: '72px', borderRadius: '9999px', overflow: 'hidden', border: '3px solid #d97706', }  ,
  sidebarAvatarImg: { width: '100%', height: '100%', objectFit: 'cover' },
  sidebarName: { fontSize: '16px', fontWeight: '700', color: '#111827', margin: 0 },
  sidebarRole: { fontSize: '13px', fontWeight: '600', color: '#d97706' },
  sidebarDivider: { height: '1px', background: '#e5e7eb', margin: '4px 0 16px' },
  sidebarMeta: { display: 'flex', flexDirection: 'column', gap: '10px' },
  sidebarMetaRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  sidebarMetaKey: { fontSize: '11px', fontWeight: '600', letterSpacing: '.06em', textTransform: 'uppercase', color: '#9ca3af' },
  sidebarMetaVal: { fontSize: '13px', fontWeight: '500', color: '#111827' },
  sidebarMetaValStatus: { display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981' },
  statusDot: { width: '8px', height: '8px', borderRadius: '9999px', backgroundColor: '#10b981', display: 'inline-block' },
  sidebarLinks: { padding: '20px 24px' },
  quickLinksNav: { display: 'flex', flexDirection: 'column', gap: '2px' },
  quickLink: { display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 10px', borderRadius: '8px', fontSize: '13px', fontWeight: '500', color: '#6b7280', transition: 'background 0.15s, color 0.15s', textDecoration: 'none', cursor: 'pointer' },
  quickLinkHover: { backgroundColor: '#f3f4f6', color: '#111827' },
  quickLinkIcon: { width: '28px', height: '28px', borderRadius: '4px', backgroundColor: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706', flexShrink: 0 },
  adminNote: { backgroundColor: '#d97706', borderRadius: '12px', padding: '18px 20px', border: '1px solid #b45309' },
  adminNoteHeader: { display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: '700', letterSpacing: '.07em', textTransform: 'uppercase', color: 'rgba(255,255,255,.85)', marginBottom: '10px' },
  adminNoteText: { fontSize: '13px', color: 'rgba(255,255,255,.92)', lineHeight: '1.55', marginBottom: '14px' },
  adminNoteDismiss: { width: '100%', padding: '9px', borderRadius: '8px', border: '1.5px solid rgba(255,255,255,.55)', backgroundColor: 'transparent', color: '#fff', fontSize: '13px', fontWeight: '600', transition: 'background 0.15s', cursor: 'pointer' },
  adminNoteDismissHover: { backgroundColor: 'rgba(255,255,255,.15)' },
}

export default function Sidebar() {
  const [adminDismissed, setAdminDismissed] = useState(false)

  return (
    <>
      {/* Account Card */}
      <div style={{...styles.card, ...styles.sidebarAccount}}>
        <p style={styles.sidebarLabel}>Your Account</p>

        <div style={styles.sidebarProfile}>
          <div style={styles.sidebarAvatar}>
            <img src="https://i.pravatar.cc/72?img=47" alt="Amara Obi" style={styles.sidebarAvatarImg} />
          </div>
          <h3 style={styles.sidebarName}>Amara Obi</h3>
          <p style={styles.sidebarRole}>UX Design Intern</p>
        </div>

        <div style={styles.sidebarDivider} />

        <dl style={styles.sidebarMeta}>
          <div style={styles.sidebarMetaRow}>
            <dt style={styles.sidebarMetaKey}>Cohort</dt>
            <dd style={styles.sidebarMetaVal}>Cohort 3</dd>
          </div>
          <div style={styles.sidebarMetaRow}>
            <dt style={styles.sidebarMetaKey}>Enrolled</dt>
            <dd style={styles.sidebarMetaVal}>February 2026</dd>
          </div>
          <div style={styles.sidebarMetaRow}>
            <dt style={styles.sidebarMetaKey}>Status</dt>
            <dd style={{...styles.sidebarMetaVal, ...styles.sidebarMetaValStatus}}>
              <span style={styles.statusDot} /> Active
            </dd>
          </div>
        </dl>
      </div>

      {/* Quick Links */}
      <div style={{...styles.card, ...styles.sidebarLinks}}>
        <p style={styles.sidebarLabel}>Quick Links</p>
        <nav style={styles.quickLinksNav}>
          {QUICK_LINKS.map(link => (
            <a 
              key={link.id} 
              href="#" 
              style={styles.quickLink}
              onMouseEnter={(e) => Object.assign(e.target.style, styles.quickLinkHover)}
              onMouseLeave={(e) => Object.assign(e.target.style, {backgroundColor: 'transparent', color: '#6b7280'})}
            >
              <span style={styles.quickLinkIcon}>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Admin Note */}
      {!adminDismissed && (
        <div style={styles.adminNote}>
          <div style={styles.adminNoteHeader}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <span>Admin Note</span>
          </div>
          <p style={styles.adminNoteText}>
            Cohort 3 profiles will be automatically archived on June 15th. Please ensure all your documentation is downloaded before the cohort ends.
          </p>
          <button
            style={styles.adminNoteDismiss}
            onMouseEnter={(e) => Object.assign(e.target.style, styles.adminNoteDismissHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, {backgroundColor: 'transparent'})}
            onClick={() => setAdminDismissed(true)}
          >
            Dismiss
          </button>
        </div>
      )}
    </>
  )
}