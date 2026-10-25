# Mohamed Saad Bazourhi — QA Portfolio

A single-page, responsive engineering portfolio inspired by the **night-time neon palette** of *Drive*: almost-black navy, electric magenta, cool cyan and restrained neon glow. This design does **not** reuse film imagery. Its visuals are custom HTML/CSS diagrams of a QA workflow, traceability matrix, execution report, and validation ring.

## Run locally

Open `index.html` in a modern browser. No build tools or dependencies are required. For local-server testing:

```bash
cd drive-qa-portfolio
python3 -m http.server 8000
```

Visit http://localhost:8000.

## Included

- Sticky header, active-section navigation, and mobile menu
- Hero, About, Projects, Approach, Credentials, and Contact sections
- Scroll-reveal interactions, progress bar, hover detail, and reduced-motion support
- Direct GitHub links to all four project repositories
- Downloadable CV (`assets/Bazourhi-CV.pdf`)
- Functional email contact using `mailto:` (no fake backend/contact form)
- No stock imagery or fabricated product screenshots

## Before publishing

- Verify every displayed project metric against the latest repository. Agentic QA metrics represent a **recorded example** and intentionally do not equate generated scripts with passing browser tests.
- Replace the LinkedIn discovery URL in `index.html` with your exact personal LinkedIn profile URL.
- Optionally replace the project-themed CSS illustrations with authentic captures from your QA dashboards.
- Host on GitHub Pages, Cloudflare Pages, or Netlify (static site).

## Color palette

- Background: `#030815`
- Panels: `#081522`
- Electric pink: `#ff3899`
- Bright cyan: `#1ae2e6`
- Mint: `#68efd5`

All content is editable in `index.html`; all design rules live in `styles.css`.


## Bilingual update
The EN / FR buttons in the header switch the website language without reloading. The selection is remembered in the browser when local storage is available. The Research & Publication section links to the Springer chapter DOI 10.1007/978-3-032-28094-7_17. To edit translations, use the `french` dictionary at the end of `script.js`.
