import { useState } from 'react'
import { ArrowLeft, ArrowRight, ShieldCheck, Users, CalendarDays, AlertCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import PageIntro from '../components/PageIntro'
import PageFooterNav from '../components/PageFooterNav'
import Reveal from '../components/Reveal'
import { eventTimeline } from '../data'
import '../page-styles/detail.css'

export default function EventPage(){
 const [i,setI]=useState(0); const e=eventTimeline[i]
 return <>
  <PageIntro number="01 / EVENT" title="Điều gì đã xảy ra?" subtitle="Một quyết định đặc xá được công bố ngày 12/08/2022 và có hiệu lực vào ngày 15/08/2022, nhân Ngày Giải phóng Hàn Quốc."/>
  <section className="section"><div className="container">
    <Reveal><div className="event-facts grid grid-3"><div className="card fact"><CalendarDays/><strong>12/08/2022</strong><span>công bố</span></div><div className="card fact"><CalendarDays/><strong>15/08/2022</strong><span>có hiệu lực</span></div><div className="card fact"><Users/><strong>1.693</strong><span>người theo thông báo chính thức</span></div></div></Reveal>
    <Reveal delay={.08}><div className="story-slider card">
      <div className="story-side"><span className="eyebrow">INTERACTIVE TIMELINE</span><div className="timeline-nav">{eventTimeline.map((x,k)=><button key={x.date} className={k===i?'active':''} onClick={()=>setI(k)}><span>{x.date}</span><i/></button>)}</div></div>
      <div className="story-main"><AnimatePresence mode="wait"><motion.div key={e.date} initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-25}} transition={{duration:.35}}><span className="small">MỐC {String(i+1).padStart(2,'0')}</span><div className="big-date">{e.date}</div><h2 className="h3">{e.title}</h2><p className="copy">{e.text}</p></motion.div></AnimatePresence><div className="slider-controls"><button className="btn btn-ghost" onClick={()=>setI((i-1+eventTimeline.length)%eventTimeline.length)}><ArrowLeft size={16}/> trước</button><button className="btn btn-primary" onClick={()=>setI((i+1)%eventTimeline.length)}>tiếp <ArrowRight size={16}/></button></div></div>
    </div></Reveal>
  </div></section>
  <section className="section section-soft"><div className="container grid grid-2"><Reveal><div><span className="eyebrow">LEE JAE-YONG</span><h2 className="h2" style={{marginTop:16}}>Đặc xá không có nghĩa là được tuyên vô tội.</h2><p className="copy" style={{marginTop:22}}>Theo tài liệu, ông đã mãn hạn tù vào 29/07/2022 nhưng vẫn chịu hạn chế làm việc 5 năm. Quyết định đặc xá dỡ bỏ hạn chế đó và khôi phục quyền điều hành, chứ không xóa phán quyết hình sự.</p></div></Reveal><Reveal delay={.12}><div className="card callout"><ShieldCheck size={28} color="var(--blue)"/><strong>Điểm pháp lý cần nhớ</strong><p>Lệnh đặc xá không đồng nghĩa xóa án hay tuyên vô tội; tài liệu cũng nêu ông vẫn phải đối diện một vụ án riêng về cáo buộc gian lận kế toán, thao túng giá cổ phiếu và giao dịch bất hợp pháp.</p></div></Reveal></div></section>
 <PageFooterNav
    nextPath="/context"
    nextLabel="Đến trang kế"
  />
 </>
}
