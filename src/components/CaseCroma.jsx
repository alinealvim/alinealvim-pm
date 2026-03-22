import { useState } from 'react'

function CaseCroma({ onBack }) {
  const sites = [
    {
      id: 'clinica',
      name: 'Clinica dos Gatos',
      url: 'https://clinicadosgatos.pt',
      description: 'Website for a feline veterinary clinic based in Porto. Focused on clean navigation and intuitive user experience for pet owners.',
      stack: 'HTML, CSS, JavaScript, Bootstrap',
    },
    {
      id: 'moradias',
      name: 'Moradias Lifestyle',
      url: null,
      description: 'Website for a residential real estate development project. Built to showcase properties and capture leads effectively.',
      stack: 'HTML, CSS, JavaScript, Bootstrap',
    },
    {
      id: 'villas',
      name: 'Villas do Campo',
      url: 'https://villasdocampo.pt',
      description: 'Website for a rural real estate development. Includes contact forms and property presentation with a focus on lifestyle.',
      stack: 'HTML, CSS, JavaScript, Bootstrap, PHP',
    },
  ]

  return (
    <section style={{
      backgroundColor: 'var(--color-champagne)',
      padding: 'var(--section-padding)',
      paddingTop: '120px',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

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
          Web Development
        </span>

        <h1 style={{
          fontSize: '48px',
          fontWeight: '700',
          color: 'var(--color-steel)',
          marginBottom: '16px',
        }}>
          Croma — Client Sites
        </h1>

        <p style={{
          fontSize: '17px',
          lineHeight: '1.7',
          color: 'var(--color-steel)',
          marginBottom: '64px',
        }}>
          Three websites developed during my internship and as a freelancer
          at Croma Serviços de Publicidade, Porto.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {sites.map(site => (
            <div key={site.id} style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              alignItems: 'start',
              paddingBottom: '64px',
              borderBottom: '0.5px solid var(--color-sage)',
            }}>
              <div style={{
                backgroundColor: 'var(--color-sage)',
                borderRadius: 'var(--card-radius)',
                height: '280px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '14px',
              }}>
                Coming soon
              </div>

              <div>
                <h2 style={{
                  fontSize: '22px',
                  fontWeight: '500',
                  color: 'var(--color-steel)',
                  marginBottom: '12px',
                }}>
                  {site.name}
                </h2>

                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.7',
                  color: 'var(--color-steel)',
                  marginBottom: '16px',
                }}>
                  {site.description}
                </p>

                <p style={{
                  fontSize: '13px',
                  color: 'var(--color-sage)',
                  fontWeight: '500',
                  marginBottom: '24px',
                }}>
                  {site.stack}
                </p>

                {site.url && (
                  <a href={site.url} target="_blank" rel="noreferrer" className="btn-secondary" style={{ fontSize: '14px', padding: '8px 20px' }}>Visit Site</a>
                )}
              </div>
            </div>
          ))}
        </div>

        <button onClick={onBack} className="btn-secondary" style={{ marginTop: '48px' }}>
          ← Back to Work
        </button>

      </div>
    </section>
  )
}

export default CaseCroma