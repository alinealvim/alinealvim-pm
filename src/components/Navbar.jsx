function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: 'var(--color-champagne)',
      borderBottom: '0.5px solid var(--color-sage)',
      padding: '16px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <a href="#" className="nav-link" style={{ fontSize: '16px', fontWeight: '500' }}>
        Aline Alvim
      </a>

      <div style={{ display: 'flex', gap: '32px' }}>
        <a href="#about" className="nav-link">About</a>
        <a href="#work" className="nav-link">Cases</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar