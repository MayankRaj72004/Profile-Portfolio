import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }
const stagger = { show: { transition: { staggerChildren: 0.15 } } }

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={stagger}
    >
      <motion.h2 className="sec-heading" variants={fadeUp}>Projects</motion.h2>
      <motion.div className="sec-line" variants={fadeUp} />

      <motion.div className="proj-grid" variants={stagger}>
        {projects.map(p => (
          <motion.div key={p.title} className="proj-card" variants={fadeUp}>
            <img src={p.image} alt={p.title} />
            <div className="proj-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div>{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
