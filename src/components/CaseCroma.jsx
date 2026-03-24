function CaseCroma({ onBack }) {
  const sites = [
    {
      id: 'clinica',
      name: 'Clínica dos Gatos',
      url: 'https://clinicadosgatos.pt',
      description: 'Website for a veterinary clinic specialising in feline care, based in Porto.',
      detail: 'The focus was on structuring information to support quick navigation and reduce friction for pet owners seeking services or contact details. Key decisions prioritised clarity, readability, and intuitive flow over visual complexity.',
      stack: 'HTML, CSS, JavaScript, Bootstrap',
      videoId: 'CtgQPaGvJ1Y',
    },
    {
      id: 'moradias',
      name: 'Moradias Lifestyle',
      url: null,
      description: 'Website for a residential real estate development project.',
      detail: 'The goal was to present properties in a way that supports user understanding and encourages lead generation. The structure was designed to highlight key information clearly while maintaining a visual flow aligned with the expectations of potential buyers.',
      stack: 'HTML, CSS, JavaScript, Bootstrap',
      videoId: 'yj-pzqxM0sU',
    },
    {
      id: 'villas',
      name: 'Villas do Campo',
      url: 'https://villasdocampo.pt',
      description: 'Website for a rural real estate development.',
      detail: 'This project balanced visual presentation with functionality, supporting both property showcasing and user engagement through clear calls to action and contact flows. Backend functionality was implemented for form handling and submission.',
      stack: 'HTML, CSS, JavaScript, Bootstrap, PHP',
      videoId: 'N-77A3Umw1U',
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
          Three web projects developed during my internship and freelance work
          at Croma Serviços de Publicidade (Porto), focused on translating
          business objectives into functional, user-friendly digital experiences.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {sites.map(site => (
            <div key={site.id} className="croma-grid">

              <div style={{ borderRadius: 'var(--card-radius)', overflow: 'hidden' }}>
                <iframe
                  width="100%"
                  height="260"
                  src={'https://www.youtube.com/embed/' + site.videoId + '?autoplay=1&mute=1&loop=1&playlist=' + site.videoId}
                  title={site.name}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ display: 'block' }}
                />
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
                  marginBottom: '12px',
                }}>
                  {site.description}
                </p>

                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.7',
                  color: 'var(--color-steel)',
                  marginBottom: '16px',
                  opacity: 0.8,
                }}>
                  {site.detail}
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
          ← Back to Cases
        </button>

      </div>
    </section>
  )
}

export default CaseCroma