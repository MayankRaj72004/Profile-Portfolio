import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}
const stagger = { show: { transition: { staggerChildren: 0.12 } } }

/* ── inline SVG icon components ────────────────────────────── */
function IconCode() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function IconBrain() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.44-3.16Z"/>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.44-3.16Z"/>
    </svg>
  )
}

function IconRobot() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2"/>
      <circle cx="12" cy="5" r="2"/>
      <path d="M12 7v4"/>
      <line x1="8" y1="16" x2="8" y2="16"/>
      <line x1="16" y1="16" x2="16" y2="16"/>
      <path d="M9 11V9a3 3 0 0 1 6 0v2"/>
    </svg>
  )
}

/* ── Stat chip SVG icons ────────────────────────────────────── */
function IconGrad() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  )
}
function IconCal() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )
}
function IconTarget() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  )
}
function IconPin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

const CARDS = [
  { Icon: IconCode,  title: 'Web Development', desc: 'Building responsive, modern web apps with React, Node.js, and Express.' },
  { Icon: IconBrain, title: 'Problem Solving',  desc: 'Solving DSA challenges on LeetCode and GFG to sharpen algorithmic thinking.' },
  { Icon: IconRobot, title: 'Machine Learning', desc: 'Building ML/DL models using Python, PyTorch, Pandas, and Scikit-Learn.' },
]

const CHIPS = [
  { Icon: IconGrad,   label: 'University', val: 'LPU, Punjab' },
  { Icon: IconCal,    label: 'Batch',      val: '2023 – 2027' },
  { Icon: IconTarget, label: 'Focus',      val: 'Full Stack Dev' },
  { Icon: IconPin,    label: 'Location',   val: 'Phagwara, Punjab' },
]

export default function About() {
  return (
    <motion.section
      id="about"
      className="section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <motion.h2 className="sec-heading" variants={fadeUp}>About Me</motion.h2>
      <motion.div className="sec-line" variants={fadeUp} />

      <motion.p className="about-text" variants={fadeUp}>
        I am a creative and passionate <strong>Software Developer</strong> with a keen eye for detail
        and a love for building beautiful, functional, and user-friendly web experiences. My journey is
        driven by turning complex problems into simple, elegant solutions. I specialize in modern web
        technologies — from crafting responsive frontends with <strong>React</strong> to building robust
        backends with <strong>Node.js</strong> and <strong>Express</strong>. I am also experienced with
        databases like <strong>MySQL</strong> and <strong>MongoDB</strong>, and apply skills in
        <strong> Machine Learning</strong> using Python, PyTorch, and Scikit-Learn. I regularly practice
        Data Structures &amp; Algorithms to sharpen my problem-solving mindset.
      </motion.p>

      {/* Highlight cards */}
      <motion.div className="highlight-cards" variants={stagger}>
        {CARDS.map(({ Icon, title, desc }) => (
          <motion.div key={title} className="hi-card" variants={fadeUp}>
            <div className="hi-icon"><Icon /></div>
            <h4>{title}</h4>
            <p>{desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Stat chips */}
      <motion.div className="stat-chips" variants={stagger}>
        {CHIPS.map(({ Icon, label, val }) => (
          <motion.div key={label} className="chip" variants={fadeUp}>
            <span className="chip-icon"><Icon /></span>
            <span className="chip-label">{label}</span>
            <span className="chip-val">{val}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
