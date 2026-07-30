# Bhuwanesh M — Mission Control Portfolio

An interactive, cinematic developer portfolio built as a product experience — not a template.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19** + TypeScript
- **Tailwind CSS 4** + shadcn/ui
- **Framer Motion** + GSAP
- **React Three Fiber** (3D hero background)
- **Lenis** smooth scroll
- **next-themes**

## Features

- Boot sequence hero with system diagnostics
- Interactive skill galaxy with orbital visualization
- Horizontal experience timeline with expandable cards
- Fullscreen project modals with architecture diagrams
- AI assistant (local JSON knowledge base)
- Developer terminal (`Ctrl+K`)
- Interactive resume with skills/experience graphs
- GitHub dashboard with contribution heatmap
- Glassmorphism contact form
- Animated footer with wave effect

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+K` | Open developer terminal |

## Terminal Commands

`help` · `about` · `skills` · `projects` · `resume` · `github` · `linkedin` · `contact` · `theme` · `clear`

## Project Structure

```
app/           — Next.js App Router pages
components/    — Reusable UI and section components
hooks/         — Custom React hooks
lib/           — Utilities and AI knowledge base
types/         — TypeScript interfaces
data/          — Portfolio content (profile, skills, projects)
styles/        — Global CSS and Tailwind theme
animations/    — Framer Motion variants
public/        — Static assets
```

## License

MIT
