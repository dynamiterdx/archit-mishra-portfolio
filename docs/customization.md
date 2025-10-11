# Customization Playbook

This page collects the tweaks you’re likely to make once the portfolio content is set. It covers theming, adding sections, extending data loaders, and prepping for deployment.

## Theming & styling

### Colors and typography

- Global colors live in `src/app/globals.css` under the `:root` and `html.dark` blocks. Adjust `--background`, `--foreground`, or add new CSS variables if you want stronger accent colors.
- Tailwind’s `@theme inline` config maps CSS variables to utility tokens (`--color-background`, `--font-sans`, etc.).
- To switch fonts, replace the `Inter` import in `src/app/layout.tsx`. Example:
  ```ts
  import { Geist } from "next/font/google";
  const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
  ```

### Component-level tweaks

- Most components rely on Tailwind utility classes. If you prefer CSS modules or styled-components, nothing stops you from converting individual components - they’re all client components except the MDX loaders.
- The `Hero` animations use Framer Motion; durations and easing live inline with the `motion.div` components.

## Adding new sections

1. Create a new component in `src/components/`, e.g., `Testimonials.tsx`.
2. Decide whether it runs on the client (`"use client"`) or server. Generally, use client components for interactive bits or hooks.
3. Import and slot it into `src/app/page.tsx` wherever you want in the stack.

```tsx
import Testimonials from "@/components/Testimonials";

// ...
<Experience />
<Testimonials />
<ProjectsShowcase projects={featured} />
```

## Extending data loaders

### New MDX collections

If you want a `/writing` section:

1. Create `content/writing/` and add MDX files with front matter.
2. Add a library similar to `src/lib/projects.ts` - copy it, rename to `writing.ts`, adjust types/paths.
3. Build a route group (`src/app/writing/page.tsx`) that calls `getAllWritingMeta`.

### Additional JSON feeds

- For quick lists (e.g., speaking engagements), add a new JSON file under `src/data/` and create a component to render it.
- TypeScript’s `resolveJsonModule` is enabled, so you can `import talks from "@/data/talks.json";` directly.

## Deployment checklist

1. **Environment variables** &mdash; Not strictly needed unless you add APIs. For MDX-only content, no runtime secrets exist.
2. **`metadataBase`** &mdash; Update the placeholder `https://example.com` in `layout.tsx` to your production domain to keep Open Graph URLs clean.
3. **Remote image domains** &mdash; If you add more remote images, configure `next.config.ts` with `images.remotePatterns`.
4. **Static exports** &mdash; The site runs fine on Vercel or Netlify with SSR. For static export (`next export`), remove any dynamic routes that depend on request-time data (currently none).

## MkDocs integration

- This documentation lives under `docs/` and is MkDocs-friendly. Create a `mkdocs.yml` at the repo root if you want to publish docs on GitHub Pages or Read the Docs.
- Sample `mkdocs.yml`:
  ```yaml
  site_name: Personal Portfolio Docs
  nav:
    - Home: docs/index.md
    - Getting Started: docs/getting-started.md
    - Architecture: docs/architecture.md
    - Content: docs/content.md
    - Customization: docs/customization.md
  theme:
    name: material
  ```

## Useful experiments

- **Swap the theme toggle**: Wire it into Next.js cookies to persist choice between sessions server-side.
- **Add analytics**: Drop Vercel Analytics or Plausible into `layout.tsx` if you need basic tracking.
- **Light/Dark variants**: Use Tailwind’s `dark:` prefix to fine-tune colors in each component.

That’s it! Between this playbook and the rest of the docs, you should be able to reshape the portfolio without getting lost.
