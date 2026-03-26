import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import CodingProfiles from './components/CodingProfiles'
import Contact from './components/Contact'
import SolarSystem from './components/SolarSystem'

export default function App() {
  return (
    <>
      {/* Full-screen solar system in the absolute background */}
      <SolarSystem />

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
