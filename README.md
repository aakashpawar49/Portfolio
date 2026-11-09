# Aakash Pawar — Portfolio

Personal portfolio of Aakash Pawar, full-stack engineer building AI-integrated web applications.

**Live:** https://portfolio-three-alpha-64bztk8gkp.vercel.app/

Built with React 19, Vite, Tailwind CSS v4, [Motion](https://motion.dev) (scroll and pointer animation) and [Lenis](https://lenis.darkroom.engineering) (smooth scrolling).

## Getting started

Requires Node.js 20.19+ or 22.12+ (Vite 7).

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # ESLint
```

## Project structure

```
.
├── index.html              # HTML shell: meta tags, fonts, favicon
├── public/                 # Copied as-is to the site root
│   ├── favicon.svg
│   └── assets/AakashPawar_Resume.pdf   # served at /assets/AakashPawar_Resume.pdf
└── src/
    ├── main.jsx            # Entry point
    ├── App.jsx             # Page composition: layout + sections in order
    ├── styles/
    │   └── index.css       # Tailwind import, theme tokens (@theme), global effects
    ├── data/               # All site content: edit these to update text
    │   ├── profile.js      #   name, hero, about, highlights, links, navigation
    │   ├── projects.js     #   projects (isMajor: true = featured card)
    │   ├── skills.js       #   technical and soft skills
    │   └── achievements.js #   hackathons and certifications
    ├── sections/           # One folder per page section, with its private components
    │   ├── hero/           #   Hero.jsx, CodeWindow.jsx
    │   ├── marquee/        #   Marquee.jsx
    │   ├── about/          #   About.jsx
    │   ├── projects/       #   Projects.jsx, ProjectCard.jsx
    │   ├── achievements/   #   Achievements.jsx
    │   └── contact/        #   Contact.jsx
    ├── components/         # Shared components, used by more than one section
    │   ├── layout/         #   Navbar, Footer
    │   ├── motion/         #   animation and interaction primitives (Reveal, Magnetic, Counter, ...)
    │   └── ui/             #   presentational pieces (SectionHeading, SocialLinks, Accent, RichText)
    ├── hooks/              # useLenis, useActiveSection, useMediaQuery
    └── lib/                # Small shared helpers and constants (motion easing)
```

### Conventions

- **Content lives in `src/data/`.** Sections read from these files, so most text changes never touch a component.
- **Imports use the `@/` alias** for `src/`, e.g. `import Reveal from '@/components/motion/Reveal'` (configured in `vite.config.js` and `jsconfig.json`).
- **A component used by one section lives in that section's folder.** Move it to `components/` once a second section needs it.
- **Components are PascalCase `.jsx`; hooks are `useX.js`; folders are lowercase.**
- **Theme colours and fonts are CSS tokens** in `src/styles/index.css` (`@theme`), used as Tailwind classes such as `bg-ink`, `text-muted`, `text-accent`. Tailwind v4 does not read a `tailwind.config.js`.
- **Animations respect `prefers-reduced-motion`.**

## Branches and deployment

| Branch        | Purpose                                                    |
| ------------- | ---------------------------------------------------------- |
| `main`        | Production. Every push deploys to Vercel.                  |
| `development` | Day-to-day work. Merge into `main` when ready to release.  |

Vercel builds with `npm run build` and serves `dist/`. The project's **Root Directory** setting must be the repository root (`./`).
