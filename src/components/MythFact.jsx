import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, CheckCircle2 } from 'lucide-react'
import { myths } from '../data'
import { SectionHead } from './shared'
import './MythFact.css'

export default function MythFact(){const [open,setOpen]=useState(0);const [myth,tag,body]=myths[open];return <section className="section myth-section" id="myth"><SectionHead eyebrow="06 / MYTH VS FACT" title="Bấm để lật những hiểu lầm thường gặp" copy="Mỗi mục là một mini-card. Mở một mục ở bên trái để thấy mặt sau — phần giải thích."/><div className="myth-grid"><div className="myth-list">{myths.map(([q,tag],i)=><button key={q} className={open===i?'myth-tab active':'myth-tab'} onClick={()=>setOpen(i)}><span>0{i+1}</span><strong>{q}</strong><em>{tag}</em><ChevronRight size={17}/></button>)}</div><motion.div className="fact-panel" key={open} initial={{opacity:0,rotateY:80,scale:.96}} animate={{opacity:1,rotateY:0,scale:1}} transition={{duration:.5}}><div className="fact-stamp"><CheckCircle2 size={16}/> FACT CHECK</div><span className="fact-tag">{tag}</span><h3>{myth}</h3><p>{body}</p><div className="fact-grid-lines"/></motion.div></div></section>}
