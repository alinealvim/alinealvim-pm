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
        <h1 style={{
          fontSize: '56px',
          fontWeight: '700',
          color: 'var(--color-steel)',
          marginBottom: '16px',
        }}>
          Hi, I'm Aline Alvim!
        </h1>

        <h2 style={{
          fontSize: '32px',
          fontWeight: '500',
          color: 'var(--color-sage)',
          marginBottom: '24px',
        }}>
          Product Manager — where communication meets technology.
        </h2>

        <p style={{
          fontSize: '18px',
          color: 'var(--color-steel)',
          lineHeight: '1.6',
          marginBottom: '40px',
          maxWidth: '700px',
          margin: '0 auto 40px',
        }}>
          I advocate for the user. I bridge business and engineering.
          I tell the product's story.
        </p>

        <a href="#work" style={{
          backgroundColor: 'var(--color-terracotta)',
          color: '#fff',
          padding: '14px 32px',
          borderRadius: 'var(--btn-radius)',
          textDecoration: 'none',
          fontSize: '16px',
          fontWeight: '500',
          display: 'inline-block',
          transition: 'background-color 0.2s ease',
        }}
          onMouseEnter={e => e.target.style.backgroundColor = 'var(--color-lilac)'}
          onMouseLeave={e => e.target.style.backgroundColor = 'var(--color-terracotta)'}
        >
          See My Work
        </a>
      </div>
    </section>
  )
}

export default Hero