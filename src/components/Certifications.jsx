import { motion } from 'framer-motion'
import { certifications } from '../data/portfolioData'

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }
const stagger = { show: { transition: { staggerChildren: 0.12 } } }

export default function Certifications() {
  return (
    <motion.section
      id="certifications"
      className="section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={stagger}
    >
      <motion.h2 className="sec-heading" variants={fadeUp}>Certifications</motion.h2>
      <motion.div className="sec-line" variants={fadeUp} />
      <motion.p className="sec-sub" variants={fadeUp}>Click any card to view the certificate ↗</motion.p>

      <motion.div className="cert-grid" variants={stagger}>
        {certifications.map(c => (
          <motion.a
            key={c.name}
            href={c.link}
            target="_blank"
            rel="noreferrer"
            className="cert-card"
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          >
            <div className="cert-img">
              <img src={c.image} alt={c.name} />
              <div className="cert-overlay">
                <span className="cert-badge">🔗 View Certificate</span>
              </div>
            </div>
            <div className="cert-info">
              <h4>{c.name}</h4>
              <p className="cert-issuer">{c.issuer}</p>
              <p className="cert-date">{c.date}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  )
}
