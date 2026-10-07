import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  CircleAlert,
  Cpu,
  Gavel,
  Globe2,
  Handshake,
  Landmark,
  Layers3,
  LineChart,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  Users,
  Zap,
} from 'lucide-react'
import './styles.css'

const IMG_YOON = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Yoon_Suk-yeol_in_May_2022.jpg'
const IMG_PYEONGTAEK = 'https://upload.wikimedia.org/wikipedia/commons/c/c0/President_Biden_visited_the_Samsung_Electronics_Pyeongtaek_Campus_%282%29.jpg'

const timeline = [
  { date: '2015', title: 'Khởi nguồn vụ sáp nhập', detail: 'Vụ sáp nhập Samsung C&T – Cheil Industries trở thành nguồn cơn của các cáo buộc liên quan đến Lee Jae-yong.', tone: 'red' },
  { date: '08/2017', title: 'Bị bắt & kết án', detail: 'Tòa sơ thẩm tuyên mức án 5 năm; quá trình xét xử sau đó tiếp tục thay đổi mức hình phạt.', tone: 'red' },
  { date: '08/2021', title: 'Được tạm tha', detail: 'Lee Jae-yong được tha trước thời hạn sau 18 tháng chấp hành án trong đại án hối lộ.', tone: 'amber' },
  { date: '29/07/2022', title: 'Án tù hết hạn', detail: 'Phần án tù kết thúc nhưng lệnh cấm làm việc trong 5 năm vẫn là nút thắt pháp lý.', tone: 'blue' },
  { date: '12/08/2022', title: 'Công bố đặc xá', detail: 'Chính phủ Yoon Suk-yeol công bố đợt đặc xá với thông điệp gắn với phục hồi sinh kế và vượt qua khủng hoảng kinh tế.', tone: 'blue' },
  { date: '15/08/2022', title: 'Đặc xá có hiệu lực', detail: 'Lee Jae-yong và một số lãnh đạo Chaebol khác được khôi phục quyền kinh doanh.', tone: 'green' },
  { date: '10/2022', title: 'Trở lại ghế Chủ tịch', detail: 'Lee Jae-yong chính thức giữ vai trò Executive Chairman tại Samsung Electronics.', tone: 'green' },
]

const crisisCards = [
  { icon: TrendingDown, value: '4,1% → 2,6%', label: 'Tăng trưởng GDP', note: '2021 → 2022', accent: 'red' },
  { icon: BarChart3, value: '6,3%', label: 'Lạm phát', note: 'Tháng 7/2022', accent: 'amber' },
  { icon: Zap, value: '+23,1%', label: 'Giá năng lượng', note: 'Mức tăng được nêu trong tài liệu', accent: 'orange' },
  { icon: LineChart, value: '8 tháng', label: 'Thâm hụt liên tiếp', note: 'Xuất khẩu chịu sức ép', accent: 'blue' },
  { icon: Layers3, value: 'GIÁN ĐOẠN', label: 'Chuỗi cung ứng', note: 'Chi phí đầu vào tăng', accent: 'purple' },
  { icon: Users, value: '21 tháng', label: 'Việc làm tăng', note: 'Điểm sáng hiếm hoi', accent: 'green' },
]

const chaebols = [
  { name: 'SAMSUNG', core: 'Bán dẫn · điện tử · sinh dược', copy: 'Hạt nhân công nghệ và xuất khẩu', icon: Cpu },
  { name: 'HYUNDAI', core: 'Ô tô · thép · logistics', copy: 'Trụ cột công nghiệp chế tạo', icon: Building2 },
  { name: 'SK', core: 'Bán dẫn · viễn thông · năng lượng', copy: 'Mắt xích công nghệ & hạ tầng', icon: Globe2 },
  { name: 'LG', core: 'Điện tử · màn hình · pin EV', copy: 'Đầu tàu pin và hàng điện tử', icon: Zap },
]

