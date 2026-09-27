import { motion } from 'framer-motion'
import './MeaningSection.css'

const letters = [
  { l: 'ح', text: 'حياتي من غيرك ناقصة، ومعاكي كل حاجة ليها معنى' },
  { l: 'ب', text: 'بهجة قلبي، وأجمل سبب بيخليني أبتسم' },
  { l: 'ي', text: 'يا حبيبتي، يا أقرب وأغلى إنسانة لقلبي' },
  { l: 'ب', text: 'بختي الحلو ونعمتي اللي بحمد ربنا عليها كل يوم' },
  { l: 'ة', text: 'حكاية جميلة نفسي تفضل مكملة معايا العمر كله' },
]

export default function MeaningSection() {
  return (
    <section className="meaning-section">
      <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <span className="section-tag">معنى حبيبة</span>
        <h2 className="section-title">اسمك مش مجرد اسم</h2>
        <p className="section-subtitle">كل حرف في اسم حبيبة بيحكي حتة من اللي جوا قلبي ليكي ♥</p>
      </motion.div>
      <div className="meaning-grid">
        {letters.map((item, i) => (
          <motion.div key={i} className="meaning-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: i * 0.12 }}>
            <span className="meaning-letter">{item.l}</span>
            <span className="meaning-text">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
