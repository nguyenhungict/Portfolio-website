# docs/PLAN-portfolio-website.md — Portfolio Website Project Plan

## Overview
Dự án xây dựng website Portfolio cá nhân độc bản dành riêng cho lập trình viên Fullstack (chuyên môn chính: Angular + NestJS), áp dụng phong cách thiết kế **Swiss Typography & Modernist (Light Theme)** sắc nét, chuyên nghiệp.

## Project Type
**WEB** (Tối ưu hóa tĩnh bằng Vanilla HTML5, CSS3 thế hệ mới và Vanilla JavaScript).

## Success Criteria
1.  **Aesthetics (Wow Factor):** Đạt chuẩn thiết kế Swiss Typography cao cấp, bất đối xứng, phá cách, cực kỳ ấn tượng ngay từ cái nhìn đầu tiên.
2.  **Performance:** Điểm số Lighthouse đạt 95-100 trên tất cả các tiêu chí (Performance, Accessibility, Best Practices, SEO).
3.  **Responsiveness:** Hiển thị hoàn hảo trên mọi kích thước màn hình (Desktop, Laptop, Tablet, Mobile).
4.  **No Purple Cliché:** Tuyệt đối không sử dụng màu Tím/Violet theo quy tắc Purple Ban của AG Kit.
5.  **Technical Focus:** Phản ánh rõ nét chuyên môn Fullstack (Angular + NestJS) qua phần hiển thị kĩ năng và các Case Study dự án chi tiết.

## Tech Stack
*   **Core:** HTML5 (Semantic elements)
*   **Styling:** Vanilla CSS (CSS Variables, Flexbox, CSS Grid)
*   **Interactivity:** Vanilla JS (IntersectionObserver cho hiệu ứng cuộn trang, JS Filtering cho bộ lọc dự án)
*   **Typography:** Google Fonts (**Outfit** cho Sans-serif chính, **JetBrains Mono** cho Technical Monospace)

## File Structure
```plaintext
portfolio-website/
├── index.html              # Cấu trúc HTML chính
├── style.css               # Hệ thống design tokens và thiết kế CSS
├── app.js                  # Logic tương tác và scroll reveal
├── assets/                 # Thư mục chứa hình ảnh minh họa dự án và logo
└── docs/
    └── PLAN-portfolio-website.md # Kế hoạch dự án (File này)
```

## Task Breakdown

### Task 1: Thiết lập hệ thống Design Tokens & Khung HTML Cơ bản
*   **Agent:** `frontend-specialist`
*   **Skills:** `frontend-design`, `clean-code`
*   **Priority:** P0
*   **Dependencies:** None
*   **INPUT:** Cấu trúc dự án trống.
*   **OUTPUT:** File `index.html` với cấu trúc cơ bản và import Google Fonts; File `style.css` định nghĩa đầy đủ bảng màu Light Theme Swiss Modernist, typography system, spacing, và các reset rule cơ bản.
*   **VERIFY:** Mở `index.html` trên trình duyệt để kiểm tra font chữ đã hiển thị đúng và kiểm tra CSS Variables đã được định nghĩa chính xác.

### Task 2: Xây dựng Hero Section & Navigation
*   **Agent:** `frontend-specialist`
*   **Skills:** `frontend-design`, `ui-ux-pro-max`
*   **Priority:** P0
*   **Dependencies:** Task 1
*   **INPUT:** Khung HTML/CSS cơ bản.
*   **OUTPUT:** Hero Section thiết kế Swiss Grid bất đối xứng mạo hiểm, tiêu đề khổng lồ đại diện cho lập trình viên Fullstack, thanh Menu tối giản nằm ở vị trí phá cách.
*   **VERIFY:** Kiểm tra độ tương phản thị giác của Hero Section đạt chuẩn WCAG AA và bố cục đúng tỷ lệ bất đối xứng mong muốn trên các kích thước màn hình.

### Task 3: Phát triển Section Năng lực kỹ thuật (Fullstack Tech Showcase)
*   **Agent:** `frontend-specialist` + `backend-specialist`
*   **Skills:** `frontend-design`, `clean-code`
*   **Priority:** P1
*   **Dependencies:** Task 2
*   **INPUT:** UI Hero hoàn tất.
*   **OUTPUT:** Section Tech Showcase phân chia khoa học hai mảng: Frontend (nhấn mạnh Angular, TypeScript, RxJS) và Backend (nhấn mạnh NestJS, Node.js, PostgreSQL, Docker, Redis). Thiết kế theo dạng ô kỹ thuật sắc nét, độ bo góc 0px.
*   **VERIFY:** Kiểm tra tính phân cấp thông tin rõ ràng và tính thẩm mỹ của các khối công nghệ.

### Task 4: Phát triển Section Showcase Dự án (Case Studies)
*   **Agent:** `frontend-specialist`
*   **Skills:** `frontend-design`, `clean-code`
*   **Priority:** P1
*   **Dependencies:** Task 3
*   **INPUT:** Tech Showcase hoàn tất.
*   **OUTPUT:** Section Projects gồm danh sách các dự án Fullstack tiêu biểu được thiết kế tỉ mỉ dạng Case Study, kèm theo bộ lọc tương tác (Angular projects, NestJS projects, Fullstack projects).
*   **VERIFY:** Bộ lọc hoạt động mượt mà bằng JavaScript thuần, không bị giật lag, hiển thị đầy đủ thông tin kỹ thuật của dự án.

### Task 5: Triển khai Hiệu ứng Chuyển động & Hoàn thiện Giao diện
*   **Agent:** `frontend-specialist`
*   **Skills:** `frontend-design`, `ui-ux-pro-max`
*   **Priority:** P1
*   **Dependencies:** Task 4
*   **INPUT:** Toàn bộ giao diện tĩnh hoàn tất.
*   **OUTPUT:** Tích hợp `IntersectionObserver` trong `app.js` tạo hiệu ứng staggered reveal tinh tế khi cuộn trang; tinh chỉnh micro-interactions cho các nút bấm và hover effect trên card dự án.
*   **VERIFY:** Cuộn trang mượt mà, các chuyển động nhẹ nhàng, tự nhiên, hỗ trợ tốt chế độ `prefers-reduced-motion`.

---

## Phase X: Final Verification Checklist (AG Kit Standard)

### 1. Run Automated Verifications
```powershell
# Chạy script checklist kiểm tra toàn bộ tiêu chuẩn dự án
python .agent/scripts/checklist.py .
```

### 2. Manual Verification Checklist
*   [x] **Không sử dụng màu Tím/Violet (Purple Ban):** Đã kiểm tra không có mã màu tím nào trong file CSS.
*   [x] **Tránh khuôn mẫu Bento/Split mặc định:** Đã áp dụng bố cục bất đối xứng phá cách của Swiss Typography.
*   [x] **Góc cạnh sắc nét:** Đã áp dụng `border-radius: 0px` (hoặc tối đa 2px) cho phong cách technical chuyên nghiệp.
*   [x] **Responsive:** Đã kiểm tra hoạt động tốt trên Mobile (375px) và Desktop (1920px).
*   [x] **Performance:** Đã kiểm tra Lighthouse đạt điểm tối đa cho static page.
*   [x] **A11y:** Chữ hiển thị rõ ràng, độ tương phản cao trên nền sáng.

### ✅ PHASE X COMPLETE
*   Lint: 🟢 PASSED
*   Security: 🟢 PASSED
*   Build: 🟢 PASSED
*   Date: 2026-05-21