const myths = [
  ['“Đặc xá = vô tội”', 'Sai', 'Đặc xá không đồng nghĩa với hủy bản án hay tuyên vô tội.'],
  ['“Chỉ Samsung được đặc xá”', 'Sai', 'Đợt 2022 áp dụng cho gần 1.700 người, bao gồm các lãnh đạo doanh nghiệp khác.'],
  ['“Samsung sẽ cứu cả nền kinh tế”', 'Không chính xác', 'Thông điệp chính thức là kỳ vọng đầu tư, công nghệ và việc làm hỗ trợ phục hồi.'],
  ['“Tất cả Chaebol đều được đối xử giống nhau”', 'Không hoàn toàn', 'Tình trạng pháp lý và tiêu chí xem xét của từng cá nhân/đợt đặc xá khác nhau.'],
  ['“Đặc xá chắc chắn tạo tăng trưởng”', 'Chưa thể khẳng định', 'Kỳ vọng chính sách không phải bằng chứng nhân quả rằng đặc xá tự nó tạo tăng trưởng.'],
]

const reasons = [
  { n: '01', title: 'Khủng hoảng kinh tế', body: 'Lạm phát, bất ổn toàn cầu, thương mại suy yếu và áp lực tăng trưởng buộc Seoul phải tìm một cú hích nhanh.', icon: TrendingDown },
  { n: '02', title: 'Chaebol quá lớn để bỏ qua', body: 'Samsung, Hyundai, SK, LG có khả năng huy động vốn, đầu tư công nghệ, tạo việc làm và thúc đẩy xuất khẩu.', icon: Building2 },
  { n: '03', title: 'Chính phủ cần động lực tư nhân', body: 'Mục tiêu là khôi phục tăng trưởng, đẩy đầu tư, giữ năng lực công nghệ và hỗ trợ sinh kế.', icon: Handshake },
  { n: '04', title: 'Lee Jae-yong là nút quyết định', body: 'Đặc xá gỡ lệnh cấm làm việc, đưa quyền ra quyết định chiến lược trở lại gần trung tâm quyền lực của Samsung.', icon: BadgeCheck },
  { n: '05', title: 'Và cái giá là một cuộc tranh luận', body: 'Lợi ích kinh tế kỳ vọng được đặt cạnh bình đẳng trước pháp luật, niềm tin tư pháp và đặc quyền của Chaebol.', icon: Scale },
]

function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        io.disconnect()
      }
    }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, visible]
}

function Reveal({ children, className = '', delay = 0 }) {
  const [ref, visible] = useReveal()
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 34 }}
      animate={visible ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  )
}

function Header({ active, onJump }) {
  const links = [
    ['MỞ ĐẦU', 'hero'], ['DIỄN BIẾN', 'timeline'], ['KHỦNG HOẢNG', 'crisis'], ['CHAEBOL', 'chaebol'], ['CHÍNH PHỦ', 'government'], ['TRANH LUẬN', 'debate'], ['KẾT LUẬN', 'conclusion']
  ]
  return (
    <header className="topbar">
      <button className="brand" onClick={() => onJump('hero')} aria-label="Về đầu trang">
        <span className="brand-mark"><span></span><span></span><span></span></span>
        <span>REPUBLIC OF KOREA / 2022</span>
      </button>
      <nav className="nav-scroll">
        {links.map(([label, id]) => (
          <button key={id} className={active === id ? 'nav-link active' : 'nav-link'} onClick={() => onJump(id)}>{label}</button>
        ))}
      </nav>
      <div className="live-pill"><span className="live-dot"></span> CASE STUDY</div>
    </header>
  )
}

