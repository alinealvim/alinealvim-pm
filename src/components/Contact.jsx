function Contact() {
  const linkStyle = {
    fontSize: '15px',
    color: 'var(--color-sage)',
    textDecoration: 'none',
  }

  const btnStyle = {
    display: 'inline-block',
    marginBottom: '40px',
    padding: '14px 32px',
    backgroundColor: 'var(--color-terracotta)',
    color: '#fff',
    borderRadius: 'var(--btn-radius)',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
  }

  return (
    <section id="contact" style={{
      backgroundColor: 'var(--color-sand)',
      padding: 'var(--section-padding)',
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: '500',
          color: 'var(--color-steel)',
          marginBottom: '24px',
        }}>
          {"Let's get in touch"}
        </h2>

        <p style={{
          fontSize: '18px',
          lineHeight: '1.6',
          color: 'var(--color-steel)',
          marginBottom: '40px',
        }}>
          {"I'm open to new opportunities, collaborations, or a good conversation about product."}
        </p>

        <a href="mailto:hello@alinealvim.com" className="btn-primary">
          Say Hello
        </a>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginTop: '16px' }}>
          <a href="https://linkedin.com/in/alvimaline" target="_blank" rel="noreferrer" className="nav-link">
            LinkedIn
          </a>
          <a href="https://github.com/alinealvim" target="_blank" rel="noreferrer" className="nav-link">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact