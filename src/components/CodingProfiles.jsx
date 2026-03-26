import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }
const stagger = { show: { transition: { staggerChildren: 0.15 } } }

const platforms = [
  {
    cls: 'lc',
    href: 'https://leetcode.com/u/MayankRaj8791/',
    icon: 'https://img.icons8.com/?size=160&id=PZknXs9seWCp&format=png',
    name: 'LeetCode',
    handle: '@MayankRaj8791',
    tag: 'Problem Solving · DSA',
  },
  {
    cls: 'gh',
    href: 'https://github.com/MayankRaj72004',
    icon: 'https://img.icons8.com/?size=160&id=bVGqATNwfhYq&format=png',
    name: 'GitHub',
    handle: '@MayankRaj72004',
    tag: 'Projects · Open Source',
  },
  {
    cls: 'gfg',
    href: 'https://www.geeksforgeeks.org/profile/dishuyadzbeb?tab=activity',
    icon: 'https://img.icons8.com/?size=160&id=AbQBhN9v62Ob&format=png',
    name: 'GeeksForGeeks',
    handle: '@dishuyadzbeb',
    tag: 'Practice · Articles',
  },
]

export default function CodingProfiles() {
  return (
    <motion.section
      id="coding-profiles"
      className="section coding-sep"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <motion.h2 className="sec-heading" variants={fadeUp}>Coding Profiles</motion.h2>
      <motion.div className="sec-line" variants={fadeUp} />
      <motion.p className="sec-sub" variants={fadeUp}>Find me on competitive programming platforms</motion.p>

      <motion.div className="plat-cards" variants={stagger}>
        {platforms.map(p => (
          <motion.a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className={`plat-card ${p.cls}`}
            variants={fadeUp}
            whileHover={{ x: 8 }}
            transition={{ type: 'spring', stiffness: 280, damping: 18 }}
          >
            <img src={p.icon} alt={p.name} className="plat-icon" />
            <div className="plat-info">
              <h4>{p.name}</h4>
              <p>{p.handle}</p>
              <span className="plat-tag">{p.tag}</span>
            </div>
            <span className="plat-arrow">→</span>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  )
}
