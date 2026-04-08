function About() {
  return (
    <section id="about" style={{
      backgroundColor: 'var(--color-sand)',
      padding: 'var(--section-padding)',
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
      }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: '500',
          color: 'var(--color-steel)',
          marginBottom: '40px',
        }}>
          About Me
        </h2>

        <p style={{
          fontSize: '18px',
          lineHeight: '1.6',
          color: 'var(--color-steel)',
          marginBottom: '24px',
        }}>
          I spent over a decade working with words: content production, editorial
          revision, communication strategy. I was always the person asking:
          "who is going to read this? What does this person need to feel?"
        </p>

        <p style={{
          fontSize: '18px',
          lineHeight: '1.6',
          color: 'var(--color-steel)',
          marginBottom: '24px',
        }}>
          That question hasn't changed. What changed was the context.
        </p>

        <p style={{
          fontSize: '18px',
          lineHeight: '1.6',
          color: 'var(--color-steel)',
          marginBottom: '24px',
        }}>
          I moved countries, changed career paths, studied information systems 
          programming, learned to code. And realised that what interests me 
          most is not writing the code or writing the text. It's understanding 
          the problem, advocating for the user, and making sure the product makes 
          sense for the people who use it.
        </p>

        <p style={{
          fontSize: '18px',
          lineHeight: '1.6',
          color: 'var(--color-steel)',
        }}>
          If you work with product and want to exchange ideas, reach out.
        </p>
      </div>
    </section>
  )
}

export default About