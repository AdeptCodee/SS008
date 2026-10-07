import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CalendarDays } from 'lucide-react'
import { timeline } from '../data'
import { SectionHead } from './shared'
import './Timeline.css'

export default function Timeline(){
 const [index,setIndex]=useState(0); const item=timeline[index]
 const next=()=>setIndex(i=>Math.min(i+1,timeline.length-1)); const prev=()=>setIndex(i=>Math.max(i-1,0))
 return <section className="section timeline-section" id="timeline"><SectionHead eyebrow="01 / ĐIỀU GÌ ĐÃ XẢY RA?" title="Lật từng hồ sơ để nhìn thấy đường đi của quyết định" copy="Thay vì đọc một timeline dài, người xem tự điều khiển từng mốc và mở chi tiết của nó."/>
   <div className="timeline-stage">
    <div className="timeline-topline"><span>{String(index+1).padStart(2,'0')} / {String(timeline.length).padStart(2,'0')}</span><div className="timeline-bar"><motion.i animate={{width:`${((index+1)/timeline.length)*100}%`}}/></div><span>{item.date}</span></div>
    <div className="timeline-window">
      <motion.div className="timeline-track" animate={{x:`${-index*(100/timeline.length)}%`}} transition={{type:'spring',stiffness:180,damping:24}}>
       {timeline.map((x,i)=><div className={`timeline-slide ${i===index?'current':''}`} key={x.date}><div className={`timeline-dot ${x.tone}`}></div><div className="timeline-date"><CalendarDays size={14}/>{x.date}</div><div className="timeline-card"><span className="mini-index">0{i+1}</span><h3>{x.title}</h3><p>{x.detail}</p><span className="open-file">HỒ SƠ {String(i+1).padStart(2,'0')}</span></div></div>)}
      </motion.div>
    </div>
    <div className="timeline-controls"><button onClick={prev} disabled={index===0}><ArrowLeft size={17}/> MỐC TRƯỚC</button><div className="timeline-dots">{timeline.map((x,i)=><button key={x.date} className={i===index?'active':''} onClick={()=>setIndex(i)} aria-label={`Đến ${x.date}`}/>)}</div><button onClick={next} disabled={index===timeline.length-1}>MỐC TIẾP <ArrowRight size={17}/></button></div>
   </div>
 </section>
}
