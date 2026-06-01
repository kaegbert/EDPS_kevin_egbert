# Kevin Egbert — Personal Portfolio

Static personal website for **EDPS 6560** (Summer 2026), built with plain HTML, CSS, and JavaScript. Deployable on [GitHub Pages](https://pages.github.com/) with no backend.

**Live site:** [kaegbert.github.io/EDPS_kevin_egbert](https://kaegbert.github.io/EDPS_kevin_egbert/)

## Features

- Responsive layout (mobile-first)
- Fixed navigation with mobile menu
- Sections: Hero, About, Projects, Contact
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- Contact form via `mailto:` (no server required)

## Project structure

```
├── index.html    # Entry point
├── styles.css    # All styles
├── script.js     # Navigation, scroll effects, form
├── DESIGN.md     # NVIDIA design system tokens
└── README.md
```

## Local preview

Open `index.html` in a browser, or use a simple local server:

```bash
# Python 3
python -m http.server 8000

# Node (if npx is available)
npx serve .
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Push this repository to GitHub (`kaegbert/EDPS_kevin_egbert` or your fork).
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch `main` (or `master`) and folder **`/ (root)`**.
5. Save. After a minute or two, the site will be live at your Pages URL.

Because `index.html` is at the repository root, GitHub Pages serves it automatically.

## Design system

This snapshot follows the NVIDIA-inspired tokens documented in `DESIGN.md` (from [awesome-design-md](https://github.com/VoltAgent/awesome-design-md)).

## Customize

- Update project cards and links in `index.html`.
- Change colors and fonts in `styles.css` (`:root` variables).
- Replace the placeholder `mailto:` address in `script.js` with your real email.

## License

Coursework portfolio — use and adapt as needed for EDPS assignments.
