import ArrowIcon from './ArrowIcon.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__topline">
        <span className="availability"><i /> Available for opportunities</span>
        <span>BIT Patna, India</span>
        <span>Portfolio / 2026</span>
      </div>

      <div className="hero__identity" aria-label="Daya Shankar">
        <span className="hero__name hero__name--first">Daya</span>
        <span className="hero__name hero__name--last">
          Shankar<sup>®</sup>
        </span>
      </div>

      <div className="hero__statement">
        <h1 id="hero-title">
          <span><b>I build</b> the web.</span>
          <span><b>I solve</b> problems.</span>
          <span><b>I ship</b> products.</span>
        </h1>
        <div className="hero__intro">
          <p>
            I&apos;m Daya Shankar, a software developer who turns ideas into
            functional web applications and digital experiences.
          </p>
          <div className="hero__actions">
            <a className="button button--lime" href="#work">
              Explore my work <ArrowIcon direction="down" />
            </a>
            <a className="text-link" href="#contact">
              Let&apos;s talk <ArrowIcon />
            </a>
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
        <span>Scroll to explore</span>
        <i><ArrowIcon direction="down" /></i>
      </a>
    </section>
  )
}
