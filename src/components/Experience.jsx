import SectionLabel from './SectionLabel.jsx'

const highlights = [
  'React-based interface development',
  'Database and authentication integration with Supabase',
  'Backend integration using Express.js and REST APIs',
  'Medical examination, employee directory, and report management workflows',
]

export default function Experience() {
  return (
    <section className="experience section-pad" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionLabel number="03 /">Experience</SectionLabel>

        <div className="experience__header">
          <h2 id="experience-title" data-reveal>
            Practical work.<br /><span>Real workflows.</span>
          </h2>
          <span className="experience__index" aria-hidden="true">03</span>
        </div>

        <article className="experience-entry" data-reveal>
          <div className="experience-entry__when">
            <span>Internship</span>
            <strong>[ Add internship dates ]</strong>
          </div>
          <div className="experience-entry__role">
            <span>Role</span>
            <h3>Web Development Intern</h3>
          </div>
          <div className="experience-entry__details">
            <p className="experience-entry__org">
              Central Coalfields Limited (CCL)<br />Gandhinagar Hospital
            </p>
            <p>
              Worked on an Employee Health Monitoring Portal designed to streamline
              employee medical records and hospital workflows.
            </p>
            <ul>
              {highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}
