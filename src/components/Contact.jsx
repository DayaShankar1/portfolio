import { profileLinks } from '../data.js'
import ArrowIcon from './ArrowIcon.jsx'
import SectionLabel from './SectionLabel.jsx'

export default function Contact() {
  return (
    <section className="contact section-pad" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionLabel number="06 /" light>Let&apos;s Connect</SectionLabel>

        <div className="contact__heading">
          <h2 id="contact-title" data-reveal>
            Have an idea?<br /><span>Let&apos;s build it.</span>
          </h2>
          <p data-reveal>
            I&apos;m open to software development internships, collaborative projects,
            hackathons, and opportunities to create useful digital products.
          </p>
        </div>

        <a
          className="contact__email"
          href="mailto:dshankar20041@gmail.com?subject=Let's%20build%20something"
          data-reveal
        >
          <span>Say hello</span>
          <strong>dshankar20041@gmail.com</strong>
          <i><ArrowIcon /></i>
        </a>

        <div className="contact__links" data-reveal>
          {profileLinks.map((link) =>
            link.url ? (
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                download={link.label === 'Resume' ? true : undefined}
                key={link.label}
              >
                <span>{link.label}</span>
                <ArrowIcon />
              </a>
            ) : (
              <span className="contact__placeholder" key={link.label}>
                <b>{link.label}</b>
                <small>{link.placeholder}</small>
              </span>
            ),
          )}
        </div>

        <footer className="site-footer">
          <span>Daya Shankar® / 2026</span>
          <span>Designed and built with intent</span>
          <a href="#top">Back to top <ArrowIcon direction="up" /></a>
        </footer>
      </div>
    </section>
  )
}
