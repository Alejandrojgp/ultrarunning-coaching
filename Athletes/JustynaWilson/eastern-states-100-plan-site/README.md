# Eastern States 100 — Justyna Wilson Race Plan

A self-contained static site presenting one race plan in three brand voices, plus the
underlying athlete race histories. No build step — every page is plain HTML.

## Entry point
`index.html` — the Overview. Links out to all three brand treatments, the comparison
canvas, and both athletes' race-history pages.

## Pages
- `index.html` — Overview / landing
- `far-horizon-plan.html` — Far Horizon Endurance (dossier)
- `endurance-method-plan.html` — Endurance Method (platform dashboard)
- `beyond-finish-lines-plan.html` — Beyond Finish Lines (letter)
- `Eastern States 100 Race Plan.html` — side-by-side comparison canvas
- `race-history/justyna-wilson.html` — Justyna's full race history (engine input)
- `race-history/kaylee-frederick.html` — Kaylee's race history (rival benchmark)

The three brand pages and the comparison canvas render via React + Babel loaded from a
CDN at runtime, reading their content from the sibling `*-es100.jsx` / `*.jsx` files.
An internet connection is required for the CDN libraries to load.

## Deploy

### Vercel
No configuration needed — it's a static site.
1. Push this folder to a Git repo.
2. Import the repo in Vercel. Framework preset: **Other**. Build command: none.
   Output directory: `.` (the repo root).

### GitHub Pages
1. Push this folder to a repo.
2. Settings → Pages → deploy from branch, root.

## Web Analytics (Vercel)

This is a static HTML site, so the npm package / `@vercel/analytics/next` import
(the Next.js path) does **not** apply. Each page already includes the HTML snippet:

```html
<script defer src="/_vercel/insights/script.js"></script>
```

To turn it on:
1. In the Vercel dashboard, open the project → **Analytics** tab → **Enable**.
   This makes Vercel serve `/_vercel/insights/script.js` from your domain.
2. Redeploy (any push triggers it).
3. Visit the live site and click between pages. Page views appear within ~30s.
   If nothing shows, disable any ad/content blocker and try again.

Analytics only reports from the deployed Vercel URL — it will not log when the
files are opened locally (`file://`) or from a non-Vercel host.

> Filenames contain spaces (e.g. `Eastern States 100 Race Plan.html`). These are
> URL-encoded automatically by the in-page links and work on both hosts; if you prefer,
> rename that file to `comparison.html` and update the link in `index.html`.
