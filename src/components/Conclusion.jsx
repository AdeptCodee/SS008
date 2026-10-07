import React,{useState} from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import {ArrowRight,ArrowLeft} from 'lucide-react';
import './Conclusion.css';
const factors=[
 ['01','BỐI CẢNH KINH TẾ','Lạm phát, bất ổn toàn cầu, suy giảm thương mại và áp lực tăng trưởng tạo ra nhu cầu phục hồi.'],
 ['02','VAI TRÒ CHAEBOL','Các tập đoàn lớn có khả năng huy động vốn, đầu tư, công nghệ, việc làm và xuất khẩu.'],
 ['03','MỤC TIÊU CHÍNH PHỦ','Khôi phục tăng trưởng, thúc đẩy đầu tư, tạo việc làm và duy trì năng lực cạnh tranh công nghệ.'],
 ['04','LEE JAE-YONG','Lãnh đạo Samsung là mắt xích đặc biệt trong câu chuyện bán dẫn và quyền ra quyết định chiến lược.'],
 ['05','SỰ ĐÁNH ĐỔI','Kỳ vọng kinh tế đi cùng tranh luận về bình đẳng trước pháp luật và niềm tin vào tư pháp.']
];
export default function Conclusion(){const [i,setI]=useState(0);return <section className="conclusion"><div className="conclusion-top"><div className="eyebrow">09 / THE ANSWER</div><div className="conclusion-counter">0{i+1} — 05</div></div><div className="conclusion-body"><AnimatePresence mode="wait"><motion.div key={i} initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-100}} transition={{duration:.55,ease:[.16,1,.3,1]}}><div className="factor-num">{factors[i][0]}</div><h2>{factors[i][1]}</h2><p>{factors[i][2]}</p></motion.div></AnimatePresence></div><div className="conclusion-controls"><button onClick={()=>setI(v=>Math.max(0,v-1))}><ArrowLeft size={18}/></button><div className="conclusion-dots">{factors.map((_,n)=><button key={n} onClick={()=>setI(n)} className={n===i?'active':''}/>)}</div><button onClick={()=>setI(v=>Math.min(factors.length-1,v+1))}><ArrowRight size={18}/></button></div><div className="conclusion-line"><div style={{width:`${((i+1)/factors.length)*100}%`}}/></div><div className="answer-stamp">KHÓ KHĂN KINH TẾ + CHAEBOL + NHU CẦU ĐẦU TƯ → ĐẶC XÁ → KỲ VỌNG PHỤC HỒI ↔ TRANH LUẬN PHÁP QUYỀN</div></section>}
