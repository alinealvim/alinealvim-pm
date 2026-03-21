import CaseTalita from './CaseTalita'
import CaseBookShelf from './CaseBookShelf'

function Work({ activePage, setActivePage }) {
  const cases = [
    {
      id: 'talita',
      type: 'Case Study',
      title: 'Talita Santos',
      description: 'Brand strategy, market research, and visual identity for an image consulting business. From zero to a complete brand system.',
    },
    {
      id: 'bookshelf',
      type: 'Case Study',
      title: 'My Book Shelf',
      description: 'Reading habit tracker built with C# and Blazor. Designed with Scrum methodology, product backlog, risk management, and a Figma prototype.',
    },
    {
      id: 'croma',
      type: 'Web Development',
      title: 'Croma — Client Sites',
      description: 'Three websites built in HTML, CSS, JavaScript and Bootstrap with PHP forms. Developed during internship and as a freelancer.',
    },
  ]

  if (activePage === 'talita') return <CaseTalita onBack={() => setActivePage(null)} />
  if (activePage === 'bookshelf') return <CaseBookShelf onBack={() => setActivePage(null)} />

  return (
    <section id="work" style={{
      backgroundColor: 'var(--color-champagne)',
      padding: 'var(--section-padding)',
    }}>
      <div style={{
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
      }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: '500',
          color: 'var(--color-steel)',
          marginBottom: '16px',
        }}>
          Work
        </h2>

        <p style={{
          fontSize: '18px',
          color: 'var(--color-steel)',
          lineHeight: '1.6',
          marginBottom: '48px',
          maxWidth: '700px',
        }}>
          A selection of projects that represent my journey — from brand
          strategy and product thinking, to technical web development.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {cases.map(item => (
            <div key={item.id} style={{
              backgroundColor: 'var(--color-sand)',
              borderRadius: 'var(--card-radius)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
              <span style={{
                fontSize: '12px',
                fontWeight: '500',
                color: 'var(--color-terracotta)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}>
                {item.type}
              </span>

              <h3 style={{
                fontSize: '22px',
                fontWeight: '500',
                color: 'var(--color-steel)',
              }}>
                {item.title}
              </h3>

              <p style={{
                fontSize: '15px',
                color: 'var(--color-steel)',
                lineHeight: '1.6',
                flexGrow: 1,
              }}>
                {item.description}
              </p>

              {item.id !== 'croma' && (
                <button
                  onClick={() => setActivePage(item.id)}
                  style={{
                    display: 'inline-block',
                    marginTop: '8px',
                    padding: '10px 24px',
                    backgroundColor: 'var(--color-terracotta)',
                    color: '#fff',
                    borderRadius: 'var(--btn-radius)',
                    border: 'none',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    alignSelf: 'flex-start',
                  }}
                >
                  View Case Study
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work