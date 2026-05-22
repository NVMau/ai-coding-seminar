# AI QC Seminar

Web slide deck cho buổi seminar **Ứng dụng AI cho Team QC** — Agent · Skill · MCP · Playwright MCP demo.

Style lấy cảm hứng từ [openclaw-seminar-one](https://openclaw-seminar-one.vercel.app/).

## Tech

- Vite + React + TypeScript
- Tailwind CSS
- lucide-react icons

## Phát triển

```bash
pnpm install
pnpm run dev
```

Mở http://localhost:5173 — web slide deck.

App demo (mô phỏng phần Demo Flow trong seminar): <http://localhost:5173/demo-app/>

```
login:  qc@example.com / qc123
reset:  /demo-app/#reset   (clear localStorage)
```

## Phím tắt khi present

| Phím | Hành động |
| --- | --- |
| `→` / `Space` / `PageDown` | Slide tiếp |
| `←` / `PageUp` | Slide trước |
| `1` – `6` | Nhảy thẳng tới slide |

## Build production

```bash
pnpm run build
pnpm run preview
```

## Deploy lên Vercel

1. Push repo này lên GitHub của bạn.
2. Vào [vercel.com/new](https://vercel.com/new), import repo.
3. Vercel tự nhận diện Vite — bấm **Deploy**. Xong.

## Cấu trúc

```
src/
  App.tsx              # state slide + key bindings
  slides.tsx           # meta của 6 slide
  components/
    Shell.tsx          # top nav + footer + nav arrows
    Card.tsx           # các primitive UI
  sections/
    Intro.tsx          # 01 · Mở đầu
    Agent.tsx          # 02 · Agent là gì
    Skill.tsx          # 03 · Skill
    MCP.tsx            # 04 · MCP + Playwright + Backlog
    Demo.tsx           # 05 · Flow Skill + Playwright MCP
    Outro.tsx          # 06 · Kết
public/
  demo-app/            # mini QC Tasks app có 4 bug cài sẵn cho phần Demo
docs/
  demo-bugs.md         # danh sách 4 bug + cách agent bắt (cho speaker)
  demo-skill.md        # mẫu skill agent follow trong demo
```
