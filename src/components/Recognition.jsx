import { achievements } from '../data.js'
import ArrowIcon from './ArrowIcon.jsx'
import SectionLabel from './SectionLabel.jsx'

export default function Recognition() {
  return (
    <section className="recognition section-pad" aria-labelledby="recognition-title">
      <div className="container">
        <SectionLabel number="04 /">Recognition</SectionLabel>
        <div className="recognition__heading">
          <h2 id="recognition-title" data-reveal>Milestones,<br />not finish lines.</h2>
          <p data-reveal>Moments that reflect teamwork, curiosity, and the drive to keep building.</p>
        </div>

        <div className="recognition__list">
          {achievements.map((achievement) => (
            <article className="recognition-row" key={achievement.number} data-reveal>
              <span className="recognition-row__number">{achievement.number}</span>
              <div>
                <h3>{achievement.title}</h3>
                <strong>{achievement.subtitle}</strong>
              </div>
              <p>{achievement.detail}</p>
              <i><ArrowIcon /></i>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
