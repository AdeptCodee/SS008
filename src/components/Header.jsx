import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, BookOpen, Gamepad2, FileText } from 'lucide-react'
import { FLIPBOOK_URL, GAME_URL } from '../config'

export default function Header(){
  const [open,setOpen]=useState(false)
  const {pathname}=useLocation()
  const isHome=pathname==='/'
  return <header className="site-header">
    <div className="nav-wrap">
      <Link to="/" className="brand">SS008<span>/</span><small>KOREA 2022</small></Link>
      <nav className={open?'nav-open':''}>
        <Link className={isHome?'active':''} to="/">Tổng quan</Link>
        <Link className={pathname==='/event'?'active':''} to="/event">Sự kiện</Link>
        <Link className={pathname==='/context'?'active':''} to="/context">Bối cảnh</Link>
        <Link className={pathname==='/debate'?'active':''} to="/debate">Tranh luận</Link>
        <Link className={pathname==='/sources'?'active':''} to="/sources">Nguồn</Link>
        <a href={FLIPBOOK_URL} target="_blank" rel="noreferrer"><BookOpen size={15}/> Flipbook</a>
        <a href={GAME_URL}><Gamepad2 size={15}/> Game</a>
      </nav>
      <button className="menu-button" onClick={()=>setOpen(v=>!v)} aria-label="menu">{open?<X/>:<Menu/>}</button>
    </div>
  </header>
}
