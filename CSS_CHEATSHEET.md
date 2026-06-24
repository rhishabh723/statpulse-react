# StatPulse — CSS Color & Font Cheat Sheet

This is a reference for editing colors and fonts across the whole site.
**Almost everything traces back to one file: `src/index.css`.** That's where
the variables are defined. Every other `.css` file just *references* those
variables — they rarely contain a color value of their own.

The one exception is a small set of **intentional hardcoded colors** —
listed in its own section at the bottom — which exist on purpose and don't
need to change with the theme.

---

## Part 1 — The master variables (`src/index.css`, inside `:root { }`)

Change a value here, and it updates **everywhere** that variable is used,
across every component, automatically. This is the only section you need
to touch for a full theme change.

| Variable | Current value | What it controls |
|---|---|---|
| `--color-bg` | `#fafaf9` | The page's base background — `<html>`/`<body>`, scrollbar track |
| `--color-bg-raised` | `#f1f1ef` | Slightly offset panels: sidebar hover, sub-header bar, chart-frame placeholder background |
| `--color-bg-card` | `#ffffff` | Card surfaces: chart cards, featured cards on Home, contact cards |
| `--color-border` | `#e2e2df` | Every thin 1px divider line: header bottom border, sidebar border, card borders |
| `--color-text` | `#15171a` | Primary/headline text color |
| `--color-text-dim` | `#555a61` | Secondary text — paragraph copy, nav-pill default state, sidebar link default state |
| `--color-text-faint` | `#8c9097` | Tertiary/quiet text — icon links, footer text, sidebar titles, scrollbar thumb |
| `--color-f1` | `#e10600` | F1's brand accent — active nav pill, active sidebar link, CTA button, sub-header active tab |
| `--color-f1-dim` | `#5c1410` | Reserved darker F1 shade (defined, not currently used by any component) |
| `--color-nba` | `#ff6b35` | NBA's brand accent — same usage pattern as `--color-f1` |
| `--color-nba-dim` | `#5c2c14` | Reserved darker NBA shade (defined, not currently used) |
| `--color-mlb` | `#2e7d32` | MLB's brand accent — same usage pattern as `--color-f1` |
| `--color-mlb-dim` | `#143d18` | Reserved darker MLB shade (defined, not currently used) |
| `--color-accent` | `#3ad6c2` | The neutral teal accent — focus ring outline, "eyebrow" labels, info-page links |
| `--color-pulse` | `#3ad6c2` | The logo's animated squiggle color (currently same teal as `--color-accent`) |
| `--color-bg-translucent` | `rgba(250,250,249,0.85)` | The header's semi-see-through background when scrolled |
| `--font-display` | `'Sora', sans-serif` | All headings (`h1`/`h2`/`h3`), nav pills, sidebar titles, CTA button text |
| `--font-body` | `'Manrope', sans-serif` | Default body text — applied to `<html>`/`<body>`, inherited by paragraphs, chart labels |
| `--font-mono` | `'Space Grotesk', monospace` | Small "technical" touches — homepage eyebrow text, featured-card tags, info-page eyebrow |

**Important pairing:** the fonts above only work if they're also loaded in
the `@import` line at the very top of `index.css`. If you change a
`--font-*` variable to a font that isn't in that `@import` URL, the browser
silently falls back to a generic system font instead of erroring.

---

## Part 2 — Every file, every line that uses a variable

This is the full map: for each file, every selector that references a
color/font variable, and what changes on screen if you edit that variable.

### `src/index.css` (base HTML elements, not inside `:root`)

| Selector | Property using a variable | Visual effect if that variable changes |
|---|---|---|
| `html, body` | `background: var(--color-bg)` | Whole-page background color |
| `html, body` | `color: var(--color-text)` | Default text color site-wide |
| `html, body` | `font-family: var(--font-body)` | Default font site-wide (unless overridden) |
| `h1, h2, h3` | `font-family: var(--font-display)` | Every heading's font |
| `p` | `color: var(--color-text-dim)` | Every plain paragraph's color |
| `::-webkit-scrollbar-track` | `background: var(--color-bg)` | Scrollbar track color |
| `::-webkit-scrollbar-thumb` | `background: var(--color-border)` | Scrollbar thumb (default) color |
| `::-webkit-scrollbar-thumb:hover` | `background: var(--color-text-faint)` | Scrollbar thumb color on hover |
| `:focus-visible` | `outline: 2px solid var(--color-accent)` | Keyboard-focus ring color (accessibility) |

### `src/components/Header.css`

