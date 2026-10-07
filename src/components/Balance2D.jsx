import { useMemo } from 'react'
import './Balance2D.css'

export default function Balance2D({ tilt = 0 }) {
  const angle = useMemo(() => Math.max(-10, Math.min(10, tilt * 8)), [tilt])
  const leftY = 205 + tilt * 6
  const rightY = 205 - tilt * 6

  return (
    <div className="balance-2d" aria-label="Minh họa cán cân giữa lợi ích kinh tế và pháp quyền">
      <svg viewBox="0 0 760 520" role="img" aria-labelledby="balanceTitle balanceDesc">
        <title id="balanceTitle">Cán cân lợi ích kinh tế và pháp quyền</title>
        <desc id="balanceDesc">Cán cân 2D nghiêng theo tương tác chuột giữa hai phía kinh tế và pháp quyền.</desc>
        <defs>
          <linearGradient id="balanceBlue" x1="0" x2="1">
            <stop offset="0" stopColor="#5D7BFF" />
            <stop offset="1" stopColor="#1428A0" />
          </linearGradient>
          <linearGradient id="balanceRed" x1="0" x2="1">
            <stop offset="0" stopColor="#FF6674" />
            <stop offset="1" stopColor="#C42838" />
          </linearGradient>
          <filter id="balanceShadow" x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow dx="0" dy="16" stdDeviation="16" floodColor="#1428A0" floodOpacity="0.15" />
          </filter>
        </defs>

        <g className="balance-grid">
          <circle cx="380" cy="220" r="158" />
          <circle cx="380" cy="220" r="116" />
          <line x1="70" y1="390" x2="690" y2="390" />
        </g>

        <g className="balance-rig" style={{ transform: `rotate(${angle}deg)` }}>
          <line className="balance-beam" x1="145" y1="185" x2="615" y2="185" />
          <circle className="balance-pivot" cx="380" cy="185" r="15" />

          <g className="balance-pan balance-pan-left" transform={`translate(0 ${leftY - 205})`}>
            <line x1="180" y1="185" x2="180" y2="245" />
            <line x1="130" y1="245" x2="230" y2="245" />
            <path d="M 112 246 Q 180 300 248 246 L 238 280 Q 180 315 122 280 Z" fill="url(#balanceBlue)" />
          </g>

          <g className="balance-pan balance-pan-right" transform={`translate(0 ${rightY - 205})`}>
            <line x1="580" y1="185" x2="580" y2="245" />
            <line x1="530" y1="245" x2="630" y2="245" />
            <path d="M 512 246 Q 580 300 648 246 L 638 280 Q 580 315 522 280 Z" fill="url(#balanceRed)" />
          </g>
        </g>

        <g className="balance-base" filter="url(#balanceShadow)">
          <path d="M380 205 L330 350 L430 350 Z" fill="#E7ECFF" stroke="#1428A0" strokeWidth="2" />
          <rect x="250" y="350" width="260" height="24" rx="12" fill="#1428A0" />
          <rect x="290" y="374" width="180" height="16" rx="8" fill="#B9C7FF" />
        </g>

        <g className="balance-label balance-label-left">
          <rect x="62" y="52" width="188" height="64" rx="18" />
          <text x="88" y="79">ECONOMY</text>
          <text x="88" y="101">Investment • Jobs • Tech</text>
        </g>

        <g className="balance-label balance-label-right">
          <rect x="510" y="52" width="188" height="64" rx="18" />
          <text x="536" y="79">LAW & TRUST</text>
          <text x="536" y="101">Equality • Justice • Precedent</text>
        </g>
      </svg>

      <div className="balance-legend" aria-hidden="true">
        <span><i className="legend-dot legend-blue" />Lợi ích kinh tế</span>
        <span><i className="legend-dot legend-red" />Chi phí thể chế</span>
      </div>
    </div>
  )
}