function Hero3D() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 180, damping: 18 })
  const springY = useSpring(y, { stiffness: 180, damping: 18 })
  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(py * -10)
    y.set(px * 12)
  }
  const onLeave = () => { x.set(0); y.set(0) }
  return (
    <motion.div className="hero-orbit-wrap" onMouseMove={onMove} onMouseLeave={onLeave} style={{ rotateX: springX, rotateY: springY }}>
      <div className="orbit-glow"></div>
      <div className="orbit-scene">
        <div className="orbit orbit-a"></div>
        <div className="orbit orbit-b"></div>
        <div className="orbit orbit-c"></div>
        <div className="core-sphere">
          <div className="sphere-grid"></div>
          <div className="sphere-light"></div>
          <div className="sphere-label">CHOICE</div>
        </div>
        <div className="orbit-tag tag-top"><span>ECONOMY</span><strong>↑</strong></div>
        <div className="orbit-tag tag-right"><span>LAW</span><strong>↔</strong></div>
        <div className="orbit-tag tag-left"><span>CHAEBOL</span><strong>◎</strong></div>
      </div>
    </motion.div>
  )
}

function StatChip({ icon: Icon, value, text }) {
  return <div className="stat-chip"><Icon size={17} /><strong>{value}</strong><span>{text}</span></div>
}

function SectionHead({ eyebrow, title, copy, dark = false }) {
  return (
    <div className={dark ? 'section-head dark' : 'section-head'}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  )
}

