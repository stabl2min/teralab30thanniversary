# TERALAB 30th Anniversary Invitation

An online invitation page for the TERALAB 30th Anniversary event, built with TanStack Start and deployed on Netlify.

## About

A single-page event invitation (in Korean) covering:
- Event overview and timeline (15:00–20:00)
- Venue registration and parking guidance with a map
- Full program schedule with timestamped agenda

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:3000` (or via Netlify CLI at port 8888).

## Map Image

Place `map.png` in the `public/` directory to display the venue/parking map on the page.

## Build

```bash
npm run build
```
