import React from 'react';
import {motion} from 'framer-motion';
import {ArrowRight,Gamepad2,Sparkles} from 'lucide-react';
import './GameCTA.css';
export default function GameCTA(){return <section className="game-cta"><div className="game-glow"/><div className="game-copy"><div className="eyebrow">NEXT EXPERIENCE</div><h2>MUỐN<br/><span>CHƠI TIẾP?</span></h2><p>Một cổng riêng đã được để sẵn. Bạn có thể thay `public/game.html` bằng game thật khi phần gameplay hoàn thiện.</p><a className="game-button" href="/game.html"><Gamepad2 size={18}/> MỞ TRANG GAME <ArrowRight size={17}/></a></div><motion.div className="game-object" animate={{rotate:[-3,3,-3],y:[0,-10,0]}} transition={{repeat:Infinity,duration:5,ease:'easeInOut'}}><Sparkles size={32}/><b>PLAY<br/>THE<br/>CASE</b></motion.div></section>}
