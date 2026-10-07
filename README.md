# Korea 2022 — Interactive Policy Story

## Chạy project

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
```

## Hai link cần thay

Mở `src/config.js`:

```js
export const FLIPBOOK_URL = 'https://example.com/your-flipbook'
export const GAME_URL = '/game/'
```

- `FLIPBOOK_URL`: link Flipbook bên ngoài.
- `GAME_URL`: URL/route game thật sau này.

## Nội dung

Website được rút gọn có chủ đích từ file PDF nội dung chủ đề SS008. Trang chủ chỉ đóng vai trò story map; nội dung dài được chia thành các route riêng: Event, Context, Chaebol, Government, Debate, Myth, Trade-off, Conclusion và Sources.

## 3D

Chiếc cân sử dụng React Three Fiber + Three.js, không phải CSS giả 3D. Component: `src/components/Balance3D.jsx`.
