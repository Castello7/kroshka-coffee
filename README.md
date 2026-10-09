# Kroshka — Design Club Portfolio Project

A responsive café website included in my school Design Club portfolio. The project brings together interface design, frontend development and AI-assisted prototyping in a working, multilingual website.

**[View the live website](https://castello7.github.io/kroshka-coffee/)**

## School activity context

Design Club was a student-led web-design club at Secondary School No. 220. I founded the club and, together with a friend, helped newcomers learn to design websites and develop their own projects.

| Activity | Details |
|---|---|
| Club | Design Club |
| School | Secondary School No. 220 |
| My club role | Founder |
| Club period | March 1 – May 21, 2026 |
| Attendance | Approximately 6–12 students per meeting; attendance varied |
| Learning focus | UI/UX, frontend fundamentals, Figma and other design platforms |
| Club outcomes | Three completed student learning projects |
| Current Kroshka website implementation and publication | October 2026 |

Club members learned for their own development and built personal learning projects. The club combined peer guidance with practical exploration of design tools and AI-assisted website creation. The current version of Kroshka presents those interests as a publicly accessible portfolio project.

## My contribution to this portfolio project

- Selected the café concept and directed its visual style toward a professional, minimalist interface.
- Reviewed layouts, photography, copy and interaction details through several iterations.
- Defined the requested features: multilingual content, a dark theme, coffee recommendations and restrained motion.
- Organized the project for publication on GitHub and GitHub Pages.

The current implementation was developed with AI assistance using Codex. Figma and other design platforms describe the club's learning activities; this repository contains HTML, CSS and vanilla JavaScript.

## Website features

- Coffee, specialty drink and bakery menu categories.
- Drink descriptions in keyboard-accessible dialogs.
- A barista-style recommendation receipt based on taste, milk and sweetness preferences.
- Price calculation that includes the selected plant-based milk supplement.
- Russian, Uzbek and English language options.
- Light and dark themes, with language, theme and coffee preferences saved locally.
- Responsive images and layouts, visible keyboard focus and reduced-motion support.

## Design approach

The café identity uses warm paper tones, deep green, large coffee photography and quiet typography. The menu appears before the recommendation form so visitors can find prices quickly. The interactive receipt gives the site a detail specific to the coffeehouse concept.

## Run locally

With Python 3 installed, run this command from the repository root:

```sh
python3 -m http.server 8000 --directory site
```

Open http://localhost:8000. No npm installation or build step is required.

## Deployment and project structure

GitHub Actions publishes the contents of `site/` to GitHub Pages when `main` changes. The site uses the standard GitHub Pages address with HTTPS.

| Path | Purpose |
|---|---|
| `site/index.html` | Page content and structure |
| `site/*.css` | Visual styling, responsive layouts and motion |
| `site/script.js` | Menu categories and navigation between tabs |
| `site/coffee.js` | Recommendations, price calculation and drink dialogs |
| `site/preferences.js` | Translations, language selection and theme preferences |
| `site/assets/` | Website photographs |
| `.github/workflows/pages.yml` | Automatic publication |

## Project scope

Kroshka is an educational café concept. Online ordering, payments and real café contact details are not connected. Preferences are stored in the visitor's browser using localStorage. Fonts load from Google Fonts with system-font fallbacks.
