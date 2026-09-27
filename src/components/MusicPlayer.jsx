import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './MusicPlayer.css'

const SONG_SRC = '/music/our-song.mp3'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [available, setAvailable] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateProgress = () => {
      if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100)
    }
    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    const onEnded = () => setIsPlaying(false)
    const onError = () => {
      setAvailable(false)
      setIsPlaying(false)
    }

    audio.addEventListener('timeupdate', updateProgress)
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('ended', onEnded)
    audio.addEventListener('error', onError)

    // This runs immediately after the password form unlocks the page.
    audio.play().catch(() => setIsPlaying(false))

    return () => {
      audio.removeEventListener('timeupdate', updateProgress)
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('ended', onEnded)
      audio.removeEventListener('error', onError)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio || !available) return
    if (audio.paused) audio.play().catch(() => setAvailable(false))
    else audio.pause()
  }

  return (
    <motion.div
      className="music-player"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <audio ref={audioRef} src={SONG_SRC} loop preload="auto" />
      <button className={`play-disc ${isPlaying ? 'playing' : ''}`} onClick={togglePlay} aria-label={isPlaying ? 'إيقاف الأغنية' : 'تشغيل الأغنية'}>
        {isPlaying ? '❚❚' : '▶'}
      </button>
      <div className="player-info">
        <div className="player-top">
          <span className="song-title">أغنية حبيبة <span className="song-heart">♥</span></span>
          <span className="player-status">
            {!available ? 'ضيفي ملف الأغنية' : isPlaying ? 'بتشتغل دلوقتي' : 'اضغطي للتشغيل'}
          </span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </motion.div>
  )
}
