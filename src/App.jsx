import React, { useEffect, useMemo, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Gamepad2 } from 'lucide-react'
import { navSections } from './data'
import Header from './components/Header'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Crisis from './components/Crisis'
import Chaebol from './components/Chaebol'
import Government from './components/Government'
import Debate from './components/Debate'
import MythFact from './components/MythFact'
import TradeOff from './components/TradeOff'
import Conclusion from './components/Conclusion'
import GameCTA from './components/GameCTA'
import './app.css'

function App() {
  const { scrollYProgress } = useScroll()
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const [active, setActive] = useState('hero')
  const ids = useMemo(() => navSections, [])

  useEffect(() => {
    const observers = ids.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActive(id)
      }, { rootMargin: '-42% 0px -45% 0px', threshold: 0 })
      io.observe(el)
      return io
    })
    return () => observers.forEach((io) => io?.disconnect())
  }, [ids])

  const jump = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div className="app">
      <motion.div className="scroll-progress" style={{ width: progress }} />
      <Header active={active} onJump={jump} />
      <div className="chapter-rail" aria-label="Tiến độ chương">
        {ids.map((id, i) => (
          <button key={id} className={active === id ? 'chapter-dot active' : 'chapter-dot'} onClick={() => jump(id)} title={`${i + 1}. ${id}`}>
            <span>{String(i + 1).padStart(2, '0')}</span>
          </button>
        ))}
      </div>

      <main>
        <Hero onExplore={() => jump('timeline')} onTrade={() => jump('tradeoff')} />
        <Timeline />
        <Crisis />
        <Chaebol />
        <Government />
        <Debate />
        <MythFact />
        <TradeOff />
        <Conclusion />
        <GameCTA />
      </main>

      <footer className="footer">
        <div className="footer-brand"><strong>REPUBLIC OF KOREA / 2022</strong><span>Interactive explainer · React + Vite</span></div>
        <div className="footer-links">
          <a href="/game.html"><Gamepad2 size={15} /> MỞ TRANG GAME</a>
          <span>Ảnh minh họa: Wikimedia Commons</span>
        </div>
      </footer>
    </div>
  )
}

export default App
