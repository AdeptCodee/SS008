import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight, BookOpen, Gamepad2, Scale, Landmark, Cpu, FileText } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { sections } from '../data'
import { FLIPBOOK_URL, GAME_URL } from '../config'
import Reveal from '../components/Reveal'
import '../page-styles/home.css'

function OrbitGraphic({orbitY}){
  return <div className="orbit-wrap">
    <motion.div style={{y:orbitY}} className="orbit-core" animate={{rotate:360}} transition={{duration:26,repeat:Infinity,ease:'linear'}}>
      <div className="orbit-ring ring1"/><div className="orbit-ring ring2"/><div className="orbit-ring ring3"/>
      <motion.div className="orbit-dot d1" animate={{rotate:-360}} transition={{duration:9,repeat:Infinity,ease:'linear'}}>₩</motion.div>
      <motion.div className="orbit-dot d2" animate={{rotate:360}} transition={{duration:13,repeat:Infinity,ease:'linear'}}>⚖</motion.div>
      <motion.div className="orbit-dot d3" animate={{rotate:-360}} transition={{duration:17,repeat:Infinity,ease:'linear'}}>◎</motion.div>
    </motion.div>
    <div className="orbit-label top"><span>ECONOMY</span><b>2.6%</b></div>
    <div className="orbit-label right"><span>LAW</span><b>?</b></div>
    <div className="orbit-label bottom"><span>CHAEBOL</span><b>08·2022</b></div>
  </div>
}

export default function Home(){
 const {scrollY}=useScroll()
 const orbitY=useTransform(scrollY,[0,800],[0,120])
 const imageY=useTransform(scrollY,[0,1000],[0,70])
 return <div>
  <section className="home-hero">
    <div className="hero-noise"/>
    <div className="container home-hero-grid">
      <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:.9,ease:[.22,1,.36,1]}}>
        <span className="eyebrow">CASE STUDY / SOUTH KOREA / 2022</span>
        <h1 className="h1">Giữa lằn ranh<br/><span>pháp quyền</span><br/>và sinh tồn kinh tế.</h1>
        <p className="lead hero-lead">Tại sao Chính phủ Hàn Quốc đặc xá Lee Jae-yong và nhiều lãnh đạo Chaebol vào tháng 8/2022?</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/event">Bắt đầu câu chuyện <ArrowUpRight size={17}/></Link>
          <a className="btn btn-ghost" href={FLIPBOOK_URL} target="_blank" rel="noreferrer"><BookOpen size={16}/> Mở Flipbook</a>
        </div>
        <div className="hero-under"><span><span className="pulse"/> tương tác bằng scroll & click</span><span>8 chương / 1 câu hỏi lớn</span></div>
      </motion.div>
      <Reveal delay={.15}><OrbitGraphic orbitY={orbitY}/></Reveal>
    </div>
    <a href="#map" className="scroll-cue"><ArrowDown size={16}/> khám phá</a>
  </section>

  <section id="map" className="section section-map">
    <div className="container">
      <Reveal><div className="kicker-line"><div><span className="eyebrow">THE STORY MAP</span><h2 className="h2" style={{marginTop:15}}>Đừng đọc hết.<br/><span style={{color:'var(--blue)'}}>Hãy chọn nơi muốn đi.</span></h2></div><div className="right"><p className="copy">Trang chủ chỉ giữ lại những câu mở đầu quan trọng. Mỗi chương mở sang một trang nhánh để câu chuyện có nhịp, có khoảng thở và có tương tác.</p></div></div></Reveal>
      <div>{sections.map((s,i)=><Reveal key={s.id} delay={Math.min(i*.03,.18)}><Link className="section-link" to={s.path}><div style={{display:'flex',alignItems:'center',gap:15}}><div className="num">{s.number}</div><div><h3>{s.title}</h3><p>{s.subtitle}</p></div></div><ArrowUpRight size={24} color="#98A2B3"/></Link></Reveal>)}</div>
    </div>
  </section>

  <section className="section home-feature">
    <div className="container grid grid-2 home-feature-grid">
      <Reveal><motion.div style={{y:imageY}} className="editorial-image"/></Reveal>
      <Reveal delay={.12}><div style={{alignSelf:'center'}}><span className="eyebrow">THE CENTRAL TENSION</span><h2 className="h2" style={{marginTop:16}}>“Samsung có quá quan trọng để bị đứng yên?”</h2><p className="copy" style={{marginTop:22}}>Tài liệu đặt trọng tâm vào mối căng thẳng giữa hai giá trị: một phía là phục hồi kinh tế, đầu tư, việc làm và công nghệ; phía còn lại là bình đẳng trước pháp luật và niềm tin vào tư pháp.</p><div className="mini-actions"><Link className="btn btn-ghost" to="/tradeoff">Xem bài toán đánh đổi <Scale size={16}/></Link><Link className="btn btn-ghost" to="/sources"><FileText size={16}/> Xem nguồn</Link></div></div></Reveal>
    </div>
  </section>

  <section className="section home-portal"><div className="container"><Reveal><div className="portal card"><div><span className="eyebrow">NEXT LAYER</span><h2 className="h3" style={{marginTop:14}}>Flipbook & Game sẽ là hai lớp trải nghiệm tiếp theo.</h2><p className="copy">Flipbook dành cho tài liệu đầy đủ. Game dành cho phần tương tác/kiểm tra tình huống — có thể thay URL ngay trong <code>src/config.js</code>.</p></div><div className="portal-actions"><a className="btn btn-primary" href={FLIPBOOK_URL} target="_blank" rel="noreferrer"><BookOpen size={16}/> Flipbook</a><a className="btn btn-red" href={GAME_URL}><Gamepad2 size={16}/> Game Hub</a></div></div></Reveal></div></section>
 </div>
}
