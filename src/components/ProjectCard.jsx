import ArrowIcon from './ArrowIcon.jsx'
import ProjectVisual from './ProjectVisual.jsx'

export default function ProjectCard({ project }) {
  return (
    <article
      className={`project-card project-card--${project.visual}${project.featured ? ' project-card--featured' : ''}`}
      tabIndex="0"
      aria-label={`${project.number}. ${project.title}`}
    >
      <div className="project-card__copy">
        <div className="project-card__meta">
          <span>{project.number}</span>
          <span>{project.category}</span>
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <ul className="project-card__tech" aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        {project.url ? (
          <a className="project-card__link" href={project.url} target="_blank" rel="noreferrer">
            View project <ArrowIcon />
          </a>
        ) : (
          <span className="project-card__pending">
            Project URL to be added <ArrowIcon />
          </span>
        )}
      </div>
      <ProjectVisual type={project.visual} />
    </article>
  )
}
