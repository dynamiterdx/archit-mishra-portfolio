# Architecture Tour

This page peels back the layers of the portfolio app, explaining how routing, data, and components interact. It should help you reason about changes or extend the site without spelunking through every file.

## App Router backbone

The project uses the Next.js App Router (`src/app/`). The layout and page files work together like this:

```
app/
├── layout.tsx   # Wraps every route with fonts, navbar, footer, and metadata
├── page.tsx     # The home route (/) - hero, skills, experience, projects, banner
├── projects/
│   ├── page.tsx     # /projects - grid of project cards fed by MDX metadata
│   └── [slug]/      # Dynamic segments compiled from MDX front matter
├── photography/
│   └── page.tsx     # /photography - gallery with filters + lightbox
└── globals.css      # Tailwind v4 base + theme tokens
```

### `layout.tsx`

- Imports the Inter font and applies a CSS variable for Tailwind `@theme`.
- Wraps the app in a flex column so the footer sticks to the bottom.
- Renders `<Navbar />` and `<Footer />` globally (footer hides on the home page via `usePathname` logic inside the component).
- Sets base metadata (`title`, `description`, `metadataBase`).

### `page.tsx` (Home)

```tsx
export default async function Home() {
  const featured = await getFeaturedProjects();
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <ProjectsShowcase projects={featured} />
      {/* ... */}
    </>
  );
}
```

- Fetches featured projects via `getFeaturedProjects`, which reads MDX front matter (more on that below).
- Renders sections in sequence. Each section is its own component in `src/components/`.
- Includes a highlight block (“Why partner with me?”) before the contact banner.

## Data & content flow

### Projects (MDX)

- MDX lives under `content/projects/*.mdx`.
- Each file requires a front matter block (`title`, `summary`, `tags`, `cover`, `date`, etc.).
- `src/lib/projects.ts` handles:
  - Reading files via `fs/promises`.
  - Parsing front matter with `gray-matter`.
  - Sorting and filtering (featured, order, latest).
  - Compiling MDX on demand with `next-mdx-remote/rsc`, `remark-gfm`, and `rehype-slug`.
- `getAllProjectsMeta` returns typed metadata so both the carousel and `/projects` grid can render quickly without compiling MDX.

### Quick data (JSON)

- `src/data/projects.json` &mdash; Fills the project card grid on `/projects`. These entries can diverge from MDX details if you want lighter-weight cards or sandboxes.
- `src/data/photos.json` &mdash; Feeds the photography gallery. Each entry includes `album`, `tags`, and optional remote/local image URLs.
- `src/data/profile.json` &mdash; Supplies the hero portrait path.

### Static assets

- All images live under `public/`.
- Next.js `next/image` handles optimisation. Remote URLs (e.g., Supabase) use the `unoptimized` flag in `PhotoCard` to avoid proxying.

## Component highlights

| Component | Responsibility | Notes |
| --------- | -------------- | ----- |
| `Hero` | Animated landing section with CTA buttons | Uses Framer Motion, reads profile image from JSON |
| `Skills` | Progress bars + “skill stories” cards | Mix of `react-icons` Simple Icons + Font Awesome |
| `Experience` | Timeline of audit-grade work | Uses fragments to align left/right columns |
| `ProjectsShowcase` | Horizontal carousel with scroll snapping | Accepts `ProjectMeta[]`, supports repo/external links |
| `PhotoGallery` | Filterable grid with lightbox | Keyboard accessible; filters by album/tag |
| `ConnectBanner` | Dark footer banner with CTA | Hides the default light footer on the home page |

## Styling & theming

- Tailwind v4’s `@import "tailwindcss";` and `@theme inline` provide variables.
- Dark mode toggled by adding `.dark` class to `<html>` via a simple hook (`ThemeToggle` component).
- Utility classes handle most spacing/typography; extra custom CSS is minimal (animations and helper classes).

## Deployment posture

- No server components require custom runtimes; can be deployed on Vercel, Netlify, or any Node-friendly host.
- External dependencies: none at runtime aside from font fetching and remote images if used.
- The `metadataBase` in `layout.tsx` should be updated to your actual domain before going live.

With the architecture under your belt, continue to [Content Management](content.md) to learn how to keep projects, skills, and photography up to date.
