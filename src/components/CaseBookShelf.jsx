function CaseBookShelf({ onBack }) {
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
          My Book Shelf — Reading Habit Tracker
        </h1>

        <div style={{ ...imgPlaceholder, height: '360px', marginBottom: '60px' }}>
          Image — App screenshot
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '16px' }}>Overview</h2>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '48px' }}>
          My Book Shelf is a web application designed to help users build and maintain
          a reading habit. The project was developed as the final assignment of a
          Technical Specialist programme in Information Systems Programming at CINEL, Lisbon.
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '16px' }}>The challenge</h2>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '48px' }}>
          Less than 50% of the Portuguese population reads at least one book per year.
          The goal was to design and build a tool that would help people who want to
          develop or resume a reading habit — making progress visible, trackable,
          and motivating.
        </p>

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '16px' }}>The process</h2>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '32px' }}>
          The project followed Scrum methodology, organised into 5 two-week sprints.
          Before writing a single line of code, I defined the product backlog with
          prioritised user stories, planned the sprint structure, estimated resources,
          and mapped a risk matrix covering timeline, technical quality, and continuity risks.
        </p>

        <div style={{ ...imgPlaceholder, height: '280px', marginBottom: '32px' }}>
          Image — Trello board with sprints
        </div>

        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '32px' }}>
          I designed the full system architecture in three layers — presentation,
          business logic, and data — and built a Figma prototype to validate the
          user experience before development.
        </p>

        <div style={{ ...imgPlaceholder, height: '280px', marginBottom: '48px' }}>
          Image — Figma prototype
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '16px' }}>What was built</h2>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '24px' }}>
          A full-stack web application in C# and Blazor, with SQL Server as the database.
        </p>
        <ul style={{ fontSize: '17px', lineHeight: '2', color: 'var(--color-steel)', marginBottom: '48px', paddingLeft: '24px' }}>
          <li>Book list management with drag-and-drop status columns (To Read, Reading, Read)</li>
          <li>Reading progress tracking with page count and dates</li>
          <li>Data visualisation with customisable charts</li>
          <li>Admin panel for user and book management</li>
        </ul>

        <div style={{ ...imgPlaceholder, height: '280px', marginBottom: '48px' }}>
          Image — App running — reading list
        </div>

        <div style={{ ...imgPlaceholder, height: '280px', marginBottom: '48px' }}>
          Image — App running — progress charts
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: '500', color: 'var(--color-steel)', marginBottom: '16px' }}>{"What I'd do differently"}</h2>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          The Blazor learning curve affected the initial timeline. In future projects
          I would allocate more preparation time for new frameworks.
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '16px' }}>
          The absence of automated testing meant significant manual validation effort.
          Introducing automated tests from the start would improve both speed and consistency.
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--color-steel)', marginBottom: '48px' }}>
          The interface would also benefit from more responsiveness testing on mobile,
          and from real user feedback sessions to validate design decisions.
        </p>

        <p style={{ fontSize: '14px', color: 'var(--color-sage)', marginBottom: '48px' }}>
          Stack: C#, Blazor Web App, SQL Server, Entity Framework Core, Bootstrap, Figma, Trello, GitHub
        </p>

        <button onClick={onBack} className="btn-secondary" style={{ marginTop: '16px' }}>
          ← Back to Work
        </button>

      </div>
    </section>
  )
}

export default CaseBookShelf