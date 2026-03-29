import { useEffect } from 'react' 

function CaseBookShelf({ onBack }) {

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
          My Book Shelf — Reading Habit Tracker
        </h1>

        <a 
            href="https://github.com/alinealvim/ProjectMyBookShelf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ marginBottom: '32px', display: 'inline-block' }}
          >
            View Code on GitHub
        </a>

        <img src='images/bookshelf/01-app-screenshot.png' alt="App screenshot" style={imgStyle()} />

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '16px' }}>Overview</h2>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          My Book Shelf is a web application designed to support habit formation by helping
          users build and maintain a consistent reading routine.
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '48px' }}>
          Developed as part of a Technical Specialist programme in Information
          Systems Programming, with a focus on combining product thinking and technical execution.
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '16px' }}>The challenge</h2>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          Less than 50% of the Portuguese population reads at least one book per year.
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '48px' }}>
          The challenge was to design a product that could help users who want to read more
          but struggle with consistency — making progress visible, reducing friction,
          and increasing motivation over time.
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '24px' }}>Approach</h2>

        <h3 style={{ fontSize: '18px', fontWeight: '500', color: 'var(--color-terracotta)', marginBottom: '12px' }}>Problem definition & product framing</h3>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          The core problem identified was not lack of interest in reading – but lack of continuity.
          Based on this, the product was framed around three key drivers:
        </p>
        <ul style={{ fontSize: '17px', lineHeight: '2', color: 'var(--color-steel)', marginBottom: '32px', paddingLeft: '24px' }}>
          <li>visibility of progress</li>
          <li>sense of achievement</li>
          <li>ease of tracking</li>
        </ul>

        <h3 style={{ fontSize: '18px', fontWeight: '500', color: 'var(--color-terracotta)', marginBottom: '12px' }}>Product planning</h3>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          Before development, I defined the product backlog with prioritised user stories,
          focusing on delivering core value early. The project was structured using Scrum,
          organised into five two-week sprints, with planning that included:
        </p>
        <ul style={{ fontSize: '17px', lineHeight: '2', color: 'var(--color-steel)', marginBottom: '32px', paddingLeft: '24px' }}>
          <li>effort estimation</li>
          <li>sprint scope definition</li>
          <li>risk mapping (timeline, technical complexity, continuity)</li>
        </ul>

        <img src='images/bookshelf/02-trello.jpg' alt="Trello board" style={imgStyle()} />

        <h3 style={{ fontSize: '18px', fontWeight: '500', color: 'var(--color-terracotta)', marginBottom: '12px' }}>Solution design</h3>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '32px' }}>
          To ensure alignment between functionality and user experience, I designed the system
          architecture in three layers (presentation, business logic, data) and created a Figma
          prototype to validate flows before development.
        </p>

         <img src='images/bookshelf/03-figma.jpg' alt="Figma prototype" style={imgStyle()} />
 
        <h3 style={{ fontSize: '18px', fontWeight: '500', color: 'var(--color-terracotta)', marginBottom: '12px' }}>
          Key product decisions
        </h3>
        <ul style={{ fontSize: '17px', lineHeight: '2', color: 'var(--color-steel)', marginBottom: '32px', paddingLeft: '24px' }}>
          <li>Prioritised simplicity over feature expansion to reduce friction and support habit formation</li>
          <li>Focused on individual tracking instead of social features to avoid distraction from the core goal</li>
          <li>Delayed advanced features (e.g., recommendations) to maintain a clear MVP scope</li>
        </ul>


        <h3 style={{ fontSize: '18px', fontWeight: '500', color: 'var(--color-terracotta)', marginBottom: '12px' }}>Development</h3>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          The application was built as a full-stack solution using C#, Blazor, and SQL Server.
          Core features include:
        </p>
        <ul style={{ fontSize: '17px', lineHeight: '2', color: 'var(--color-steel)', marginBottom: '48px', paddingLeft: '24px' }}>
          <li>book tracking with status management (To Read, Reading, Read)</li>
          <li>reading progress tracking (pages and dates)</li>
          <li>data visualization through charts</li>
          <li>admin panel for content management</li>
        </ul>

        <img src='images/bookshelf/04-app-list.png' alt="App running" style={imgStyle()} />
        <img src='images/bookshelf/05-app-charts.png' alt="Progress charts" style={imgStyle()} />

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '16px' }}>Outcome</h2>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          The result is a functional product that enables users to track reading progress
          and visualize their habits over time, supporting the goal of reinforcing consistency.
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          The structure prioritises clarity and ease of use, supporting the initial goal
          of reducing friction and reinforcing consistency.
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '48px' }}>
          The project received a final grade of 19/20, with positive feedback highlighting 
          the clarity of the problem framing and overall product approach.
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '16px' }}>Key learning</h2>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          This project reinforced the importance of validating technical decisions early.
          The learning curve with Blazor impacted initial timelines, highlighting the need
          to account for technical uncertainty during planning.
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '48px' }}>
          It also showed the value of incorporating automated testing and user feedback
          earlier in the process to improve product quality and iteration speed.
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '16px' }}>
          What I would validate next
        </h2>

        <ul style={{ fontSize: '17px', lineHeight: '2', color: 'var(--color-steel)', marginBottom: '48px', paddingLeft: '24px' }}>
          <li>Whether progress visualization effectively increases user consistency over time</li>
          <li>Which features users engage with most (tracking vs. charts)</li>
          <li>Whether reminders or notifications would improve habit continuity</li>
        </ul>

        <p style={{ fontSize: '14px', color: 'var(--color-sage)', marginBottom: '48px' }}>
          Stack: C#, Blazor Web App, SQL Server, Entity Framework Core, Bootstrap, Figma, Trello, GitHub
        </p>

        <button onClick={onBack} className="btn-secondary" style={{ marginTop: '16px' }}>
          ← Back to Cases
        </button>

      </div>
    </section>
  )
}

export default CaseBookShelf