| Selector | Property | Effect |
|---|---|---|
| `.site-header` | `background: var(--color-bg-translucent)` | Header bar's see-through background |
| `.site-header` | `border-bottom: 1px solid var(--color-border)` | Thin line under the header |
| `.brand-name` | `font-family: var(--font-display)` | "STATPULSE" wordmark font |
| `.brand-name` | `color: var(--color-text)` | "STAT" portion's color |
| `.brand-pulse` | `color: var(--color-pulse)` | "PULSE" portion's color |
| `.nav-pill` | `font-family: var(--font-display)` | Font of the F1/NBA/MLB header buttons |
| `.nav-pill` | `border: 1px solid var(--color-border)` | Button outline, default state |
| `.nav-pill` | `color: var(--color-text-dim)` | Button text, default (unselected) state |
| `.nav-pill--f1:hover` / `--active` | `color`, `border-color: var(--color-f1)` | F1 button turns red when hovered/selected |
| `.nav-pill--nba:hover` / `--active` | `color`, `border-color: var(--color-nba)` | NBA button turns orange when hovered/selected |
| `.nav-pill--mlb:hover` / `--active` | `color`, `border-color: var(--color-mlb)` | MLB button turns green when hovered/selected |
| `.icon-link` | `color: var(--color-text-faint)` | "About"/"Contact" link color, default |
| `.icon-link:hover` | `color: var(--color-text)` | "About"/"Contact" link color, on hover |

### `src/components/Sidebar.css`

| Selector | Property | Effect |
|---|---|---|
| `.sidebar` | `border-right: 1px solid var(--color-border)` | Vertical divider line next to the sidebar |
| `.sidebar-title` | `font-family: var(--font-display)` | Font of "2025 Calendar" / "2023–24 Season" type labels |
| `.sidebar-title` | `color: var(--color-text-faint)` | Color of that same label |
| `.sidebar-link` | `color: var(--color-text-dim)` | Sidebar item text, default state |
| `.sidebar-link:hover` | `background: var(--color-bg-raised)` | Sidebar item background on hover |
| `.sidebar-link:hover` | `color: var(--color-text)` | Sidebar item text on hover |
| `.sidebar--f1 .sidebar-link--active` | `color`, `border-left-color: var(--color-f1)` | Selected F1 race/category highlight |
| `.sidebar--nba .sidebar-link--active` | `color`, `border-left-color: var(--color-nba)` | Selected NBA category highlight |
| `.sidebar--mlb .sidebar-link--active` | `color`, `border-left-color: var(--color-mlb)` | Selected MLB category highlight |

### `src/components/SubHeader.css` (the F1 season-switcher bar)

| Selector | Property | Effect |
|---|---|---|
| `.sub-header` | `border-bottom: 1px solid var(--color-border)` | Divider under the season-switcher bar |
| `.sub-header` | `background: var(--color-bg-raised)` | Season-switcher bar's background |
| `.sub-header-link` | `color: var(--color-text-faint)` | Season label text, default state |
| `.sub-header-link:hover` | `color: var(--color-text)` | Season label text, on hover |
| `.sub-header--f1 .sub-header-link--active` | `color: var(--color-f1)` | Currently-selected season, text color |
| `.sub-header--nba .sub-header-link--active` | `color: var(--color-nba)` | (defined for symmetry; SubHeader is only used by F1 today) |

### `src/components/ChartGrid.css`

| Selector | Property | Effect |
|---|---|---|
| `.chart-grid-title` | `color: var(--color-text)` | Big page title above the charts (e.g. "Standings") |
| `.chart-section-title` | `color: var(--color-text)` | Section heading text |
| `.chart-section-subtitle` | `font-family: var(--font-body)` | Sub-heading font, when a page has its own title above it |
| `.chart-section-subtitle` | `color: var(--color-text-dim)`, `border-bottom: 1px solid var(--color-border)` | Sub-heading color + divider line |
| `.chart-card` | `background: var(--color-bg-card)` | Each chart's card background |
| `.chart-card` | `border: 1px solid var(--color-border)` | Each chart card's outline |
| `.chart-card:hover` | `border-color: var(--color-text-faint)` | Card outline on hover |
| `.chart-card-label` | `color: var(--color-text-dim)` | Small label above an individual chart |
| `.chart-frame-wrap` | `background: var(--color-bg-raised)` | Placeholder box behind a chart before it loads |
| `.chart-frame-skeleton` | `color: var(--color-text-faint)` | "Loading…" text color |
| `.chart-frame-skeleton` | `background: linear-gradient(... var(--color-bg-raised) ... var(--color-bg-card) ...)` | The shimmering loading animation's two-tone color |

### `src/pages/Home.css`

| Selector | Property | Effect |
|---|---|---|
| `.hero-eyebrow` | `font-family: var(--font-mono)`, `color: var(--color-accent)` | Small teal label above the homepage headline |
| `.cta` | `font-family: var(--font-display)` | Font of the "Explore F1" / "Explore NBA" buttons |
| `.cta--f1` | `background: var(--color-f1)` | "Explore F1" button's solid red fill |
| `.cta--nba` | `border-color`, `color: var(--color-nba)` | "Explore NBA" button's orange outline + text |
| `.featured-card` | `background: var(--color-bg-card)`, `border: 1px solid var(--color-border)` | The two featured-chart cards on the homepage |
| `.featured-card-head h2` | `font-family: var(--font-body)`, `color: var(--color-text)` | Heading text inside each featured card |
| `.featured-tag` | `font-family: var(--font-mono)` | Font of the small "Formula 1 · 2025" / "NBA · 2023–24" pill |
| `.featured-tag--f1` | `color: var(--color-f1)` | That pill's text color, F1 version |
| `.featured-tag--nba` | `color: var(--color-nba)` | That pill's text color, NBA version |
| `.featured-frame` | `background: var(--color-bg-raised)` | Placeholder behind the homepage's two featured charts |
| `.featured-link` | `color: var(--color-text)` | "See full 2025 season →" link, default |
| `.featured-link:hover` | `color: var(--color-accent)` | Same link, teal on hover |
| `.about-teaser` | `border-top: 1px solid var(--color-border)` | Divider above the bio teaser section |
| `.about-teaser h2` | `font-family: var(--font-body)`, `color: var(--color-text)` | Bio teaser heading |
| `.about-teaser-link` | `color: var(--color-accent)` | "More about me →" link color |

