import { useState } from 'react'
import { motion } from 'framer-motion'
import './VideoMessageSection.css'

const VIDEO_SRC = '/video/our-video.mp4'

export default function VideoMessageSection() {
  const [available, setAvailable] = useState(true)

  return (
    <section className="video-section" id="video">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">فيديو لحبيبة</span>
        <h2 className="section-title">رسالة مخصوصة عشانك</h2>
        <p className="section-subtitle">فيديو صغير بس جواه كلام كبير من قلبي ليكي ♥</p>
      </motion.div>

      <motion.div
        className="video-card"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
      >
        {available ? (
          <video
            className="video-player"
            src={VIDEO_SRC}
            controls
            playsInline
            preload="metadata"
            onError={() => setAvailable(false)}
          />
        ) : (
          <div className="video-placeholder">
            <span className="video-placeholder-icon">▶</span>
            <p>ضعي الفيديو داخل public/video باسم our-video.mp4</p>
          </div>
        )}
      </motion.div>
    </section>
  )
}