function Timeline() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 72%', 'end 32%'] })
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1])
  return (
    <section ref={sectionRef} className="section timeline-section" id="timeline">
      <SectionHead eyebrow="01 / ĐIỀU GÌ ĐÃ XẢY RA?" title="Một quyết định không xuất hiện từ khoảng trống" copy="Từ thương vụ sáp nhập năm 2015 đến lệnh đặc xá tháng 8/2022, câu chuyện dần biến từ một vụ án pháp lý thành bài toán về quyền lực kinh tế." />
      <div className="timeline">
        <motion.div className="timeline-progress" style={{ scaleY: lineProgress }}></motion.div>
        {timeline.map((item, i) => (
          <Reveal key={item.date} delay={i * 0.04} className="timeline-item">
            <div className={`timeline-dot ${item.tone}`}></div>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-card">
              <span className="mini-index">0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Crisis() {
  return (
    <section className="section crisis-section" id="crisis">
      <div className="crisis-visual">
        <div className="noise"></div>
        <motion.div className="red-planet" animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}></motion.div>
        <div className="wire-grid"></div>
        <div className="quote-card">
          <span className="eyebrow">BỐI CẢNH 2022</span>
          <strong>“Khủng hoảng kinh tế quốc gia”</strong>
          <p>là cách chính phủ định vị tình thế cần một cú hích đầu tư mới.</p>
        </div>
      </div>
      <div className="crisis-copy">
        <SectionHead eyebrow="02 / BỨC TRANH KINH TẾ" title="Nền kinh tế đang bị ép từ nhiều phía" copy="Tài liệu mô tả một 2022 với lạm phát cao, thương mại suy yếu, năng lượng đắt đỏ và chuỗi cung ứng gián đoạn; việc làm là điểm sáng hiếm hoi." />
        <div className="metric-grid">
          {crisisCards.map(({ icon: Icon, value, label, note, accent }, i) => (
            <Reveal key={label} delay={i * 0.05} className={`metric-card ${accent}`}>
              <Icon size={20} />
              <strong>{value}</strong>
              <span>{label}</span>
              <small>{note}</small>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Chaebol() {
  return (
    <section className="section chaebol-section" id="chaebol">
      <SectionHead eyebrow="03 / TẠI SAO SAMSUNG QUAN TRỌNG?" title="Chaebol: không chỉ là doanh nghiệp lớn" copy="Trong tài liệu, Chaebol được mô tả là các tập đoàn đa ngành khổng lồ do gia tộc kiểm soát — một cấu trúc khiến quyết định của người đứng đầu có thể lan sang cả hệ sinh thái kinh tế." />
      <div className="chaebol-layout">
        <Reveal className="chaebol-definition">
          <div className="definition-ring"><div className="definition-center">재벌</div></div>
          <div>
            <span className="eyebrow">CẤU TRÚC</span>
            <h3>Gia tộc + sở hữu chéo + đa ngành + quan hệ nhà nước</h3>
            <p>Chính tài liệu nhấn mạnh “quyền lực tập trung” là chìa khóa để hiểu tại sao một lãnh đạo doanh nghiệp lại có thể được nhìn như một biến số vĩ mô.</p>
          </div>
        </Reveal>
        <div className="chaebol-grid">
          {chaebols.map(({ name, core, copy, icon: Icon }, i) => (
            <Reveal key={name} delay={i * 0.07} className="chaebol-card">
              <div className="chaebol-icon"><Icon size={22} /></div>
              <span className="chaebol-name">{name}</span>
              <strong>{core}</strong>
              <p>{copy}</p>
              <ArrowUpRight size={17} className="card-arrow" />
            </Reveal>
          ))}
        </div>
      </div>
      <div className="samsung-strip">
        <div className="plant-thumb"><img src={IMG_PYEONGTAEK} alt="Khu phức hợp bán dẫn Samsung Pyeongtaek năm 2022" /></div>
        <div className="samsung-logo">SAMSUNG</div>
        <div className="samsung-copy"><span>BÁN DẪN = TRỤ CỘT</span><strong>“Silicon Shield”</strong><small>Ngành chip được đặt ở giao điểm của xuất khẩu, công nghệ và an ninh kinh tế.</small></div>
        <div className="samsung-orb"><Cpu size={44} /></div>
      </div>
    </section>
  )
}

function Government() {
  const [step, setStep] = useState(0)
  const steps = [
    ['Hợp pháp hóa quyền lực', 'Gỡ lệnh cấm làm việc 5 năm → khôi phục quyền tham gia điều hành Samsung.', Gavel],
    ['Giải phóng quyết định đầu tư', 'Tạo điều kiện để các lãnh đạo doanh nghiệp tham gia đầy đủ các quyết định dài hạn và dự án vốn lớn.', BriefcaseBusiness],
    ['Kéo theo kinh tế vĩ mô', 'Đầu tư → đơn hàng cho nhà cung cấp → việc làm → xuất khẩu → kỳ vọng phục hồi tăng trưởng.', TrendingDown],
    ['Bảo vệ vị thế công nghệ', 'Lãnh đạo Chaebol là một tác nhân trong ngoại giao kinh tế và cạnh tranh chuỗi cung ứng bán dẫn.', ShieldCheck],
  ]
  const [title, body, Icon] = steps[step]
  return (
    <section className="section gov-section" id="government">
      <div className="gov-header">
        <SectionHead dark eyebrow="04 / CHÍNH PHỦ NÓI GÌ?" title="Cơ chế mà Seoul kỳ vọng" copy="Lập luận chính thức: khôi phục quyền điều hành cho các lãnh đạo kinh tế chủ chốt có thể mở khóa đầu tư, công nghệ, việc làm và năng lực xuất khẩu." />
        <div className="gov-image-wrap">
          <img src={IMG_YOON} alt="Yoon Suk-yeol năm 2022" />
          <div className="image-badge"><Landmark size={15} /> PRESIDENT / 2022</div>
        </div>
      </div>
      <div className="mechanism">
        <div className="mechanism-nav">
          {steps.map(([t], i) => (
            <button className={step === i ? 'mechanism-btn active' : 'mechanism-btn'} key={t} onClick={() => setStep(i)}>
              <span>{String(i + 1).padStart(2, '0')}</span><strong>{t}</strong><ChevronRight size={16} />
            </button>
          ))}
        </div>
        <motion.div key={step} className="mechanism-panel" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}>
          <div className="mechanism-icon"><Icon size={30} /></div>
          <span className="eyebrow">BƯỚC {String(step + 1).padStart(2, '0')}</span>
          <h3>{title}</h3>
          <p>{body}</p>
          <div className="flow-line"><span>QUYẾT ĐỊNH</span><i></i><span>ĐẦU TƯ</span><i></i><span>TĂNG TRƯỞNG?</span></div>
        </motion.div>
      </div>
      <div className="video-row">
        <div className="video-copy"><span className="eyebrow">VIDEO / 01</span><h3>Khoảnh khắc đặc xá được công bố</h3><p>CNA thuật lại quyết định ngày 12/08/2022 và lý do chính phủ gắn việc trả tự do với “overcome economic crisis”.</p></div>
        <div className="video-shell"><iframe src="https://www.youtube.com/embed/Nddt5eRsFt4" title="Samsung heir Lee Jae-yong receives presidential pardon" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
      </div>
    </section>
  )
}

function Debate() {
  const [side, setSide] = useState('support')
  return (
    <section className="section debate-section" id="debate">
      <SectionHead eyebrow="05 / TRANH LUẬN" title="Một quyết định, hai hệ giá trị" copy="Tranh cãi không nằm ở việc Samsung có quan trọng hay không, mà ở câu hỏi: lợi ích kinh tế có nên trở thành cơ sở để khoan hồng đặc biệt?" />
      <div className="debate-switch">
        <button className={side === 'support' ? 'active' : ''} onClick={() => setSide('support')}><ShieldCheck size={18} /> LẬP LUẬN ỦNG HỘ</button>
        <button className={side === 'oppose' ? 'active' : ''} onClick={() => setSide('oppose')}><CircleAlert size={18} /> LẬP LUẬN PHẢN ĐỐI</button>
      </div>
      <motion.div className="debate-board" animate={{ rotateY: side === 'support' ? 0 : 0 }} transition={{ duration: 0.3 }}>
        {side === 'support' ? (
          <div className="debate-content support">
            <div className="side-poster"><span>01</span><strong>ECONOMIC BOOST</strong><small>đầu tư · việc làm · xuất khẩu · công nghệ</small></div>
            <div className="debate-points">
              {['Lãnh đạo tập trung có thể đẩy nhanh quyết định đầu tư.', 'Bán dẫn cần vốn lớn và quyết định dài hạn.', 'Samsung là một đầu tàu trong chuỗi giá trị xuất khẩu.', 'Tái hoạt động doanh nghiệp được kỳ vọng tạo hiệu ứng lan tỏa.'].map((x, i) => <div className="point" key={x}><span>0{i + 1}</span>{x}</div>)}
            </div>
          </div>
        ) : (
          <div className="debate-content oppose">
            <div className="side-poster"><span>02</span><strong>RULE OF LAW</strong><small>bình đẳng · niềm tin · tiền lệ · đặc quyền</small></div>
            <div className="debate-points">
              {['Người có quyền lực kinh tế vẫn phải chịu trách nhiệm như công dân khác.', 'Đặc xá có thể củng cố cảm nhận về đặc quyền Chaebol.', 'Tiền lệ “lợi ích kinh tế” có thể làm suy yếu tính răn đe.', 'Kỳ vọng tăng trưởng không đồng nghĩa với bằng chứng nhân quả.'].map((x, i) => <div className="point" key={x}><span>0{i + 1}</span>{x}</div>)}
            </div>
          </div>
        )}
      </motion.div>
      <div className="public-reaction">
        <div><span className="eyebrow">PHẢN ỨNG XÃ HỘI</span><strong>Ủng hộ và phản đối cùng tồn tại</strong></div>
        <div className="reaction-meter"><span style={{ width: '77%' }}></span></div>
        <div className="reaction-copy"><b>~77%</b><span>một khảo sát được tài liệu dẫn lại ủng hộ việc đặc xá Lee Jae-yong</span></div>
      </div>
      <div className="video-row video-row-reverse">
        <div className="video-shell"><iframe src="https://www.youtube.com/embed/1Niw1AydOnA" title="Presidents Yoon, Biden meet at Samsung Electronics' semiconductor plant" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
        <div className="video-copy"><span className="eyebrow">VIDEO / 02</span><h3>Vì sao bán dẫn mang màu sắc địa chính trị?</h3><p>Chuyến thăm Pyeongtaek tháng 5/2022 cho thấy chip không chỉ là một ngành kinh tế mà còn là vấn đề “economic security”.</p></div>
      </div>
    </section>
  )
}

function MythFact() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section myth-section">
      <SectionHead eyebrow="06 / MYTH VS FACT" title="Đừng để một câu chuyện quá đơn giản che mất cấu trúc phía sau" copy="Đặc xá không đồng nghĩa với vô tội; kỳ vọng chính sách cũng không nên bị trình bày như một kết quả kinh tế chắc chắn." />
      <div className="myth-grid">
        <div className="myth-list">
          {myths.map(([q, tag], i) => (
            <button className={open === i ? 'myth-tab active' : 'myth-tab'} key={q} onClick={() => setOpen(i)}>
              <span>{String(i + 1).padStart(2, '0')}</span><strong>{q}</strong><em>{tag}</em><ChevronRight size={17} />
            </button>
          ))}
        </div>
        <motion.div className="fact-panel" key={open} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
          <div className="fact-mark">FACT</div>
          <h3>{myths[open][1]}</h3>
          <p>{myths[open][2]}</p>
          <div className="fact-grid-lines"></div>
        </motion.div>
      </div>
    </section>
  )
}

function TradeOff() {
  const itemsLeft = ['Đầu tư', 'Việc làm', 'Xuất khẩu', 'Công nghệ', 'Cạnh tranh quốc tế']
  const itemsRight = ['Công bằng pháp luật', 'Niềm tin tư pháp', 'Tiền lệ Chaebol', 'Tập trung quyền lực', 'Đặc quyền']
  const tilt = useMotionValue(0)
  const smoothTilt = useSpring(tilt, { stiffness: 120, damping: 16, mass: 0.7 })
  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    tilt.set(px * 7)
  }
  const onLeave = () => tilt.set(0)
  return (
    <section className="section tradeoff-section" id="tradeoff">
      <div className="tradeoff-top">
        <SectionHead dark eyebrow="07 / TRADE-OFF" title="Chính phủ đang đánh đổi điều gì?" copy="Đây là lõi của case: mở khóa năng lực kinh tế để đổi lấy một quyết định tư pháp gây tranh luận." />
        <motion.div className="balance-3d" onMouseMove={onMove} onMouseLeave={onLeave} style={{ rotateZ: smoothTilt }}>
          <motion.div className="balance-aura" animate={{ opacity: [0.25, 0.62, 0.25], scale: [0.92, 1.08, 0.92] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}></motion.div>
          <div className="balance-beam"></div><div className="balance-left"></div><div className="balance-right"></div><div className="balance-pin"></div>
          <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}><Scale size={78} strokeWidth={1} /></motion.div>
          <div className="balance-label balance-label-left">ECONOMY</div>
          <div className="balance-label balance-label-right">LAW</div>
        </motion.div>
      </div>
      <div className="tradeoff-grid">
        <div className="trade-col upside">
          <span className="column-label">UPSIDE</span>
          <h3>Lợi ích kinh tế kỳ vọng</h3>
          {itemsLeft.map((x, i) => <motion.div className="trade-item" key={x} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ delay: i * 0.07, duration: 0.45 }}><span>0{i + 1}</span><strong>{x}</strong><ArrowUpRight size={15} /></motion.div>)}
        </div>
        <div className="trade-vs"><span>VS</span><i></i></div>
        <div className="trade-col downside">
          <span className="column-label">COST</span>
          <h3>Các vấn đề có thể phát sinh</h3>
          {itemsRight.map((x, i) => <motion.div className="trade-item" key={x} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ delay: i * 0.07, duration: 0.45 }}><span>0{i + 1}</span><strong>{x}</strong><ArrowUpRight size={15} /></motion.div>)}
        </div>
      </div>
    </section>
  )
}

