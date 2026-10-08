// Vị trí: src/game/Stage3Connect.jsx
import { useState } from 'react';

const ECONOMIC_CHAIN = [
  'ECONOMIC PRESSURE (Áp lực kinh tế)',
  'SEMICONDUCTOR (Trụ cột bán dẫn)',
  'SAMSUNG (Vai trò hạt nhân)',
  'LEE JAE-YONG (Quyết định tối cao)',
  'SPECIAL PARDON (Đặc xá kinh tế)'
];

const JUSTICE_CHAIN = [
  'LEE JAE-YONG (Thái tử Chaebol)',
  'CRIMINAL CONVICTION (Kết án hối lộ)',
  'RULE OF LAW (Thượng tôn pháp luật)',
  'PUBLIC CONTROVERSY (Tranh cãi đặc quyền)'
];

export default function Stage3Connect({ onNext }) {
  const [ecoStep, setEcoStep] = useState(1);
  const [jusStep, setJusStep] = useState(1);

  const isCompleted = ecoStep === ECONOMIC_CHAIN.length && jusStep === JUSTICE_CHAIN.length;

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: 0 }}>MÀN 3: CONNECT THE DOTS</h2>
      <p style={{ textAlign: 'center', color: '#94a3b8' }}>
        Hãy bấm lần lượt vào các mắt xích bên dưới để nối chuỗi logic của cả hai góc nhìn.
      </p>

      <div className="branches-grid">
        {/* Nhánh 1: Kinh tế */}
        <div className="branch-column">
          <h3 style={{ color: '#38bdf8' }}>NHÁNH 1: LẬP LUẬN KINH TẾ</h3>
          {ECONOMIC_CHAIN.map((node, index) => {
            const isConnected = index < ecoStep;
            return (
              <div key={node}>
                <div
                  className={`dot-node ${isConnected ? 'connected' : ''}`}
                  onClick={() => {
                    if (index === ecoStep) setEcoStep(ecoStep + 1);
                  }}
                >
                  {isConnected ? '🔗 ' : '○ '} {node}
                </div>
                {index < ECONOMIC_CHAIN.length - 1 && (
                  <div style={{ color: isConnected ? '#38bdf8' : '#475569', fontWeight: 'bold' }}>↓</div>
                )}
              </div>
            );
          })}
          {ecoStep < ECONOMIC_CHAIN.length && (
            <p style={{ fontSize: '0.8rem', color: '#f59e0b' }}>
              (Bấm vào ô "{ECONOMIC_CHAIN[ecoStep]}" để nối tiếp)
            </p>
          )}
        </div>

        {/* Nhánh 2: Pháp quyền */}
        <div className="branch-column">
          <h3 style={{ color: '#f43f5e' }}>NHÁNH 2: LO NGẠI PHÁP QUYỀN</h3>
          {JUSTICE_CHAIN.map((node, index) => {
            const isConnected = index < jusStep;
            return (
              <div key={node}>
                <div
                  className={`dot-node ${isConnected ? 'connected' : ''}`}
                  style={isConnected ? { borderColor: '#f43f5e', backgroundColor: '#881337' } : {}}
                  onClick={() => {
                    if (index === jusStep) setJusStep(jusStep + 1);
                  }}
                >
                  {isConnected ? '🔗 ' : '○ '} {node}
                </div>
                {index < JUSTICE_CHAIN.length - 1 && (
                  <div style={{ color: isConnected ? '#f43f5e' : '#475569', fontWeight: 'bold' }}>↓</div>
                )}
              </div>
            );
          })}
          {jusStep < JUSTICE_CHAIN.length && (
            <p style={{ fontSize: '0.8rem', color: '#f59e0b' }}>
              (Bấm vào ô "{JUSTICE_CHAIN[jusStep]}" để nối tiếp)
            </p>
          )}
        </div>
      </div>

      {/* Khi nối xong hết mới hiện kết luận 2 mặt */}
      {isCompleted && (
        <div style={{ background: '#0f172a', padding: '24px', borderRadius: '8px', border: '2px solid #f59e0b', textAlign: 'center' }}>
          <h3 style={{ color: '#f59e0b', margin: '0 0 12px 0' }}>💡 YOU FOUND TWO SIDES OF THE STORY!</h3>
          <p style={{ margin: '8px 0' }}>
            <strong>ECONOMIC ARGUMENT:</strong> Tầm quan trọng về công nghệ và cam kết đầu tư của Samsung được đưa ra làm lý do khôi phục quyền tự do kinh doanh cho ông Lee.
          </p>
          <p style={{ margin: '8px 0' }}>
            <strong>JUSTICE CONCERN:</strong> Giới phê bình đặt câu hỏi liệu tầm quan trọng kinh tế có nên dùng để biện minh cho sự đối xử đặc biệt đối với một lãnh đạo Chaebol đã bị kết án hay không.
          </p>
          <button className="game-btn" onClick={onNext}>
            VIẾT BÁO CÁO KẾT LUẬN (YOUR REPORT) →
          </button>
        </div>
      )}
    </div>
  );
}