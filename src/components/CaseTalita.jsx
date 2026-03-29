import { useEffect } from 'react' 

function CaseTalita({ onBack }) {

  useEffect(() => {
    const workSection = document.getElementById('work')
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const imgStyle = (objectFit = 'contain') => ({
    width: '100%',
    height: 'auto',
    objectFit,
    borderRadius: 'var(--card-radius)',
    marginBottom: '48px',
    display: 'block',
  })

  return (
    <section id="work" style={{
      backgroundColor: 'var(--color-champagne)',
      padding: 'var(--section-padding)',
      paddingTop: '120px',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        <button onClick={onBack} className="btn-secondary" style={{ marginBottom: '40px' }}>
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
          Talita Santos — Product positioning & brand strategy 
        </h1>

        <img src='images/talita/01-cover.jpg' alt="Talita Santos brand mockup" style={imgStyle()} />

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '16px' }}>Overview</h2>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '48px' }}>
          Talita Santos is an image consultant and personal shopper based in Porto, Portugal,
          specialising in the Kibbe methodology. This project required defining the full product strategy: 
          audience, positioning, and brand identity, aligning business goals with user perception.
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '24px' }}>The challenge</h2>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '48px' }}>
          The client had no defined audience, validated positioning, or brand direction. The core challenge was to
          structure an abstract idea into a clear value proposition and differentiate it in a competitive market.
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '24px' }}>Approach</h2>

        <h3 style={{ fontSize: '18px', fontWeight: '500', color: 'var(--color-terracotta)', marginBottom: '12px' }}>User definition & research</h3>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '32px' }}>
          Focused on women aged 30–50, middle class, with higher education. Market reasoning and research guided
          all strategic and visual choices.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '500', color: 'var(--color-terracotta)', marginBottom: '12px' }}>Strategic analysis</h3>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '32px' }}>
          Performed SWOT analysis and business planning, mapping market demand, competition, growth opportunities,
          and risks. This informed prioritisation for a trust-driven, personalised brand.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '500', color: 'var(--color-terracotta)', marginBottom: '12px' }}>Positioning & visual direction</h3>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '32px' }}>
          Developed a visual identity system reflecting the brand positioning. Explored alternatives, discussed trade-offs
          with the client, balancing aesthetic preference with strategic consistency.
        </p>

        <img src='images/talita/02-brandboard.jpg' alt="Talita Santos brand board" style={imgStyle()} />

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '24px' }}>Key product decisions</h2>
        <ul style={{ fontSize: '17px', lineHeight: '2', color: 'var(--color-steel)', marginBottom: '32px', paddingLeft: '24px' }}>
          <li>Narrowed audience to focus on high-value segment for strategic alignment.</li>
          <li>Prioritised differentiation through personalisation and trust over aesthetics alone.</li>
          <li>Maintained strategic consistency when exploring multiple visual directions.</li>
        </ul>

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '24px' }}>Outcome</h2>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '32px' }}>
          Delivered a complete brand foundation: target audience, positioning, visual identity, and brand guidelines.
          The client now has a cohesive identity supporting service delivery and communication.
        </p>

        <img src='images/talita/03-report-kibbe.jpg' alt="Consulting report — Kibbe body type" style={imgStyle()} />
        <img src='images/talita/04-report-guidelines.jpg' alt="Consulting report — style guidelines" style={imgStyle()} />
        <img src='images/talita/05-report-final.jpg' alt="Talita Santos consulting report" style={imgStyle()} />

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '24px' }}>What I would validate next</h2>
        <ul style={{ fontSize: '17px', lineHeight: '2', color: 'var(--color-steel)', marginBottom: '48px', paddingLeft: '24px' }}>
          <li>Whether the brand positioning resonates with new clients and drives service adoption.</li>
          <li>Which visual elements best communicate trust and personalisation to the audience.</li>
          <li>How messaging can be refined to align with evolving market expectations.</li>
        </ul>

        <p style={{ fontSize: '14px', color: 'var(--color-sage)', marginBottom: '48px' }}>
          Stack / tools: Adobe Photoshop, Research, SWOT, Business Analysis
        </p>

        <button onClick={onBack} className="btn-secondary" style={{ marginTop: '16px' }}>
          ← Back to Cases
        </button>

      </div>
    </section>
  )
}

export default CaseTalita