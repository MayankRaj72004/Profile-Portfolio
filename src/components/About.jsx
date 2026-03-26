import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}
const stagger = { show: { transition: { staggerChildren: 0.12 } } }

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
        {[
          { icon: '💻', title: 'Web Development', desc: 'Building responsive, modern web apps with React, Node.js, and Express.' },
          { icon: '🧠', title: 'Problem Solving',  desc: 'Solving DSA challenges on LeetCode and GFG to sharpen algorithmic thinking.' },
          { icon: '🤖', title: 'Machine Learning', desc: 'Building ML/DL models using Python, PyTorch, Pandas, and Scikit-Learn.' },
        ].map(c => (
          <motion.div key={c.title} className="hi-card" variants={fadeUp}>
            <div className="hi-icon">{c.icon}</div>
            <h4>{c.title}</h4>
            <p>{c.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Stat chips */}
      <motion.div className="stat-chips" variants={stagger}>
        {[
          ['🎓 University', 'LPU, Punjab'],
          ['📅 Batch',      '2023 – 2027'],
          ['🎯 Focus',      'Full Stack Dev'],
          ['📍 Location',   'Phagwara, Punjab'],
        ].map(([label, val]) => (
          <motion.div key={label} className="chip" variants={fadeUp}>
            <span className="chip-label">{label}</span>
            <span className="chip-val">{val}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
