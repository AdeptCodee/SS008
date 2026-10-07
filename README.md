# Korea Policy Story v2

Interactive React/Vite microsite về quyết định đặc xá Hàn Quốc tháng 8/2022.

## Điểm chính
- Samsung Blue / political-editorial visual language
- Scroll reveal + hover/tap interactions
- Tách trang theo từng chủ đề thay vì nhồi toàn bộ nội dung vào homepage
- Interactive 2D balance illustration (SVG) cho phần Trade-off
- Flipbook portal: sửa `src/config.js` để gắn URL ngoài
- Game hub: sửa `src/config.js` để gắn game bên ngoài hoặc route riêng
- Trang Sources riêng

## Chạy local
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```


## Latest interaction update

- The homepage hero is now a full-viewport photographic scene pinned during scroll.
- The first content panel slides upward over the hero, physically covering the image.
- Reversing the scroll moves the panel back down so the hero photo is progressively revealed again.
- Hero scale, tint and copy shift are scroll-driven.
- Route changes reset the viewport to the top via a pathname-aware scroll-to-top effect.
- The hero image is from Wikimedia Commons and is licensed CC BY-SA 4.0; see IMAGE-CREDITS.md.
