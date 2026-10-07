import React, { useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Cpu, Landmark, Sparkles, Users } from 'lucide-react'
import { StatChip } from './shared'
import './Hero.css'

export default function Hero({ onExplore, onTrade }) {
  const x=useMotionValue(0), y=useMotionValue(0); const sx=useSpring(x,{stiffness:180,damping:18}), sy=useSpring(y,{stiffness:180,damping:18});
  const [active,setActive]=useState('CHOICE')
  const move=e=>{const r=e.currentTarget.getBoundingClientRect();const dx=(e.clientX-(r.left+r.width/2))/r.width; const dy=(e.clientY-(r.top+r.height/2))/r.height; x.set(-dy*10); y.set(dx*12)}
  return <section className="hero section" id="hero">
    <div className="hero-copy">
      <div className="hero-kicker"><Sparkles size={15}/> POLICY CASE / SOUTH KOREA / AUG 2022</div>
      <h1>Giữa lằn ranh<br/><span>Pháp Quyền</span> × <span>Sinh Tồn Kinh Tế</span></h1>
      <p className="hero-question">Vào tháng 8/2022, vì sao Chính phủ Hàn Quốc lại đặc xá cho nhiều phạm nhân, đặc biệt là các nhà tài phiệt như “Thái tử” Samsung Lee Jae-yong?</p>
      <p className="hero-answer">Đằng sau quyết định là bài toán về <b>khủng hoảng kinh tế, Chaebol, bán dẫn, đầu tư</b> và cái giá của pháp quyền.</p>
      <div className="hero-actions"><button className="primary-btn" onClick={onExplore}>MỞ HỒ SƠ PHÂN TÍCH <ArrowDown size={17}/></button><button className="ghost-btn" onClick={onTrade}>XEM TRADE-OFF <ArrowUpRight size={17}/></button></div>
      <div className="stats-row"><StatChip icon={Users} value="1.693" text="người trong đợt đặc xá"/><StatChip icon={Landmark} value="12/08" text="công bố quyết định"/><StatChip icon={Cpu} value="450T KRW" text="gói đầu tư Samsung được nêu"/></div>
    </div>
    <div className="hero-orbit-wrap" onMouseMove={move} onMouseLeave={()=>{x.set(0);y.set(0)}}>
      <motion.div className="orbit-scene" style={{rotateX:sx,rotateY:sy}}>
        <div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/>
        <motion.div className="core-sphere" animate={{rotate:active==='CHOICE'?0:360}} transition={{duration:1.2,ease:'easeInOut'}}><div className="sphere-grid"/><div className="sphere-light"/><div className="sphere-label">{active}</div></motion.div>
        <button className={`orbit-tag tag-top ${active==='ECONOMY'?'selected':''}`} onClick={()=>setActive('ECONOMY')}>ECONOMY <strong>↑</strong></button>
        <button className={`orbit-tag tag-right ${active==='LAW'?'selected':''}`} onClick={()=>setActive('LAW')}>LAW <strong>↔</strong></button>
        <button className={`orbit-tag tag-left ${active==='CHAEBOL'?'selected':''}`} onClick={()=>setActive('CHAEBOL')}>CHAEBOL <strong>◎</strong></button>
      </motion.div>
      <div className="hero-orbit-caption"><span>INTERACTIVE CORE</span><strong>Chạm vào 3 nút quanh khối 3D</strong><small>Đây là ba lực chính định hình case study.</small></div>
    </div>
  </section>
}
