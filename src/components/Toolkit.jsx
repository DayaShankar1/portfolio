import { skills } from '../data.js'
import SectionLabel from './SectionLabel.jsx'

export default function Toolkit() {
  return (
    <section className="toolkit section-pad" aria-labelledby="toolkit-title">
      <div className="container">
        <SectionLabel number="05 /" light>My Toolkit</SectionLabel>
        <div className="toolkit__heading">
          <h2 id="toolkit-title" data-reveal>Tools change.<br /><span>Thinking compounds.</span></h2>
          <p data-reveal>A focused toolkit for turning problems into working web experiences.</p>
        </div>

        <div className="skills-list">
          {skills.map((group, index) => (
            <div className="skill-row" key={group.label} data-reveal>
              <span className="skill-row__number">0{index + 1}</span>
              <h3>{group.label}</h3>
              <p>{group.items.join(' · ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
