import React, { useState } from 'react'
import { Gamepad2, Menu, X } from 'lucide-react'
import './Header.css'

export default function Header({ active, onJump }) {
  const [open, setOpen] = useState(false)
  const links = [['MỞ ĐẦU','hero'],['DIỄN BIẾN','timeline'],['KHỦNG HOẢNG','crisis'],['CHAEBOL','chaebol'],['CHÍNH PHỦ','government'],['TRANH LUẬN','debate'],['MYTH/FACT','myth'],['TRADE-OFF','tradeoff'],['KẾT LUẬN','conclusion']]
  const go = (id) => { onJump(id); setOpen(false) }
  return <>
    <header className="topbar">
      <button className="brand" onClick={() => go('hero')}><span className="brand-symbol"><i/><i/><i/></span><span>REPUBLIC OF KOREA / 2022</span></button>
      <nav className={open ? 'nav-scroll open' : 'nav-scroll'}>{links.map(([label,id]) => <button key={id} className={active === id ? 'nav-link active' : 'nav-link'} onClick={() => go(id)}>{label}</button>)}</nav>
      <div className="header-actions"><a className="game-header-link" href="/game.html"><Gamepad2 size={15}/> GAME</a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Mở menu">{open ? <X size={20}/> : <Menu size={20}/>}</button></div>
    </header>
  </>
}
