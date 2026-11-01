import { useRef, useState } from 'react'
import { projects } from '../data.js'
import ArrowIcon from './ArrowIcon.jsx'
import ProjectCard from './ProjectCard.jsx'
import SectionLabel from './SectionLabel.jsx'

export default function Projects() {
  const railRef = useRef(null)
  const [activeProject, setActiveProject] = useState(0)

  const updateActiveProject = () => {
    const rail = railRef.current
    if (!rail) return

    const cards = [...rail.querySelectorAll('.project-card')]
    const nearest = cards.reduce(
      (best, card, index) => {
        const distance = Math.abs(card.offsetLeft - rail.scrollLeft)
        return distance < best.distance ? { index, distance } : best
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    )
    setActiveProject(nearest.index)
  }

  const moveRail = (direction) => {
    const rail = railRef.current
    if (!rail) return
    rail.scrollBy({ left: direction * rail.clientWidth * 0.82, behavior: 'smooth' })
  }

  return (
    <section className="work section-pad" id="work" aria-labelledby="work-title">
      <div className="container">
        <SectionLabel number="02 /" light>Selected Work</SectionLabel>
        <div className="work__heading">
          <h2 id="work-title" data-reveal>Less talk.<br /><span>More building.</span></h2>
          <p data-reveal>
            Selected applications, interfaces, and experiments. The first three
            projects represent my primary full-stack, hackathon, and API work.
          </p>
        </div>

        <div className="rail-controls" data-reveal>
          <span>
            <b>{String(activeProject + 1).padStart(2, '0')}</b> / {String(projects.length).padStart(2, '0')}
          </span>
          <div>
            <button
              type="button"
              onClick={() => moveRail(-1)}
              disabled={activeProject === 0}
              aria-label="Previous project"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={() => moveRail(1)}
              disabled={activeProject === projects.length - 1}
              aria-label="Next project"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>
      </div>

      <div
        className="project-rail"
        ref={railRef}
        onScroll={updateActiveProject}
        aria-label="Selected project showcase"
      >
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
        <div className="project-rail__end" aria-hidden="true">
          <span>More to come</span>
          <i>DS®</i>
        </div>
      </div>
    </section>
  )
}
