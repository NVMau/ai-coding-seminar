# AI QC Seminar

> A presentation deck and live demo for the seminar **"Applying AI for the QC Team"** — covering Agent · Skill · MCP · Playwright MCP.

Built as a single-page slide deck in React + Tailwind. Includes a small companion web app (`/demo-app/`) with four intentionally planted bugs, used to demonstrate an AI agent running a Skill through Playwright MCP and Backlog MCP to catch and triage them.

The visual language is inspired by [openclaw-seminar-one](https://openclaw-seminar-one.vercel.app/).

---

## Stack

- [Vite](https://vitejs.dev/) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) for icons
- Plain HTML/CSS/JS for the `/demo-app/` companion app

## Getting started

```bash
pnpm install
pnpm run dev
```

| URL | Purpose |
| --- | --- |
| <http://localhost:5173/> | The seminar slide deck |
| <http://localhost:5173/demo-app/> | The companion "QC Tasks" app (4 planted bugs) |

### Demo app credentials

```
email:    qc@example.com
password: qc123
reset:    /demo-app/#reset   (clears localStorage and reloads)
```

## Presentation controls

| Key | Action |
| --- | --- |
| `→` / `Space` / `PageDown` | Next slide |
| `←` / `PageUp` | Previous slide |
| `1` – `6` | Jump directly to a slide |

## Production build

```bash
pnpm run build
pnpm run preview
```

## Deploy to Vercel

1. Push this repository to your GitHub account.
2. Open [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite — just click **Deploy**.

## Project layout

```
src/
  App.tsx                  # Slide state + key bindings
  slides.tsx               # Metadata for the six slides
  components/
    Shell.tsx              # Top nav, footer, slide-arrow controls
    Card.tsx               # Shared UI primitives
    AiPlatformLogo.tsx     # Inline SVG logo (AI Platform TEAM)
  sections/
    Intro.tsx              # 01 · Intro
    Agent.tsx              # 02 · What is an Agent
    Skill.tsx              # 03 · Skill
    MCP.tsx                # 04 · MCP (Playwright + Backlog)
    Demo.tsx               # 05 · Demo flow (Skill + Playwright MCP)
    Outro.tsx              # 06 · Wrap-up
public/
  demo-app/                # The QC Tasks app with 4 planted bugs
docs/
  demo-bugs.md             # Bug inventory + how the agent catches each (speaker-only)
  demo-skill.md            # The agent's skill playbook used in the demo
```

## License

This deck is shared as-is for educational use. No warranty.
