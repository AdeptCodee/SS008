// Vị trí: src/game/Stage4Report.jsx
import { useState } from 'react';

export default function Stage4Report({ onRestart }) {
  const [ans1, setAns1] = useState('');
  const [ans2, setAns2] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = ans1 === 'B' && ans2 === 'A';

  return (
    <div>
      {!submitted ? (
        <div>
          <h2 style={{ marginTop: 0 }}>MÀN 4: YOUR REPORT (BÁO CÁO CỦA PHÓNG VIÊN)</h2>
          <p style={{ color: '#94a3b8' }}>Hoàn thành bài viết điều tra của bạn bằng cách chọn các mảnh câu xác đáng nhất:</p>

          {/* Câu 1 */}
          <div style={{ marginBottom: '24px' }}>
            <h4>1. "Chính phủ Hàn Quốc trao lệnh đặc xá cho Lee Jae-yong bởi vì..."</h4>
            <button className={`choice-btn ${ans1 === 'A' ? 'active' : ''}`} onClick={() => setAns1('A')}>
              [A] Samsung quá quyền lực nên không thể bị truy tố.
            </button>
            <button className={`choice-btn ${ans1 === 'B' ? 'active' : ''}`} onClick={() => setAns1('B')}>
              [B] Chính phủ lập luận rằng các lãnh đạo doanh nghiệp lớn có thể đóng góp cho phục hồi kinh tế, đầu tư và tạo việc làm.
            </button>
            <button className={`choice-btn ${ans1 === 'C' ? 'active' : ''}`} onClick={() => setAns1('C')}>
              [C] Ông Lee được tòa tuyên bố chưa từng phạm tội.
            </button>
          </div>

          {/* Câu 2 */}
          <div style={{ marginBottom: '24px' }}>
            <h4>2. "Tuy nhiên, quyết định này vẫn gây tranh cãi gay gắt bởi vì..."</h4>
            <button className={`choice-btn ${ans2 === 'A' ? 'active' : ''}`} onClick={() => setAns2('A')}>
              [A] Nó đặt ra câu hỏi về sự ưu ái đặc quyền dành cho giới lãnh đạo Chaebol và nguyên tắc bình đẳng trước pháp luật.
            </button>
            <button className={`choice-btn ${ans2 === 'B' ? 'active' : ''}`} onClick={() => setAns2('B')}>
              [B] Tập đoàn Samsung đã ép buộc chính phủ phải ban hành lệnh đặc xá.
            </button>
            <button className={`choice-btn ${ans2 === 'C' ? 'active' : ''}`} onClick={() => setAns2('C')}>
              [C] Hiến pháp Hàn Quốc bắt buộc phải ân xá cho mọi giám đốc của Samsung.
            </button>
          </div>

          {ans1 && ans2 && !isCorrect && (
            <p style={{ color: '#f43f5e' }}>
              ⚠️ Một trong hai nhận định của bạn chưa phản ánh khách quan bằng chứng thu thập được. Hãy kiểm tra lại (Gợi ý: Câu 1 chọn B, Câu 2 chọn A).
            </p>
          )}

          <button
            className="game-btn"
            disabled={!isCorrect}
            onClick={() => setSubmitted(true)}
          >
            [ XUẤT BẢN BÁO CÁO & ĐÓNG HỒ SƠ ]
          </button>
        </div>
      ) : (
        /* MÀN HÌNH KẾT THÚC: CASE CLOSED */
        <div style={{ textAlign: 'center' }}>
          <div className="stamp-secret" style={{ borderColor: '#22c55e', color: '#22c55e' }}>
            CASE CLOSED // INVESTIGATION COMPLETE
          </div>
          <h2>WHAT REALLY HAPPENED? — 15 AUGUST 2022</h2>
          
          <div className="profile-card" style={{ borderLeftColor: '#38bdf8', maxWidth: '700px', margin: '20px auto' }}>
            <p>
              Ngày 15/8/2022, <strong>Lee Jae-yong</strong> nằm trong danh sách các nhà lãnh đạo doanh nghiệp được Tổng thống Hàn Quốc ban hành lệnh đặc xá đặc biệt.
            </p>
            <p>
              Chính phủ đưa ra lý do trọng tâm là <strong>phục hồi kinh tế, thúc đẩy đầu tư bán dẫn và tạo việc làm</strong> trước bờ vực suy thoái.
            </p>
            <p style={{ marginBottom: 0 }}>
              Nhưng quyết định này cũng vấp phải sự chỉ trích từ các tổ chức xã hội dân sự vì lo ngại về <strong>đặc quyền dành cho Chaebol</strong> và sự suy yếu của nguyên tắc thượng tôn pháp luật.
            </p>
          </div>

          <h3 style={{ color: '#38bdf8' }}>You found both sides of the story.</h3>

          <div className="score-board">
            <div className="score-card">
              <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>EVIDENCE FOUND</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>10/10</div>
            </div>
            <div className="score-card">
              <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>CONNECTIONS</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#22c55e' }}>3/3</div>
            </div>
            <div className="score-card">
              <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>RED HERRINGS AVOIDED</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f59e0b' }}>2/2</div>
            </div>
          </div>

          <h2 style={{ color: '#4ade80' }}>CASE COMPLETION: 100%</h2>

          <button className="game-btn" onClick={onRestart}>
            CHƠI LẠI TỪ ĐẦU (REPLAY CASE)
          </button>
        </div>
      )}
    </div>
  );
}