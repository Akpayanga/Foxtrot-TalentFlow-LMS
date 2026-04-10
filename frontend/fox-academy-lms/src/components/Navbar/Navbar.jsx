const NAV_LINKS = ['My Learning', 'Assignments', 'Progress', 'Resources', 'Community']

const styles = {
  navbar: { height: '60px', backgroundColor: '#fff', borderBottom: '1px solid #e5e7eb', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' },
  navbarInner: { maxWidth: 'calc(980px + 48px)', margin: '0 auto', height: '100%', padding: '0 24px', display: 'flex', alignItems: 'center', gap: '40px' },
  navbarBrand: { display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', flexShrink: 0 },
  navbarLogo: { fontSize: '22px', lineHeight: 1 },
  navbarBrandText: { fontSize: '16px', fontWeight: '700', color: '#d97706', letterSpacing: '-0.02em' },
  navbarNav: { display: 'flex', alignItems: 'center', gap: '4px', flex: 1 },
  navbarLink: { fontSize: '13px', fontWeight: '500', color: '#6b7280', padding: '6px 12px', borderRadius: '8px', transition: 'color 0.15s, background 0.15s', textDecoration: 'none', whiteSpace: 'nowrap', cursor: 'pointer' },
  navbarLinkHover: { color: '#111827', backgroundColor: '#f3f4f6' },
  navbarActions: { display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto' },
  navbarIconBtn: { width: '36px', height: '36px', borderRadius: '9999px', border: '1px solid #e5e7eb', backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', transition: 'background 0.15s, color 0.15s', cursor: 'pointer' },
  navbarIconBtnHover: { backgroundColor: '#f3f4f6', color: '#111827' },
  navbarAvatar: { width: '36px', height: '36px', borderRadius: '9999px', overflow: 'hidden', border: '2px solid #d97706', padding: 0, backgroundColor: 'transparent', cursor: 'pointer' },
  navbarAvatarImg: { width: '100%', height: '100%', objectFit: 'cover' },
}

export default function Navbar() {
  return (
    <header style={styles.navbar}>
      <div style={styles.navbarInner}>
        <a href="#" style={styles.navbarBrand}>
          <span style={styles.navbarLogo}>🦊</span>
          <span style={styles.navbarBrandText}>Fox Academy</span>
        </a>

        <nav style={styles.navbarNav} aria-label="Main navigation">
          {NAV_LINKS.map(link => (
            <a 
              key={link} 
              href="#" 
              style={styles.navbarLink}
              onMouseEnter={(e) => Object.assign(e.target.style, styles.navbarLinkHover)}
              onMouseLeave={(e) => Object.assign(e.target.style, {color: '#6b7280', backgroundColor: 'transparent'})}
            >
              {link}
            </a>
          ))}
        </nav>

        <div style={styles.navbarActions}>
          <button 
            style={styles.navbarIconBtn}
            onMouseEnter={(e) => Object.assign(e.target.style, styles.navbarIconBtnHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, {backgroundColor: 'transparent', color: '#6b7280'})}
            aria-label="Notifications"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          </button>
          <button style={styles.navbarAvatar} aria-label="Profile">
            <img src="https://i.pravatar.cc/36?img=47" alt="Amara Obi" style={styles.navbarAvatarImg} />
          </button>
        </div>
      </div>
    </header>
  )
}