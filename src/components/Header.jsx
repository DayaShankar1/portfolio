import { useEffect, useState } from 'react'
import ArrowIcon from './ArrowIcon.jsx'

const navItems = [
  { label: 'About', target: 'about' },
  { label: 'Work', target: 'work' },
  { label: 'Experience', target: 'experience' },
  { label: 'Contact', target: 'contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 40)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.target))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
      <a className="site-header__brand" href="#top" aria-label="Daya Shankar, home">
        DS<span>®</span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            className={activeSection === item.target ? 'is-active' : ''}
            href={`#${item.target}`}
            key={item.target}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-contact" href="mailto:dshankar20041@gmail.com">
        Start a conversation <ArrowIcon />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <div
        className={`mobile-menu${menuOpen ? ' is-open' : ''}`}
        id="mobile-menu"
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu__meta">
          <span>Portfolio / 2026</span>
          <span>BIT Patna, India</span>
        </div>
        <nav aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <a
              href={`#${item.target}`}
              key={item.target}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span>0{index + 1}</span>
              {item.label}
              <ArrowIcon />
            </a>
          ))}
        </nav>
        <a
          className="mobile-menu__email"
          href="mailto:dshankar20041@gmail.com"
          tabIndex={menuOpen ? 0 : -1}
        >
          dshankar20041@gmail.com
        </a>
      </div>
    </header>
  )
}
