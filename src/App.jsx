import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import CodingProfiles from './components/CodingProfiles'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      {/* Floating background orbs */}
      <div className="bg-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <div className="app-container">
        {/* LEFT: Sticky Sidebar */}
        <Sidebar />

        {/* RIGHT: Scrollable sections */}
        <div className="main-content">
          <Navigation />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Certifications />
          <CodingProfiles />
          <Contact />
        </div>
      </div>
    </>
  )
}
