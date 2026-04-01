import { useEffect } from 'react' 

function CaseAcademic({ onBack }) {

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
          Academic Project
        </span>

        <h1 style={{
          fontSize: '48px',
          fontWeight: '700',
          color: 'var(--color-steel)',
          marginBottom: '40px',
        }}>
          Bridging the Gap — A Two-Sided Marketing Service Model
        </h1>

        <img src="/images/academic/01-cover.jpg" alt="Scalable digital marketing concept" style={imgStyle()} />

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '16px' }}>Overview</h2>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          This project was developed in 2021 as the final assignment of a postgraduate
          programme in Business Communication and Digital Marketing, during the height
          of the COVID-19 pandemic in Brazil.
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          The starting point was a market observation: businesses were cutting marketing
          budgets precisely when they needed visibility the most — and marketing professionals
          were losing clients as a direct result. Two groups with complementary needs,
          and no scalable bridge between them.
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '48px' }}>
          The project received a perfect score in the postgraduate programme.
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '16px' }}>The challenge</h2>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          The problem had two sides.
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          For small and micro businesses, the challenge was accessing quality marketing
          services at a cost that made sense during a financial crisis. Traditional agency
          models were out of reach, and doing it alone was technically complex.
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          For independent marketing professionals, the challenge was building a sustainable
          client base without depending on a single account — a recurring vulnerability
          for freelancers.
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '48px' }}>
          The core question was: how do you design a service model that serves both sides
          simultaneously, at scale, without requiring significant upfront investment?
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '24px' }}>Approach</h2>

        <h3 style={{ fontSize: '18px', fontWeight: '500', color: 'var(--color-terracotta)', marginBottom: '12px' }}>Strategic analysis</h3>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          I started with a SWOT analysis to map the strategic landscape — internal
          capabilities and external conditions — before proposing any solution.
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '32px' }}>
          Key findings included an underserved niche of small businesses aware of the
          need for digital presence but unable to afford traditional services, low
          operational costs as a structural advantage, and the risk of low market
          awareness as the main adoption barrier. The analysis also surfaced the pandemic
          itself as a dual factor: a threat in terms of financial constraints, but an
          accelerator of digital adoption that created a real window of opportunity.
        </p>

        <img src="/images/academic/02-swot.jpg" alt="SWOT analysis" style={imgStyle()} />

        <h3 style={{ fontSize: '18px', fontWeight: '500', color: 'var(--color-terracotta)', marginBottom: '12px' }}>The solution</h3>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          Based on the analysis, I proposed a subscription-based consulting model —
          scalable, tiered, and fully remote.
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          The model was structured around three service levels (basic, intermediate,
          advanced), allowing clients to choose based on budget and need. Each tier
          included editorial calendar templates, content planning, and varying degrees
          of strategic support.
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '48px' }}>
          The scalable structure was designed so that a high volume of basic-tier clients
          could generate consistent cash flow, while higher tiers allowed for deeper,
          more profitable engagements.
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '16px' }}>Key learning</h2>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          This project was conceptual — it was never implemented, by personal choice
          at the time.
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '48px' }}>
          What it showed me, in retrospect, is that I was already thinking in product
          terms before I had the vocabulary for it: identifying a two-sided market problem,
          validating assumptions through structured analysis, and designing a solution
          around user constraints rather than around what was technically possible.
          That instinct is what I have been formalising ever since.
        </p>

        <button onClick={onBack} className="btn-secondary" style={{ marginTop: '16px' }}>
          ← Back to Work
        </button>

      </div>
    </section>
  )
}

export default CaseAcademic