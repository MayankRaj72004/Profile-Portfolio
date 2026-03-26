import { useState, useEffect } from 'react'

const NAV = [
  { label: 'About',          id: 'about' },
  { label: 'Skills',         id: 'skills' },
  { label: 'Education',      id: 'education' },
  { label: 'Projects',       id: 'projects' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact',        id: 'contact' },
]

export default function Navigation() {
  const [active, setActive] = useState('about')

  useEffect(() => {
    const observers = []
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <div className="nav-wrap">
      <nav className="nav-links">
        {NAV.map(({ label, id }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`nav-a ${active === id ? 'active' : ''}`}
            onClick={() => setActive(id)}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  )
}
