function CaseTalita({ onBack }) {
  const imgPlaceholder = {
    backgroundColor: 'var(--color-sage)',
    borderRadius: 'var(--card-radius)',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '14px',
    fontWeight: '500',
  }

  return (
    <section style={{
      backgroundColor: 'var(--color-champagne)',
      padding: 'var(--section-padding)',
      paddingTop: '120px',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-terracotta)',
            fontSize: '15px',
            cursor: 'pointer',
            marginBottom: '40px',
            padding: 0,
            fontFamily: 'var(--font-sans)',
          }}
        >
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

        <div style={{ ...imgPlaceholder, height: '360px', marginBottom: '60px' }}>
          Image — Brand mockup
        </div>

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
          Through market reasoning and research data from a 2023 Portuguese social media
          behaviour report, I identified women aged 30–50, middle class, with higher education,
          as the primary audience.
        </p>

        <div style={{ ...imgPlaceholder, height: '280px', marginBottom: '32px' }}>
          Image — SWOT analysis
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '500', color: 'var(--color-terracotta)', marginBottom: '12px' }}>Strategic analysis</h3>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '32px' }}>
          I developed a full SWOT analysis and business plan covering market demand,
          competitive landscape, growth opportunities, and potential threats — including
          the growing competition from online image consultants.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '500', color: 'var(--color-terracotta)', marginBottom: '12px' }}>Visual identity</h3>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '32px' }}>
          I identified a potential tension between the luxury positioning the client wanted
          and the middle-class audience the brand was actually targeting. I proposed a
          terracotta alternative. The client chose to maintain her original vision — I
          respected that and delivered the strongest possible execution within her direction.
        </p>

        <div style={{ ...imgPlaceholder, height: '280px', marginBottom: '32px' }}>
          Image — Brand board
        </div>

        <div style={{ ...imgPlaceholder, height: '280px', marginBottom: '48px' }}>
          Image — Logo variations
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '16px' }}>What was delivered</h2>
        <ul style={{ fontSize: '17px', lineHeight: '2', color: 'var(--color-steel)', marginBottom: '48px', paddingLeft: '24px' }}>
          <li>Target audience definition with supporting research</li>
          <li>Social media behaviour analysis (Portuguese market, 2023)</li>
          <li>SWOT analysis</li>
          <li>Business plan with market and competitive analysis</li>
          <li>Complete visual identity: logo suite, colour palette, typography, brand board</li>
          <li>Brand application manual</li>
        </ul>

        <div style={{ ...imgPlaceholder, height: '280px', marginBottom: '48px' }}>
          Image — Consulting report (applied by client)
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '16px' }}>{"What I'd do differently"}</h2>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '48px' }}>
          The audience research focused primarily on social media behaviour. If I were doing
          this today, I would go deeper into consumption habits — how this audience makes
          purchasing decisions for services, what triggers conversion, what creates trust
          in a service provider.
        </p>

        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: '1px solid var(--color-terracotta)',
            color: 'var(--color-terracotta)',
            fontSize: '15px',
            cursor: 'pointer',
            padding: '10px 24px',
            borderRadius: 'var(--btn-radius)',
            fontFamily: 'var(--font-sans)',
          }}
        >
          ← Back to Work
        </button>

      </div>
    </section>
  )
}

export default CaseTalita