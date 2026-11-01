import Contact from './components/Contact.jsx'
import Experience from './components/Experience.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Introduction from './components/Introduction.jsx'
import Manifesto from './components/Manifesto.jsx'
import Projects from './components/Projects.jsx'
import Recognition from './components/Recognition.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Toolkit from './components/Toolkit.jsx'
import { useReveal } from './hooks/useReveal.js'

export default function App() {
  useReveal()

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <ScrollProgress />
      <Header />
      <main id="main-content">
        <Hero />
        <Introduction />
        <Projects />
        <Experience />
        <Recognition />
        <Toolkit />
        <Manifesto />
        <Contact />
      </main>
    </>
  )
}
