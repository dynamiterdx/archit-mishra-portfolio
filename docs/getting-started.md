# Getting Started

This guide helps you install dependencies, run the site locally, and understand the top-level project layout. Even if you're already fluent with Next.js, skim the project structure section to see where content lives.

## Prerequisites

- **Node.js 18+** (Next.js 15 requires Node 18.17 or newer).  
  Check your version:
  ```bash
  node --version
  ```
- **npm** (ships with Node). Yarn, pnpm, or Bun will also work, but the scripts here assume npm.

## Installation

Clone the repo and install packages:

```bash
git clone https://github.com/yourname/personal-portfolio.git
cd personal-portfolio
npm install
```

> **Tip:** The repo uses `react`/`react-dom` 19.1 and Next.js 15.5, so let npm resolve peer dependencies automatically. No need for `--legacy-peer-deps`.

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Starts Next.js in development mode at http://localhost:3000 |
| `npm run dev:clean` | Deletes the `.next` folder before launching dev mode (helpful if Next.js caches get cranky) |
| `npm run build` | Type-checks and compiles the production build |
| `npm run start` | Serves the production build on port 3000 |
| `npm run lint` | Runs ESLint with the Next.js config |

## Project structure

```
├── src
│   ├── app
│   │   ├── layout.tsx        # Root layout, fonts, metadata, nav + footer
│   │   ├── page.tsx          # Home page that stitches together hero, skills, etc.
│   │   ├── photography/      # Route for the photography gallery
│   │   └── projects/         # Project listing + dynamic [slug] detail pages
│   ├── components            # Reusable UI blocks (Hero, Skills, Navbar...)
│   ├── data                  # JSON data for profile, photos, project cards
│   └── lib                   # Utility libraries (MDX loader, slug helpers)
├── content
│   └── projects              # MDX files for rich project writeups
├── public                    # Static assets (images, logos, etc.)
├── docs                      # This documentation set (MkDocs-friendly)
├── eslint.config.mjs         # Flat-config ESLint setup
├── next.config.ts            # Next.js config (currently minimal)
├── package.json
└── tailwind/postcss configs
```

## Development workflow

1. Run `npm run dev`.
2. Visit http://localhost:3000.
3. Edit files in `src/` &ndash; Next.js will hot-reload.
4. Update MDX/JSON content as needed; most changes show up instantly. When editing MDX front matter, restart dev server if new metadata fields are introduced.

## Troubleshooting

- **"Element type is invalid" in dev**  
  Double-check that any icon or component imports actually exist. For example, `react-icons/si` doesn’t provide Azure-specific icons, so use Font Awesome alternatives (`react-icons/fa6`) instead.

- **MDX page 500 errors**  
  Usually caused by missing front matter fields. The loader expects `title`, `summary`, `date`, etc. See [Content Management](content.md#project-mdx) for the required shape.

- **Fonts look off**  
  The app currently loads the Inter font via `next/font/google`. If the network request fails, you’ll fall back to the system sans-serif stack.

With the environment ready, head to [Architecture Tour](architecture.md) to understand how routes, layout, and data loading are wired up.
