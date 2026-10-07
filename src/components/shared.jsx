import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        io.disconnect()
      }
    }, { threshold: 0.12 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 28 }} animate={visible ? { opacity: 1, y: 0 } : undefined} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

export function SectionHead({ eyebrow, title, copy, light = false }) {
  return <div className={light ? 'section-head section-head-light' : 'section-head'}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{copy}</p></div>
}

export function StatChip({ icon: Icon, value, text }) {
  return <div className="stat-chip"><Icon size={16} /><strong>{value}</strong><span>{text}</span></div>
}

export function YouTubeEmbed({ src, title }) {
  return <div className="video-shell"><iframe src={src} title={title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
}
