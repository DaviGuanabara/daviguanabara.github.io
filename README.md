# davi-guanabara.github.io

Personal portfolio website built with Vue 3, Vite, TypeScript, Tailwind CSS, Vue Router, and Heroicons.

## Features

- Responsive layout
- Dark mode by default with localStorage persistence
- Lightweight animations using CSS only
- GitHub Pages friendly routing fallback
- SEO-oriented metadata and semantic structure

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub Pages

This repository deploys with GitHub Actions.

- Every push to `main` runs the production build
- The generated `dist/` folder is uploaded as the Pages artifact
- GitHub Pages should be configured to use `GitHub Actions` as its source
- The published project URL is `https://daviguanabara.github.io/davi-guanabara.github.io/`
