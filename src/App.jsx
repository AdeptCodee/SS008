import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from '@studio-freight/lenis'

import Header from './components/Header'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import EventPage from './pages/EventPage'
import ContextPage from './pages/ContextPage'
import ChaebolPage from './pages/ChaebolPage'
import GovernmentPage from './pages/GovernmentPage'
import DebatePage from './pages/DebatePage'
import MythPage from './pages/MythPage'
import TradeOffPage from './pages/TradeOffPage'
import ConclusionPage from './pages/ConclusionPage'
import SourcesPage from './pages/SourcesPage'
import FlipbookPage from './pages/FlipbookPage'
import GamePage from './pages/GamePage'

function Shell() {
  const location = useLocation()
  const lenisRef = useRef(null)

  // Khởi tạo Lenis một lần duy nhất
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    })

    lenisRef.current = lenis

    let rafId

    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // Mỗi khi chuyển sang route mới -> về đầu trang
  useEffect(() => {
    const resetScroll = () => {
      // Reset Lenis trước
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, {
          immediate: true,
          force: true,
        })
      }

      // Reset native browser scroll
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      })
    }

    // Chạy ngay
    resetScroll()

    // Chạy thêm 1 frame để tránh animation route ghi đè vị trí
    const frame = requestAnimationFrame(() => {
      resetScroll()
    })

    return () => cancelAnimationFrame(frame)
  }, [location.pathname])

  return (
    <>
      <ScrollProgress />
      <Header />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="page-shell"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<EventPage />} />
            <Route path="/context" element={<ContextPage />} />
            <Route path="/chaebol" element={<ChaebolPage />} />
            <Route path="/government" element={<GovernmentPage />} />
            <Route path="/debate" element={<DebatePage />} />
            <Route path="/myth" element={<MythPage />} />
            <Route path="/tradeoff" element={<TradeOffPage />} />
            <Route path="/conclusion" element={<ConclusionPage />} />
            <Route path="/sources" element={<SourcesPage />} />
            <Route path="/flipbook" element={<FlipbookPage />} />
            <Route path="/game/*" element={<GamePage />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
    </>
  )
}

export default function App() {
  return <Shell />
}