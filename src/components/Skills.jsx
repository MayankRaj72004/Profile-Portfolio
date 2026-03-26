import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }
const stagger = { show: { transition: { staggerChildren: 0.07 } } }

function SkillCard({ name, icon, invert, amber }) {
  return (
    <motion.div
      className="skill-item"
      variants={fadeUp}
      whileHover={{ scale: 1.08, rotateY: 6, rotateX: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <img
        src={icon}
        alt={name}
        className={invert ? 'inv' : amber ? 'amb' : ''}
      />
      <span>{name}</span>
    </motion.div>
  )
}

function Category({ label, items }) {
  return (
    <>
      <motion.p className="cat-label" variants={fadeUp}>{label}</motion.p>
      <motion.div className="skill-grid" variants={stagger}>
        {items.map(s => <SkillCard key={s.name} {...s} />)}
      </motion.div>
    </>
  )
}

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={stagger}
    >
      <motion.h2 className="sec-heading" variants={fadeUp}>Skills</motion.h2>
      <motion.div className="sec-line" variants={fadeUp} />
      <Category label="Programming & Markup Languages" items={skills.languages} />
      <Category label="Frameworks & Libraries"         items={skills.frameworks} />
      <Category label="Tools & Platforms"              items={skills.tools} />
    </motion.section>
  )
}
