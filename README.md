# StatPulse (React)

A React + Vite rebuild of the StatPulse sports analytics site (NBA + Formula 1).
This app is a lightweight **shell** — all the actual Plotly charts continue to
live on the existing GitHub Pages deployment at:

```
https://rhishabh723.github.io/statpulse-html/
```

This app embeds those charts via `<iframe>`, the same way the original site
did, just inside a modern React layout with routing, animation, and a new
visual identity. **Nothing about your existing chart-generation pipeline
needs to change.** Keep exporting Plotly HTML to the `statpulse-html` repo
exactly as you do today — pushing to that repo's `main` branch is enough
to update the charts this app displays.

## Why split this way

- This app (code) stays small — fast to build, fast to deploy, free-tier
  friendly on Vercel.
- The chart exports (702MB+ of generated HTML) stay on GitHub Pages, where
  static hosting is unlimited and your existing pipeline already targets it.
- You can swap any individual iframe for a native React chart (Recharts,
  Plotly.js for React, etc.) later, one at a time, with zero pressure from
  hosting limits.

## Project structure

```
src/
  components/       Header, Sidebar, SubHeader, ChartGrid, Footer, PulseMark
  pages/            Home, About, Contact, NbaPage, F1Page
  data/
    statpulseData.js   Generated config: every NBA category and every F1
                       season/race/historic page, with chart URLs already
                       pointed at GitHub Pages.
```

### How the data file works

`statpulseData.js` is generated (not hand-written) from the original
`statpulse-html` repo's HTML structure. Each entry is just:

```js
{
  nav: [{ slug: "...", label: "..." }],
  pages: {
    "<slug>": [
      { h1: "SECTION TITLE", items: [{ h2, src, height, width }] }
    ]
  }
}
```

`NbaPage.jsx` and `F1Page.jsx` read the URL params (category / season / race)
and look up the matching entry — there's no per-page hand-written JSX for
any individual race or stat category. Adding a new F1 race or NBA season
later means regenerating this file (or hand-adding an entry), not writing
new components.

**Note:** two long-standing broken links from the original site were fixed
in the data generation step — both 2024 and 2025 "São Paulo GP" pages had a
nav link that didn't match the actual exported filename. They now resolve
correctly here. If you regenerate `statpulseData.js` from a future export,
keep an eye out for the same kind of mismatch.

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. Hot reload is on — edit any file in `src/`
and the browser updates instantly.

## Production build

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

Output goes to `dist/`.

## Deploying to Vercel (recommended)

1. Push this project to a new GitHub repo (keep it separate from
   `statpulse-html`, which stays as-is for chart hosting).
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, click
   "Add New Project," and select the new repo.
3. Vercel auto-detects Vite — accept the defaults (Build Command:
   `npm run build`, Output Directory: `dist`).
4. Deploy. Every future push to `main` redeploys automatically.

## Before you deploy: confirm GitHub Pages is live

This app assumes `https://rhishabh723.github.io/statpulse-html/` is enabled
and serving. If you haven't already, go to the `statpulse-html` repo on
GitHub → **Settings → Pages** → set Source to the `main` branch. If charts
don't load once this app is deployed, this is the first thing to check.

## What's next (optional upgrades)

- Swap individual `<iframe>` chart embeds for native React charts
  (Recharts or `react-plotly.js`) once you're ready — this gives you
  hover states and filtering that match the site's theme instead of
  the chart's original export styling.
- Add a season/year picker that doesn't require a full nav.html-style
  list, e.g. a compact dropdown for races once a season has many.
- Consider trimming `statpulseData.js` per-route further if any single
  category page (e.g. NBA player box scores, which embeds ~17 iframes)
  feels slow on first load — the `ChartGrid` component already lazy-loads
  each iframe as it scrolls into view, so this should already be fast.
