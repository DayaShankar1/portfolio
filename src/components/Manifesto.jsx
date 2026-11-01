export default function Manifesto() {
  return (
    <section className="manifesto" aria-labelledby="manifesto-title">
      <div className="manifesto__ticker" aria-hidden="true">
        <span>Make it useful / Make it clear / Make it work /&nbsp;</span>
        <span>Make it useful / Make it clear / Make it work /&nbsp;</span>
      </div>
      <div className="container manifesto__inner">
        <span className="manifesto__mark" aria-hidden="true">“</span>
        <h2 id="manifesto-title" data-reveal>
          I don&apos;t just want to write code.<br />
          <span>I want to build things that matter.</span>
        </h2>
        <p data-reveal>
          From experimenting with web interfaces to collaborating on hackathon
          projects, I enjoy the process of learning, building, and making ideas work.
        </p>
      </div>
    </section>
  )
}
