import React from 'react'
import { ArrowUpRight, Gamepad2, Sparkles } from 'lucide-react'
import './GameCTA.css'

export default function GameCTA(){return <section className="game-cta"><div className="section game-cta-inner"><div><span className="eyebrow"><Sparkles size={14}/> NEXT EXPERIENCE</span><h2>Muốn tự mình ra quyết định?</h2><p>Phần website này có thể dẫn sang một mini-game riêng. Khu vực đã được chừa sẵn để bạn gắn trang game sau này.</p></div><a href="/game.html" className="game-launch"><span><Gamepad2 size={22}/> MỞ TRANG GAME</span><ArrowUpRight size={20}/></a></div></section>}
