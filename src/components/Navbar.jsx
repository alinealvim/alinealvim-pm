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
      <span style={{
        fontSize: '16px',
        fontWeight: '500',
        color: 'var(--color-steel)',
      }}>
        Aline Alvim
      </span>

      <div style={{ display: 'flex', gap: '32px' }}>
        <a href="#about" style={{ fontSize: '15px', color: 'var(--color-steel)', textDecoration: 'none' }}>About</a>
        <a href="#work" style={{ fontSize: '15px', color: 'var(--color-steel)', textDecoration: 'none' }}>Work</a>
        <a href="#contact" style={{ fontSize: '15px', color: 'var(--color-steel)', textDecoration: 'none' }}>Contact</a>
      </div>
    </nav>
  )
}

export default Navbar