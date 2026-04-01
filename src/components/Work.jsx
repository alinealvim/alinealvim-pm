import CaseTalita from './CaseTalita'
import CaseBookShelf from './CaseBookShelf'
import CaseCroma from './CaseCroma'
import CaseAcademic from './CaseAcademic'

function Work({ activePage, setActivePage }) {
  const cases = [
    {
      id: 'bookshelf',
      type: 'Case Study',
      title: 'My Book Shelf',
      description: 'Helping users build a consistent reading habit — designed with product thinking, built end-to-end.',
    },
    {
      id: 'talita',
      type: 'Case Study',
      title: 'Talita Santos',
      description: 'A client with no defined audience, positioning, or brand direction. From zero to a complete brand system.',
    },
    {
      id: 'croma',
      type: 'Web Development',
      title: 'Croma — Client Sites',
      description: 'Websites developed during an internship in Porto, focused on delivering functional, user-facing products for real clients.',
    },
    {
      id: 'academic',
      type: 'Academic Project',
      title: 'Bridging the Gap',
      description: 'A subscription-based consulting model designed to connect independent marketing professionals with small businesses during the COVID-19 crisis.',
    },
  ]

  if (activePage === 'bookshelf') return <CaseBookShelf onBack={() => setActivePage(null)} />
  if (activePage === 'talita') return <CaseTalita onBack={() => setActivePage(null)} />
  if (activePage === 'croma') return <CaseCroma onBack={() => setActivePage(null)} />
  if (activePage === 'academic') return <CaseAcademic onBack={() => setActivePage(null)} />
  
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
          Cases
        </h2>

        <p style={{
          fontSize: '18px',
          color: 'var(--color-steel)',
          lineHeight: '1.6',
          marginBottom: '48px',
          maxWidth: '700px',
        }}>
          Projects that show how I think, from defining a problem to shipping a solution.
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

              <button
                onClick={() => setActivePage(item.id)}
                className="btn-primary"
                style={{ fontSize: '14px', padding: '10px 24px' }}
              >
                {item.id === 'croma' ? 'View Work' : 'View Case Study'}
              </button>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work