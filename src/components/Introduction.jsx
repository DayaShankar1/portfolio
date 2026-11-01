import SectionLabel from './SectionLabel.jsx'

export default function Introduction() {
  return (
    <section className="developer section-pad" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionLabel number="01 /">The Developer</SectionLabel>

        <div className="developer__layout">
          <h2 id="about-title" data-reveal>
            Curious by nature.<br />
            <span>Builder by choice.</span>
          </h2>

          <div className="developer__copy" data-reveal>
            <p className="developer__lead">
              Engineering curiosity into useful digital experiences.
            </p>
            <p>
              I&apos;m pursuing a B.Tech in Electronics and Communication Engineering
              at Birla Institute of Technology, Patna. My focus is software
              development, modern web technologies, and problem-solving. I enjoy
              transforming ideas into useful products, collaborating with teams,
              and continuously improving my engineering skills.
            </p>
          </div>

          <div className="developer__mark" data-reveal aria-hidden="true">
            <span>&lt;/&gt;</span>
            <i>Think · Make · Refine · Repeat ·</i>
          </div>
        </div>

        <div className="developer__footer" data-reveal>
          <span>Based in Patna</span>
          <span>Building for the web</span>
          <span>Learning in public</span>
        </div>
      </div>
    </section>
  )
}
