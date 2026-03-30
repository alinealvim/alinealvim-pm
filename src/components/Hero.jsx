function Hero() {
  return (
    <section style={{
      backgroundColor: 'var(--color-champagne)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--section-padding)',
      paddingTop: '140px',
    }}>
      <div style={{
        maxWidth: 'var(--max-width)',
        width: '100%',
        textAlign: 'center',
      }}>

        <p style={{
          fontSize: '16px',
          fontWeight: '500',
          color: 'var(--color-sage)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}>
          Aline Alvim
        </p>

        <h1 style={{ fontSize: '56px', fontWeight: '700', color: 'var(--color-steel)', marginBottom: '12px' }}>
            Associate Product Manager
        </h1>

        <h2 style={{
          fontSize: '28px',
          fontWeight: '400',
          color: 'var(--color-sage)',
          marginBottom: '24px',
          lineHeight: '1.3',
        }}>
          From communication and code to Product — without losing either.
        </h2>

        <p style={{
          fontSize: '18px',
          color: 'var(--color-steel)',
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: '0 auto 40px',
        }}>
          Background in communication. Hands-on experience in tech. 
          I work at the intersection of user, business, and engineering.
        </p>

        <a href="#work" className="btn-primary">
          See How I Think
        </a>

      </div>
    </section>
  )
}

export default Hero