### `src/pages/InfoPage.css` (shared by About + Contact)

| Selector | Property | Effect |
|---|---|---|
| `.info-eyebrow` | `font-family: var(--font-mono)`, `color: var(--color-accent)` | Small teal label above "About"/"Contact" page titles |
| `.info-link` | `color: var(--color-accent)` | Inline links inside the About page body text |
| `.contact-card` | `border: 1px solid var(--color-border)`, `background: var(--color-bg-card)` | Each contact-method card (Email, LinkedIn, etc.) |
| `.contact-card:hover` | `border-color: var(--color-accent)` | Card outline turns teal on hover |
| `.contact-card-label` | `font-family: var(--font-display)`, `color: var(--color-text)` | "Email" / "LinkedIn" heading inside each card |
| `.contact-card-sub` | `color: var(--color-text-faint)` | The smaller subtext under each label |

### `src/components/Footer.css`

| Selector | Property | Effect |
|---|---|---|
| `.site-footer` | `border-top: 1px solid var(--color-border)` | Divider above the footer |
| `.site-footer` | `color: var(--color-text-faint)` | Footer text color |
| `.site-footer a:hover` | `color: var(--color-accent)` | Footer email link, teal on hover |

### `src/components/SectionLayout.css`

No color or font variables — this file only controls layout (flex
direction for mobile vs. desktop). Nothing to map here.

---

## Part 3 — Hardcoded colors that exist on purpose (not variables)

These don't use `var(--...)`, and that's intentional — they're tints or
fixed colors that read correctly regardless of light/dark theme, since
they're always paired with their own opaque background. You generally
won't need to touch these, but here's what they are if you ever do:

| File | Line | What it is | Why it's not a variable |
|---|---|---|---|
| `Header.css` | `.nav-pill--f1:hover` background | `rgba(225, 6, 0, 0.08)` — a faint red wash | A translucent *tint* of F1 red, not a flat color — there's no single variable for "F1 red at 8% opacity" |
| `Header.css` | `.nav-pill--nba:hover` background | `rgba(255, 107, 53, 0.08)` | Same idea, NBA orange tint |
| `Header.css` | `.nav-pill--mlb:hover` background | `rgba(46, 125, 50, 0.08)` | Same idea, MLB green tint |
| `Sidebar.css` | `.sidebar--f1/.nba/.mlb .sidebar-link--active` background | Same three tints, slightly different opacity (0.1–0.12) | Same reason — translucent highlight, not a flat fill |
| `SubHeader.css` | `.sub-header--f1/.nba .sub-header-link--active` background | Same red/orange tints again | Same reason |
| `Home.css` | `.cta--f1 { color: #fff; }` | Plain white text | Sits on a solid red button — white text is correct in any theme |
| `Home.css` | `.cta--f1:hover` / `.cta--nba:hover` box-shadow | Red/orange glow tints | Decorative hover glow, not a theme color |
| `Home.css` | `.featured-tag--f1/.nba` background | Red/orange tints again | Same translucent-pill pattern as the nav pills |
| `index.css` | `body` background-image | Two faint radial gradients (teal + red, ~6–7% opacity) | A decorative ambient glow in the corners of the page, not a flat background color |

**The pattern across all of these:** any hardcoded value you see is almost
always `rgba(R, G, B, low-opacity)` — a translucent *tint* used for a hover
state or highlight, layered on top of the real background. None of them are
the literal background or text colors — those always go through variables.

---

## Quick recipes

**"I want to change the whole site's background/text colors"**
→ Edit the seven variables at the top of Part 1's table, in `index.css`.

**"I want to change the whole site's font"**
→ Edit `--font-display` and/or `--font-body` in `index.css`, **and** update
the `@import` URL at the very top of the same file to load the new font
from Google Fonts.

**"I want to change F1's (or NBA's, or MLB's) brand color"**
→ Change `--color-f1` (or `-nba`, `-mlb`) in `index.css`. The solid color
updates everywhere automatically. The faint tinted hover/active backgrounds
(listed in Part 3) are hand-picked `rgba()` versions of the old color, so
update those by hand to match if you want a perfect match — otherwise
they'll just be a slightly different shade of the same color family, which
is usually still fine to leave.

**"I changed a variable and nothing happened"**
→ Check you spelled the variable name exactly right (`var(--color-f1)`, not
`var(--color-F1)` — CSS variable names are case-sensitive). Also check the
element you're looking at isn't one of the Part 3 hardcoded exceptions.
