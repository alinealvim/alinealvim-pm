function CaseTalita({ onBack }) {
  const base = import.meta.env.BASE_URL

  const imgStyle = (objectFit = 'cover') => ({
    width: '100%',
    height: 'auto',
    objectFit,
    borderRadius: 'var(--card-radius)',
    marginBottom: '48px',
    display: 'block',
  })

  return (
    <section style={{
      backgroundColor: 'var(--color-champagne)',
      padding: 'var(--section-padding)',
      paddingTop: '120px',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        <button onClick={onBack} 
          className="btn-secondary" 
          style={{ marginBottom: '40px' }}>
            ← Back
        </button>

        <span style={{
          fontSize: '12px',
          fontWeight: '500',
          color: 'var(--color-terracotta)',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          display: 'block',
          marginBottom: '12px',
        }}>
          Case Study
        </span>

        <h1 style={{
          fontSize: '48px',
          fontWeight: '700',
          color: 'var(--color-steel)',
          marginBottom: '40px',
        }}>
          Talita Santos — Brand Strategy & Visual Identity
        </h1>

        <img src={base + "images/talita/01-cover.jpg"} alt="Talita Santos Instagram mockup" style={imgStyle()} />

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '16px' }}>Overview</h2>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '48px' }}>
          Talita Santos is an image consultant and personal shopper based in Porto, Portugal,
          specialising in the Kibbe methodology. This project involved building a brand from
          scratch — from zero strategic foundation to a complete visual identity system.
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '16px' }}>The challenge</h2>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '48px' }}>
          The client came with a passion, a service idea, and two favourite colours. No name
          confirmed, no defined audience, no market positioning. The first task was not to
          design anything — it was to define who this brand was for and what it needed to say.
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '16px' }}>The process</h2>

        <h3 style={{ fontSize: '18px', fontWeight: '500', color: 'var(--color-terracotta)', marginBottom: '12px' }}>Defining the user</h3>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '32px' }}>
          Before any visual decisions, I focused on who the target audience actually was.
          Through market reasoning and supporting research, I identified women aged 30–50,
          middle class, with higher education, as the primary audience.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '500', color: 'var(--color-terracotta)', marginBottom: '12px' }}>Strategic analysis</h3>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '32px' }}>
          I developed a full SWOT analysis and business plan covering market demand,
          competitive landscape, growth opportunities, and potential threats — including
          the growing competition from online image consultants.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '500', color: 'var(--color-terracotta)', marginBottom: '12px' }}>Visual identity</h3>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '32px' }}>
          With the strategic foundation in place, I translated the brand positioning
          into a complete visual identity system. The process involved exploring colour
          directions aligned with the target audience and the brand values — presenting
          alternatives, discussing trade-offs, and refining based on the client's vision.
          The final result reflects a deliberate aesthetic choice that the client owns
          and applies consistently across her consulting work.
        </p>

        <img src={base + "images/talita/02-brandboard.jpg"} alt="Talita Santos brand board" style={imgStyle('contain')} />

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '16px' }}>What was delivered</h2>
        <ul style={{ fontSize: '17px', lineHeight: '2', color: 'var(--color-steel)', marginBottom: '48px', paddingLeft: '24px' }}>
          <li>Target audience definition and market research</li>
          <li>SWOT analysis</li>
          <li>Business plan with market and competitive analysis</li>
          <li>Complete visual identity: logo suite, colour palette, typography, brand board</li>
          <li>Brand application manual</li>
        </ul>

        <img src={base + "images/talita/03-report-kibbe.jpg"} alt="Consulting report — Kibbe body type" style={imgStyle()} />
        <img src={base + "images/talita/04-report-guidelines.jpg"} alt="Consulting report — style guidelines" style={imgStyle()} />
        <img src={base + "images/talita/05-report-final.jpg"} alt="Talita Santos consulting report" style={imgStyle('contain')} />

        <button onClick={onBack} className="btn-secondary" style={{ marginTop: '16px' }}>
          ← Back to Work
        </button>

      </div>
    </section>
  )
}

export default CaseTalita