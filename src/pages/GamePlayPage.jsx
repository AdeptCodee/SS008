import { useState } from 'react'
import { Link } from 'react-router-dom'
import Stage1CaseFile from '../game/Stage1CaseFile'
import Stage2Board from '../game/Stage2Board'
import Stage3Connect from '../game/Stage3Connect'
import Stage4Report from '../game/Stage4Report'
import '../game/Game.css'

export default function GamePlayPage() {
  const [currentStage, setCurrentStage] = useState(1)
  const [caseStarted, setCaseStarted] = useState(true)

  return (
    <main className="game-standalone-page" data-lenis-prevent>
      <header className="game-topbar">
        <div className="game-brand">
          <span className="game-brand-mark">C</span>
          <span className="game-brand-name">CASEFILE <strong>0815</strong></span>
          <span className="game-topbar-divider" />
          <span className="game-topbar-title">THE PARDON</span>
        </div>
        <Link className="game-exit-link" to="/game">
          <span aria-hidden="true">←</span> Thoát hồ sơ
        </Link>
      </header>

      <nav className="stage-navigation" aria-label="Tiến trình điều tra">
        <div className="stage-indicator">
          {['Vụ án', 'Điều tra', 'Nối dữ kiện', 'Kết luận'].map((label, index) => (
            <div
              key={label}
              className={`stage-step ${currentStage >= index + 1 ? 'active' : ''}`}
              aria-current={currentStage === index + 1 ? 'step' : undefined}
            >
              <span className="stage-step-number">0{index + 1}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="stage-progress-track" aria-hidden="true">
          <div
            className="stage-progress-fill"
            style={{ width: `${(currentStage / 4) * 100}%` }}
          />
        </div>
      </nav>

      <section key={currentStage} className="stage-scroll-area" data-lenis-prevent>
        {currentStage === 1 && (
          <Stage1CaseFile
            initialStep={caseStarted ? 2 : 1}
            onStartCase={() => setCaseStarted(true)}
            onNext={() => setCurrentStage(2)}
          />
        )}
        {currentStage === 2 && <Stage2Board onNext={() => setCurrentStage(3)} />}
        {currentStage === 3 && <Stage3Connect onNext={() => setCurrentStage(4)} />}
        {currentStage === 4 && (
          <Stage4Report
            onRestart={() => {
              setCurrentStage(1)
              setCaseStarted(false)
            }}
          />
        )}
      </section>
    </main>
  )
}
