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
    <main className="game-standalone-page">
      <Link className="game-exit-link" to="/game">
        ← Thoát hồ sơ
      </Link>

      <div className="game-container">
        <div className="stage-indicator">
          <span className={`stage-step ${currentStage >= 1 ? 'active' : ''}`}>
            1. Vụ án (Case File)
          </span>
          <span className={`stage-step ${currentStage >= 2 ? 'active' : ''}`}>
            2. Điều tra (Board)
          </span>
          <span className={`stage-step ${currentStage >= 3 ? 'active' : ''}`}>
            3. Nối dữ kiện (Connect)
          </span>
          <span className={`stage-step ${currentStage >= 4 ? 'active' : ''}`}>
            4. Kết luận (Report)
          </span>
        </div>

        <div className="stage-scroll-area">
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
        </div>
      </div>
    </main>
  )
}
