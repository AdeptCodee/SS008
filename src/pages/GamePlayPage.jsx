import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, FileCheck2, GitBranch, KeyRound, ScrollText, Search } from 'lucide-react'
import Stage1CaseFile from '../game/Stage1CaseFile'
import Stage2Board from '../game/Stage2Board'
import Stage3Connect from '../game/Stage3Connect'
import Stage4Report from '../game/Stage4Report'
import '../game/Game.css'

export default function GamePlayPage() {
  const [currentStage, setCurrentStage] = useState(1)
  const [caseStarted, setCaseStarted] = useState(true)
  const stageItems = [
    { label: 'Hồ sơ vụ án', detail: 'Thông tin đối tượng', icon: ScrollText },
    { label: 'Bảng điều tra', detail: 'Thu thập bằng chứng', icon: Search },
    { label: 'Nối dữ kiện', detail: 'Phân tích hai mặt', icon: GitBranch },
    { label: 'Báo cáo', detail: 'Kết luận hồ sơ', icon: FileCheck2 },
  ]

  return (
    <main className="game-standalone-page" data-lenis-prevent>
      <aside className="case-sidebar">
        <Link className="case-sidebar-brand" to="/game">
          <span className="case-code">0815</span>
          <span className="case-title">
            <small>HỒ SƠ ĐIỀU TRA</small>
            <strong>Ân xá đặc biệt</strong>
          </span>
        </Link>

        <div className="investigator-card">
          <span className="investigator-icon"><Search size={17} /></span>
          <span><small>PHÓNG VIÊN ĐIỀU TRA</small><strong>Hồ sơ Seoul</strong></span>
        </div>

        <nav className="case-stage-menu" aria-label="Các phần hồ sơ">
          {stageItems.map(({ label, detail, icon: Icon }, index) => {
            const stage = index + 1
            const isActive = currentStage === stage
            const isComplete = currentStage > stage

            return (
              <div
                key={label}
                className={`case-stage-item ${isActive ? 'active' : ''} ${isComplete ? 'complete' : ''}`}
                aria-current={isActive ? 'step' : undefined}
              >
                <span className="case-stage-icon">
                  {isComplete ? <KeyRound size={19} /> : <Icon size={19} />}
                </span>
                <span className="case-stage-copy">
                  <small>MÀN {stage}{isComplete ? ' · HOÀN TẤT' : ''}</small>
                  <strong>{label}</strong>
                  <em>{detail}</em>
                </span>
                {isActive && <span className="case-stage-pin" aria-hidden="true" />}
              </div>
            )
          })}
        </nav>

        <Link className="case-sidebar-back" to="/game">
          <ArrowLeft size={15} /> Thoát hồ sơ
        </Link>
      </aside>

      <div className="game-workspace">
        <header className="game-statusbar">
          <div className="status-case">
            <span className="status-case-icon"><KeyRound size={25} /></span>
            <span><small>HỒ SƠ SỐ</small><strong>0815 <i>/ SEOUL 2022</i></strong></span>
          </div>
          <div className="status-progress">
            <span><small>TIẾN ĐỘ ĐIỀU TRA</small><strong>{currentStage}<i>/4</i></strong></span>
            <div className="status-keys" aria-label={`${currentStage} trên 4 màn hoàn thành`}>
              {stageItems.map((item, index) => (
                <KeyRound
                  key={item.label}
                  size={19}
                  className={index < currentStage ? 'earned' : ''}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </header>

        <section className="game-sheet" aria-label="Nội dung hồ sơ">
          <div className="sheet-toolbar">
            <span className="sheet-progress-label">Tiến độ hồ sơ {currentStage}/4</span>
            <div className="sheet-progress-track" aria-hidden="true">
              <div
                className="sheet-progress-fill"
                style={{ width: `${(currentStage / 4) * 100}%` }}
              />
            </div>
            <span className="sheet-case-mark"><KeyRound size={13} /> CASE 0815</span>
          </div>

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
        </section>
      </div>
    </main>
  )
}
