import { BarChart3, BadgeCheck, Building2, Cpu, Globe2, Handshake, Landmark, Layers3, LineChart, Scale, ShieldCheck, TrendingDown, Users, Zap, Gavel, BriefcaseBusiness, CircleAlert } from 'lucide-react'

export const IMG_YOON = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Yoon_Suk-yeol_in_May_2022.jpg'
export const IMG_PYEONGTAEK = 'https://upload.wikimedia.org/wikipedia/commons/c/c0/President_Biden_visited_the_Samsung_Electronics_Pyeongtaek_Campus_%282%29.jpg'

export const timeline = [
  { date: '2015', title: 'Khởi nguồn vụ sáp nhập', detail: 'Vụ sáp nhập Samsung C&T – Cheil Industries trở thành nguồn cơn của các cáo buộc liên quan đến Lee Jae-yong.', tone: 'red' },
  { date: '08/2017', title: 'Bị bắt & kết án', detail: 'Tòa sơ thẩm tuyên mức án 5 năm; quá trình xét xử sau đó tiếp tục thay đổi mức hình phạt.', tone: 'red' },
  { date: '08/2021', title: 'Được tạm tha', detail: 'Lee Jae-yong được tha trước thời hạn sau 18 tháng chấp hành án trong đại án hối lộ.', tone: 'amber' },
  { date: '29/07/2022', title: 'Án tù hết hạn', detail: 'Phần án tù kết thúc nhưng lệnh cấm làm việc trong 5 năm vẫn là nút thắt pháp lý.', tone: 'blue' },
  { date: '12/08/2022', title: 'Công bố đặc xá', detail: 'Chính phủ Yoon Suk-yeol công bố đợt đặc xá với thông điệp gắn với phục hồi sinh kế và vượt qua khủng hoảng kinh tế.', tone: 'blue' },
  { date: '15/08/2022', title: 'Đặc xá có hiệu lực', detail: 'Lee Jae-yong và một số lãnh đạo Chaebol khác được khôi phục quyền kinh doanh.', tone: 'green' },
  { date: '10/2022', title: 'Trở lại ghế Chủ tịch', detail: 'Lee Jae-yong chính thức giữ vai trò Executive Chairman tại Samsung Electronics.', tone: 'green' },
]

export const crisisCards = [
  { icon: TrendingDown, value: '4,1% → 2,6%', label: 'Tăng trưởng GDP', note: '2021 → 2022', accent: 'red', detail: 'Tài liệu dùng sự giảm tốc tăng trưởng để mô tả áp lực suy giảm và nguy cơ đình trệ.' },
  { icon: BarChart3, value: '6,3%', label: 'Lạm phát', note: 'Tháng 7/2022', accent: 'amber', detail: 'Mức lạm phát cao làm chi phí sinh hoạt và chi phí sản xuất tăng, tạo sức ép lên chính sách tiền tệ.' },
  { icon: Zap, value: '+23,1%', label: 'Giá năng lượng', note: 'Mức tăng được nêu trong tài liệu', accent: 'orange', detail: 'Chi phí năng lượng leo thang được mô tả như một đòn giáng trực tiếp vào doanh nghiệp trong nước.' },
  { icon: LineChart, value: '8 tháng', label: 'Thâm hụt liên tiếp', note: 'Xuất khẩu chịu sức ép', accent: 'blue', detail: 'Suy giảm nhu cầu công nghệ toàn cầu kéo theo sức ép lên động lực xuất khẩu của Hàn Quốc.' },
  { icon: Layers3, value: 'GIÁN ĐOẠN', label: 'Chuỗi cung ứng', note: 'Chi phí đầu vào tăng', accent: 'purple', detail: 'Nguồn cung vật tư đầu vào bị gián đoạn, đẩy giá thành sản phẩm lên cao.' },
  { icon: Users, value: '21 tháng', label: 'Việc làm tăng', note: 'Điểm sáng hiếm hoi', accent: 'green', detail: 'Thị trường lao động vẫn duy trì tăng trưởng việc làm, là một điểm sáng trong bức tranh chung.' },
]

export const chaebols = [
  { name: 'SAMSUNG', core: 'Bán dẫn · điện tử · sinh dược', copy: 'Hạt nhân công nghệ và xuất khẩu', icon: Cpu, fact: 'Trong tài liệu, Samsung được đặt ở giao điểm của bán dẫn, xuất khẩu, công nghệ và “an ninh kinh tế”.' },
  { name: 'HYUNDAI', core: 'Ô tô · thép · logistics', copy: 'Trụ cột công nghiệp chế tạo', icon: Building2, fact: 'Hyundai xuất hiện như một trụ cột của công nghiệp chế tạo và mạng lưới doanh nghiệp phụ trợ.' },
  { name: 'SK', core: 'Bán dẫn · viễn thông · năng lượng', copy: 'Mắt xích công nghệ & hạ tầng', icon: Globe2, fact: 'SK được nêu như một Chaebol chủ chốt trong bán dẫn, viễn thông và năng lượng.' },
  { name: 'LG', core: 'Điện tử · màn hình · pin EV', copy: 'Đầu tàu pin và hàng điện tử', icon: Zap, fact: 'LG minh họa cho việc Chaebol mở rộng từ điện tử sang pin xe điện và các ngành công nghệ mới.' },
]

