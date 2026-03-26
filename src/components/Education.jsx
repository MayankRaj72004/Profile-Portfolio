import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { show: { transition: { staggerChildren: 0.2 } } }

const edu = [
  {
    year: '2023 – 2027',
    degree: 'Bachelor of Technology in CSE',
    college: 'Lovely Professional University, Jalandhar, Punjab',
    desc: 'Focused on software development, web technologies and learning Algorithms, DBMS, Computer Networks and Operating Systems.',
  },
  {
    year: '2021 – 2022',
    degree: 'Higher Secondary Education',
    college: 'Zealot Public School, Budaun, UP',
    desc: '',
  },
]

export default function Education() {
  return (
    <motion.section
      id="education"
      className="section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <motion.h2 className="sec-heading" variants={fadeUp}>Education</motion.h2>
      <motion.div className="sec-line" variants={fadeUp} />

      <div className="edu-timeline">
        <div className="edu-line" />
        {edu.map(e => (
          <motion.div key={e.degree} className="edu-entry" variants={fadeUp}>
            <div className="edu-dot" />
            <p className="edu-year">{e.year}</p>
            <h3 className="edu-deg">{e.degree}</h3>
            <p className="edu-col">{e.college}</p>
            {e.desc && <p className="edu-desc">{e.desc}</p>}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
