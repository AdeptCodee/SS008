import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
export default function PageIntro({number,title,subtitle,children}){
  return <section className="detail-hero"><div className="container">
    <Link className="small" to="/">← Tổng quan</Link>
    <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.7}} style={{marginTop:35}}>
      <span className="eyebrow">{number}</span>
      <h1 className="h2" style={{maxWidth:900,marginTop:15}}>{title}</h1>
      <p className="lead" style={{maxWidth:780,marginTop:20}}>{subtitle}</p>
      {children}
    </motion.div>
  </div></section>
}
