import { Link } from 'react-router-dom'
import { Gamepad2, ArrowUpRight } from 'lucide-react'
import { GAME_URL } from '../config'
import PageIntro from '../components/PageIntro'
import Reveal from '../components/Reveal'
import '../page-styles/detail.css'
export default function GamePage(){return <><PageIntro number="GAME HUB" title="Phòng game — để dành cho phần tương tác tiếp theo." subtitle="Khu vực này đã được chừa sẵn. Khi game hoàn thiện, bạn chỉ cần thay GAME_URL trong src/config.js."/><section className="section"><div className="container"><Reveal><div className="game-portal"><div className="game-orb"><Gamepad2 size={50}/></div><div><span className="eyebrow">FUTURE MODULE</span><h2 className="h2" style={{marginTop:14}}>Chơi để hiểu bài toán.</h2><p className="copy" style={{maxWidth:650,marginTop:18}}>Bạn có thể biến trade-off thành game quản trị, board game chính sách hoặc scenario game. Route và cổng chuyển trang đã có sẵn.</p><a className="btn btn-primary" href={GAME_URL}>Mở Game URL <ArrowUpRight size={16}/></a></div></div></Reveal></div></section><section className="section section-soft"><div className="container"><Link to="/" className="btn btn-ghost">← quay lại trang chính</Link></div></section></>}
