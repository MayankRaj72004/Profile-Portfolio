import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }
const fadeLeft  = { hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0, transition: { duration: 0.55 } } }
const fadeRight = { hidden: { opacity: 0, x:  30 }, show: { opacity: 1, x: 0, transition: { duration: 0.55 } } }
const stagger = { show: { transition: { staggerChildren: 0.12 } } }

export default function Contact() {
  const [sent, setSent] = useState(false)
  const btnRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    // Ripple effect
    const btn = btnRef.current
    const ripple = document.createElement('span')
    const rect = btn.getBoundingClientRect()
    ripple.className = 'ripple'
    ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px'
    ripple.style.left = (e.clientX - rect.left - rect.width / 2) + 'px'
    ripple.style.top  = (e.clientY - rect.top  - rect.height / 2) + 'px'
    btn.appendChild(ripple)
    ripple.addEventListener('animationend', () => ripple.remove())
    setSent(true)
  }

  return (
    <motion.section
      id="contact"
      className="section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={stagger}
    >
      <motion.h2 className="sec-heading" variants={fadeUp}>Contact Me</motion.h2>
      <motion.div className="sec-line" variants={fadeUp} />
      <motion.p className="sec-sub" variants={fadeUp}>Have a project in mind or just want to say hi? I'd love to hear from you.</motion.p>

      <div className="contact-grid">
        {/* Info column */}
        <motion.div className="contact-info" variants={stagger}>
          {[
            { emoji: '📧', label: 'Email',    href: 'mailto:mayankraj8791@gmail.com', text: 'mayankraj8791@gmail.com' },
            { emoji: '📱', label: 'Phone',    href: 'tel:8791152215',                  text: '+91 8791152215' },
            { emoji: '📍', label: 'Location', href: null,                              text: 'Phagwara, Punjab, India' },
          ].map(item => (
            <motion.div key={item.label} className="ci-item" variants={fadeLeft}>
              <span className="ci-emoji">{item.emoji}</span>
              <div>
                <h4>{item.label}</h4>
                {item.href
                  ? <a href={item.href}>{item.text}</a>
                  : <p>{item.text}</p>}
              </div>
            </motion.div>
          ))}
          <motion.div className="c-social" variants={fadeLeft}>
            <a href="https://github.com/MayankRaj72004"        target="_blank" rel="noreferrer" className="c-soc-link">GitHub</a>
            <a href="https://www.linkedin.com/in/mayankraj1"   target="_blank" rel="noreferrer" className="c-soc-link">LinkedIn</a>
            <a href="https://leetcode.com/u/MayankRaj8791/"    target="_blank" rel="noreferrer" className="c-soc-link">LeetCode</a>
          </motion.div>
        </motion.div>

        {/* Form column */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          variants={fadeRight}
        >
          {sent ? (
            <p className="success-msg">✅ Message sent! I'll get back to you soon.</p>
          ) : null}
          <div className="form-group">
            <label htmlFor="cf-name">Your Name</label>
            <input id="cf-name" type="text" placeholder="Mayank Raj" required />
          </div>
          <div className="form-group">
            <label htmlFor="cf-email">Email Address</label>
            <input id="cf-email" type="email" placeholder="example@email.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="cf-subject">Subject</label>
            <input id="cf-subject" type="text" placeholder="Let's collaborate!" />
          </div>
          <div className="form-group">
            <label htmlFor="cf-msg">Message</label>
            <textarea id="cf-msg" rows={5} placeholder="Hello Mayank, I'd like to…" required />
          </div>
          <button type="submit" className="form-btn" ref={btnRef}>
            {sent ? '✅ Sent!' : 'Send Message ✉️'}
          </button>
        </motion.form>
      </div>
    </motion.section>
  )
}
