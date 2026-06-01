# Kevin Egbert — Personal Portfolio

Static personal website for **EDPS 6560** (Summer 2026), built with plain HTML, CSS, and JavaScript. Deployable on [GitHub Pages](https://pages.github.com/) with no backend.

**Live site:** [kaegbert.github.io/EDPS_kevin_egbert](https://kaegbert.github.io/EDPS_kevin_egbert/)

**Neolithia** (timeline game): [kaegbert.github.io/neolithia](https://kaegbert.github.io/neolithia/)

## Features

- Responsive layout with fixed sidebar navigation
- Home (projects) and About pages
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- Neolithia project links to the standalone game repo

## Project structure

```
├── index.html          # Home / projects
├── about.html          # About
├── neolithia/          # Redirect to the live game
├── assets/             # Images
├── styles.css
├── script.js           # Navigation and scroll effects
└── README.md
```

## Local preview

Open `index.html` in a browser, or use a simple local server:

```bash
# Python 3
python3 -m http.server 8000

# Node (if npx is available)
npx serve .
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Push this repository to GitHub (`kaegbert/EDPS_kevin_egbert` or your fork).
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch `main` and folder **`/ (root)`**.
5. Save. After a minute or two, the site will be live at your Pages URL.

Because `index.html` is at the repository root, GitHub Pages serves it automatically.

## Customize

- Update project links in `index.html`.
- Edit copy and portrait in `about.html`.
- Change colors and fonts in `styles.css` (`:root` variables).

## License

Coursework portfolio — use and adapt as needed for EDPS assignments.