function Conclusion() {
  return (
    <section className="section conclusion-section" id="conclusion">
      <div className="conclusion-hero">
        <div className="conclusion-glow"></div>
        <span className="eyebrow">08 / VẬY TẠI SAO?</span>
        <h2>Không phải “Samsung hay pháp luật”.<br /><span>Mà là: nền kinh tế hay cái giá của đặc quyền?</span></h2>
        <p>Quyết định đặc xá tháng 8/2022 có thể được lý giải bằng một chuỗi logic: <b>khó khăn kinh tế → vai trò lớn của Chaebol → nhu cầu đầu tư, công nghệ và việc làm → tạo điều kiện cho các lãnh đạo doanh nghiệp lớn trở lại → chấp nhận một cuộc tranh luận về pháp quyền.</b></p>
      </div>
      <div className="five-reasons">
        {reasons.map(({ n, title, body, icon: Icon }, i) => (
          <Reveal key={n} delay={i * 0.06} className="reason-card">
            <div className="reason-top"><span>{n}</span><Icon size={19} /></div>
            <h3>{title}</h3>
            <p>{body}</p>
          </Reveal>
        ))}
      </div>
      <div className="final-answer">
        <div className="final-line"></div>
        <span>CORE ANSWER</span>
        <h3>Chính phủ Hàn Quốc đặc xá vì muốn dùng “quyền lực kinh tế” của các Chaebol như một đòn bẩy phục hồi — đặc biệt trong đầu tư, bán dẫn, việc làm và xuất khẩu — dù biết quyết định đó sẽ kéo theo tranh luận về bình đẳng trước pháp luật và đặc quyền của giới tài phiệt.</h3>
        <div className="final-line"></div>
      </div>
    </section>
  )
}

