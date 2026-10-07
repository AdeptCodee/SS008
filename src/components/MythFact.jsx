import React,{useState} from 'react';
import {motion} from 'framer-motion';
import {myths} from '../data';
import './MythFact.css';
function Card({item,n}){const [flip,setFlip]=useState(false);return <motion.button whileHover={{y:-6}} className={'myth-card '+(flip?'flipped':'')} onClick={()=>setFlip(v=>!v)}><motion.div animate={{rotateY:flip?180:0}} transition={{duration:.65,ease:[.16,1,.3,1]}} className="myth-inner"><div className="face front"><span>0{n+1}</span><h3>{item.q}</h3><small>CLICK TO FLIP</small></div><div className="face back"><span>FACT</span><p>{item.a}</p><small>CLICK TO RETURN</small></div></motion.div></motion.button>}
export default function MythFact(){return <section className="section myth-sec"><div className="section-head"><div><div className="eyebrow">07 / MYTH × FACT</div><h2>ĐỪNG ĐỂ<br/><span>TÍT BÀI DẪN DẮT.</span></h2></div><p className="section-copy">Bốn tấm card là bốn hiểu nhầm phổ biến. Tương tác lật thẻ để kiểm tra.</p></div><div className="myth-grid">{myths.map((m,i)=><Card key={m.q} item={m} n={i}/>)}</div></section>}
