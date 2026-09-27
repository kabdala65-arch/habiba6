import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './CounterSection.css'

const BIRTHDAY = new Date('2026-07-27T00:00:00')

function getCountdown() {
  const diffMs = Math.max(0, BIRTHDAY - new Date())
  const totalSeconds = Math.floor(diffMs / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  return { days, hours, minutes, seconds, isBirthday: diffMs === 0 }
}

export default function CounterSection() {
  const [countdown, setCountdown] = useState(getCountdown())

  useEffect(() => {
    const interval = setInterval(() => setCountdown(getCountdown()), 1000)
    return () => clearInterval(interval)
  }, [])

  const units = [
    { label: 'يوم', value: countdown.days },
    { label: 'ساعة', value: countdown.hours },
    { label: 'دقيقة', value: countdown.minutes },
    { label: 'ثانية', value: countdown.seconds },
  ]

  return (
    <section className="counter-section">
      <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <span className="section-tag">27 / 7 / 2026</span>
        <h2 className="section-title">العد التنازلي لعيد ميلاد حبيبة</h2>
        <p className="section-subtitle">كل ثانية بتقرّبنا من يوم ميلاد أجمل واحدة في الدنيا ♥</p>
      </motion.div>

      {countdown.isBirthday && <p className="section-subtitle">كل سنة وإنتي طيبة يا حبيبة.. يومك أجمل يوم ♥</p>}
      <div className="counter-grid">
        {units.map((unit, i) => (
          <motion.div key={unit.label} className="counter-card" initial={{ opacity: 0, y: 30, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: i * 0.1 }}>
            <span className="counter-value">{unit.value}</span>
            <span className="counter-label">{unit.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
