import { useState, useEffect } from 'react'

const ROLES = ['Software Developer', 'Full Stack Engineer', 'Problem Solver', 'ML Enthusiast']

function useTypewriter(texts, speed = 90, pause = 1800) {
  const [display, setDisplay] = useState('')
  const [idx, setIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const cur = texts[idx]
    let timer
    if (!deleting && charIdx < cur.length) {
      timer = setTimeout(() => {
        setDisplay(cur.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
      }, speed)
    } else if (!deleting && charIdx === cur.length) {
      timer = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timer = setTimeout(() => {
        setDisplay(cur.slice(0, charIdx - 1))
        setCharIdx(c => c - 1)
      }, speed / 2)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setIdx(i => (i + 1) % texts.length)
    }
    return () => clearTimeout(timer)
  }, [charIdx, deleting, idx, texts, speed, pause])

  return display
}

export default function Sidebar() {
  const role = useTypewriter(ROLES)

  return (
    <aside className="sidebar">
      <div className="profile">
        <div className="profile-ring">
          <img src="/pic.jpeg" alt="Mayank Raj" />
        </div>
        <p className="profile-name">Mayank Raj</p>
        <div className="role-badge">
          <span>{role}</span>
          <span className="cursor" />
        </div>
      </div>

      {/* Contact info */}
      <div className="sidebar-section">
        <div className="s-item">
          <p className="s-label">Email</p>
          <a href="mailto:mayankraj8791@gmail.com" className="s-value">mayankraj8791@gmail.com</a>
        </div>
        <div className="s-item">
          <p className="s-label">Phone</p>
          <a href="tel:8791152215" className="s-value">+91 8791152215</a>
        </div>
        <div className="s-item">
          <p className="s-label">Location</p>
          <p className="s-value">Phagwara, Punjab</p>
        </div>
      </div>

      {/* CV Button */}
      <a
        href="https://drive.google.com/file/d/1WbtK4NysoZOWAAH2X6U2HUsZQfTMDQxS/view?usp=drive_link"
        target="_blank"
        rel="noreferrer"
        className="cv-btn"
      >
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
        </svg>
        View / Download CV
      </a>
    </aside>
  )
}