export const mechanisms = [
  { title: 'Hợp pháp hóa quyền lực', body: 'Gỡ lệnh cấm làm việc 5 năm → khôi phục quyền tham gia điều hành Samsung.', icon: Gavel, tag: 'QUYỀN' },
  { title: 'Giải phóng quyết định đầu tư', body: 'Tạo điều kiện để các lãnh đạo doanh nghiệp tham gia đầy đủ các quyết định dài hạn và dự án vốn lớn.', icon: BriefcaseBusiness, tag: 'ĐẦU TƯ' },
  { title: 'Kéo theo kinh tế vĩ mô', body: 'Đầu tư → đơn hàng cho nhà cung cấp → việc làm → xuất khẩu → kỳ vọng phục hồi tăng trưởng.', icon: TrendingDown, tag: 'LAN TỎA' },
  { title: 'Bảo vệ vị thế công nghệ', body: 'Lãnh đạo Chaebol là một tác nhân trong ngoại giao kinh tế và cạnh tranh chuỗi cung ứng bán dẫn.', icon: ShieldCheck, tag: 'CÔNG NGHỆ' },
]

export const supportPoints = [
  'Lãnh đạo tập trung có thể đẩy nhanh quyết định đầu tư.',
  'Bán dẫn cần vốn lớn và quyết định dài hạn.',
  'Samsung là một đầu tàu trong chuỗi giá trị xuất khẩu.',
  'Tái hoạt động doanh nghiệp được kỳ vọng tạo hiệu ứng lan tỏa.',
]

export const opposePoints = [
  'Người có quyền lực kinh tế vẫn phải chịu trách nhiệm như công dân khác.',
  'Đặc xá có thể củng cố cảm nhận về đặc quyền Chaebol.',
  'Tiền lệ “lợi ích kinh tế” có thể làm suy yếu tính răn đe.',
  'Kỳ vọng tăng trưởng không đồng nghĩa với bằng chứng nhân quả.',
]

export const myths = [
  ['“Đặc xá = vô tội”', 'Sai', 'Đặc xá không đồng nghĩa với hủy bản án hay tuyên vô tội.'],
  ['“Chỉ Samsung được đặc xá”', 'Sai', 'Đợt 2022 áp dụng cho gần 1.700 người, bao gồm các lãnh đạo doanh nghiệp khác.'],
  ['“Samsung sẽ cứu cả nền kinh tế”', 'Không chính xác', 'Thông điệp chính thức là kỳ vọng đầu tư, công nghệ và việc làm hỗ trợ phục hồi.'],
  ['“Tất cả Chaebol đều được đối xử giống nhau”', 'Không hoàn toàn', 'Tình trạng pháp lý và tiêu chí xem xét của từng cá nhân/đợt đặc xá khác nhau.'],
  ['“Đặc xá chắc chắn tạo tăng trưởng”', 'Chưa thể khẳng định', 'Kỳ vọng chính sách không phải bằng chứng nhân quả rằng đặc xá tự nó tạo tăng trưởng.'],
]

export const tradeoffLeft = ['Đầu tư', 'Việc làm', 'Xuất khẩu', 'Công nghệ', 'Cạnh tranh quốc tế']
export const tradeoffRight = ['Công bằng pháp luật', 'Niềm tin tư pháp', 'Tiền lệ Chaebol', 'Tập trung quyền lực', 'Đặc quyền']

export const reasons = [
  { n: '01', title: 'Khủng hoảng kinh tế', body: 'Lạm phát, bất ổn toàn cầu, thương mại suy yếu và áp lực tăng trưởng buộc Seoul phải tìm một cú hích nhanh.', icon: TrendingDown },
  { n: '02', title: 'Chaebol quá lớn để bỏ qua', body: 'Samsung, Hyundai, SK, LG có khả năng huy động vốn, đầu tư công nghệ, tạo việc làm và thúc đẩy xuất khẩu.', icon: Building2 },
  { n: '03', title: 'Chính phủ cần động lực tư nhân', body: 'Mục tiêu là khôi phục tăng trưởng, đẩy đầu tư, giữ năng lực công nghệ và hỗ trợ sinh kế.', icon: Handshake },
  { n: '04', title: 'Lee Jae-yong là nút quyết định', body: 'Đặc xá gỡ lệnh cấm làm việc, đưa quyền ra quyết định chiến lược trở lại gần trung tâm quyền lực của Samsung.', icon: BadgeCheck },
  { n: '05', title: 'Và cái giá là một cuộc tranh luận', body: 'Lợi ích kinh tế kỳ vọng được đặt cạnh bình đẳng trước pháp luật, niềm tin tư pháp và đặc quyền của Chaebol.', icon: Scale },
]

export const navSections = ['hero', 'timeline', 'crisis', 'chaebol', 'government', 'debate', 'myth', 'tradeoff', 'conclusion']
