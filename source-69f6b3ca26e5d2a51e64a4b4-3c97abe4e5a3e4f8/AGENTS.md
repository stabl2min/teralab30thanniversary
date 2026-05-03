# AGENTS.md

## Project Overview

A single-page online invitation for the TERALAB 30th Anniversary event. The entire site is one route (`/`) that renders the full invitation in Korean, including hero section, event info cards, venue/parking map, and a timestamped program schedule.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS in `src/styles.css` |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
public/
  map.png          # Venue/parking map image (add this file to show the map)
src/
  routes/
    __root.tsx     # Root layout: sets lang="ko", page title/meta, imports styles
    index.tsx      # The full invitation page component
  styles.css       # All CSS: Tailwind import + custom invitation styles
netlify.toml       # Build config: vite build → dist/client, dev port 8888
```

## Key Architecture Decisions

- **Single route**: The entire invitation is one page at `/`. No navigation or sub-routes needed.
- **CSS approach**: Custom CSS classes (not Tailwind utilities) are used for the invitation layout. All styles live in `src/styles.css` alongside the Tailwind import. This maps 1:1 to the original HTML design.
- **Map image**: Referenced as `/map.png` from the `public/` directory. If absent, the `<img>` renders broken — just drop `map.png` into `public/` to fix.
- **No AI/product features**: The original Marketing template's product catalog, AI assistant, and Zustand store are unused.

## Coding Conventions

- Components: PascalCase
- Routes: kebab-case files
- CSS class names: kebab-case, prefixed with `inv-` for nav/footer to avoid Tailwind conflicts
- TypeScript strict mode; use `@/` alias for `src/*` imports

## Development

```bash
npm run dev      # Start dev server (port 3000, or 8888 via Netlify CLI)
npm run build    # Production build → dist/client
```
