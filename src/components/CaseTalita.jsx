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

        <img src={base + 'images/talita/01-cover.jpg'} alt="Talita Santos brand mockup" style={imgStyle()} />

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '16px' }}>Overview</h2>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          Talita Santos is an image consultant and personal shopper based in Porto, Portugal,
          specialising in the Kibbe methodology.
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '48px' }}>
          This project started without a defined brand foundation and required building a complete
          positioning strategy — from target audience definition to visual identity — ensuring
          alignment between business goals and user perception.
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '16px' }}>The challenge</h2>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          The client had a clear service intention but lacked fundamental product elements:
          no defined audience, no validated positioning, and no brand direction.
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '48px' }}>
          The core challenge was to transform an abstract idea into a structured value proposition —
          defining who the service was for, how it should be perceived, and how to differentiate
          it in a competitive and increasingly digital market.
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '24px' }}>Approach</h2>

        <h3 style={{ fontSize: '18px', fontWeight: '500', color: 'var(--color-terracotta)', marginBottom: '12px' }}>User definition</h3>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          I started by identifying the most relevant target audience through market reasoning
          and supporting research.
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '32px' }}>
          Instead of designing for a broad audience, I narrowed the focus to women aged 30–50,
          middle class, with higher education — a segment more likely to invest in personal image
          consulting services. This decision guided all subsequent strategic and visual choices.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '500', color: 'var(--color-terracotta)', marginBottom: '12px' }}>Strategic analysis</h3>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          To validate positioning decisions, I developed a full SWOT analysis and business plan, mapping:
        </p>
        <ul style={{ fontSize: '17px', lineHeight: '2', color: 'var(--color-steel)', marginBottom: '32px', paddingLeft: '24px' }}>
          <li>market demand</li>
          <li>competitive landscape</li>
          <li>growth opportunities</li>
          <li>risks, including the rise of online consultants</li>
        </ul>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '32px' }}>
          This helped prioritise differentiation through a more personalised and trust-driven
          brand approach.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '500', color: 'var(--color-terracotta)', marginBottom: '12px' }}>Positioning & visual direction</h3>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          With a clear strategic foundation, I translated positioning into a visual identity system.
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '32px' }}>
          Different visual directions were explored and evaluated based on alignment with the
          target audience and brand values. Trade-offs were discussed with the client, balancing
          aesthetic preference with strategic consistency. The final identity reflects a deliberate
          positioning choice, designed to communicate credibility, personalisation, and clarity.
        </p>

        <img src='images/talita/02-brandboard.jpg' alt="Talita Santos brand board" style={imgStyle()} />

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '16px' }}>Outcome</h2>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          The project resulted in a complete and consistent brand foundation, including:
        </p>
        <ul style={{ fontSize: '17px', lineHeight: '2', color: 'var(--color-steel)', marginBottom: '48px', paddingLeft: '24px' }}>
          <li>Target audience definition and market research</li>
          <li>Strategic analysis and positioning</li>
          <li>Full visual identity system</li>
          <li>Brand application guidelines</li>
        </ul>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '48px' }}>
          The client now has a clear positioning and a cohesive identity that supports her
          communication and service delivery.
        </p>

        <img src='images/talita/03-report-kibbe.jpg' alt="Consulting report — Kibbe body type" style={imgStyle()} />
        <img src='images/talita/04-report-guidelines.jpg' alt="Consulting report — style guidelines" style={imgStyle()} />
        <img src= 'images/talita/05-report-final.jpg' alt="Talita Santos consulting report" style={imgStyle()} />

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '16px' }}>Key learning</h2>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '48px' }}>
          This project reinforced the importance of defining the problem before moving into execution.
          Early strategic decisions — especially around audience and positioning — had the highest
          impact on the final outcome.
        </p>

        <button onClick={onBack} className="btn-secondary" style={{ marginTop: '16px' }}>
          ← Back to Cases
        </button>

      </div>
    </section>
  )
}

export default CaseTalita