function App() {
  const { scrollYProgress } = useScroll()
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const [active, setActive] = useState('hero')
  const sections = useMemo(() => ['hero', 'timeline', 'crisis', 'chaebol', 'government', 'debate', 'conclusion'], [])

  useEffect(() => {
    const observers = sections.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActive(id)
      }, { rootMargin: '-42% 0px -45% 0px', threshold: 0 })
      io.observe(el)
      return io
    })
    return () => observers.forEach(io => io?.disconnect())
  }, [sections])

  const jump = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div className="app">
      <motion.div className="scroll-progress" style={{ width: progress }}></motion.div>
      <Header active={active} onJump={jump} />

      <main>
        <section className="hero section" id="hero">
          <div className="hero-copy">
            <div className="hero-kicker"><Sparkles size={15} /> POLICY CASE / SOUTH KOREA / AUG 2022</div>
            <h1>Giữa lằn ranh<br /><span>Pháp Quyền</span> × <span>Sinh Tồn Kinh Tế</span></h1>
            <p className="hero-question">Vào tháng 8/2022, vì sao Chính phủ Hàn Quốc lại đặc xá cho nhiều phạm nhân, đặc biệt là các nhà tài phiệt như “Thái tử” Samsung Lee Jae-yong?</p>
            <p className="hero-answer">Không chỉ vì “ân xá”. Đằng sau là một bài toán về <b>khủng hoảng kinh tế, Chaebol, bán dẫn, đầu tư và cái giá của pháp quyền.</b></p>
            <div className="hero-actions"><button className="primary-btn" onClick={() => jump('timeline')}>MỞ HỒ SƠ PHÂN TÍCH <ArrowDown size={17} /></button><button className="ghost-btn" onClick={() => jump('tradeoff')}>ĐI THẲNG TỚI TRADE-OFF <ArrowUpRight size={17} /></button></div>
            <div className="stats-row">
              <StatChip icon={Users} value="1.693" text="người trong đợt đặc xá" />
              <StatChip icon={Landmark} value="12/08" text="công bố quyết định" />
              <StatChip icon={Cpu} value="450T KRW" text="gói đầu tư Samsung được nêu" />
            </div>
          </div>
          <Hero3D />
        </section>

        <Timeline />
        <Crisis />
        <Chaebol />
        <Government />
        <Debate />
        <MythFact />
        <TradeOff />
        <Conclusion />
      </main>

      <footer className="footer">
        <div><strong>REPUBLIC OF KOREA / 2022</strong><span>Interactive explainer · React + Vite</span></div>
        <div className="footer-right"><span>Ảnh: Korea.net / YANG DONG WOOK; White House via Wikimedia Commons</span><span>© Case study web</span></div>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
