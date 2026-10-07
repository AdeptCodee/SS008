import { ExternalLink, FileText, Image as ImageIcon, PlayCircle } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import Reveal from '../components/Reveal'
import PageFooterNav from '../components/PageFooterNav'
import { sources } from '../data'
import '../page-styles/detail.css'


export default function SourcesPage() {
  return (
    <>
      <PageIntro
        number="SOURCES"
        title="Nguồn & tư liệu"
        subtitle="Các nguồn được tách thành một trang riêng để nội dung chính không bị ngắt nhịp. Tài liệu được tổng hợp trên internet thông qua AI."
      />
      <section className="section">
        <div className="container grid grid-2">
          {sources.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.04}>
              <a
                className="source-card card"
                href={s.url}
                target="_blank"
                rel="noreferrer"
              >
                <div className="source-icon">
                  {s.name === 'Reuters' || s.name === 'CNA' ? (
                    <PlayCircle size={20} />
                  ) : (
                    <FileText size={20} />
                  )}
                </div>
                <div>
                  <span>{s.name}</span>
                  <h3>{s.title}</h3>
                </div>
                <ExternalLink size={17} color="#98A2B3" />
              </a>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <div className="card source-note">
            <span className="eyebrow">NOTE</span>
            <p>
              Ảnh hero sử dụng ảnh Seoul Night Skyline 2022 từ Wikimedia Commons
              theo CC BY-SA 4.0; khi phát hành production nên giữ attribution của
              tác giả. Phần YouTube dùng iframe của Reuters/CNA.
            </p>
            <a
              href="https://commons.wikimedia.org/wiki/File:Seoul_Night_Skyline_2022.jpg"
              target="_blank"
              rel="noreferrer"
            >
              Xem thông tin giấy phép ảnh ↗
            </a>
          </div>
        </div>
      </section>
     <PageFooterNav
        nextPath="/context"
        nextLabel="Đến trang kế"
      />
    </>
  );
}
