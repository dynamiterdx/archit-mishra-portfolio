# Content Management

Keeping the site fresh is mostly about editing MDX, JSON, and the occasional asset. This guide covers how to update each content surface safely.

## Project MDX

Project deep dives live under `content/projects/`. Each file follows the pattern below:

```md
---
title: Agentic Research Notebook
subtitle: Local-first assistant for literature sprints
summary: A notebook app that spins up LangGraph agents to digest papers.
tags: [LangGraph, Next.js, SQLite]
cover: /images/prj-1.svg
repo: https://github.com/architmishrapro/agentic-research-notebook
demoUrl: https://research-notebook-demo.vercel.app
featured: true
order: 18
date: 2024-11-01
---

## Why it exists
The story goes here...
```

### Required fields

- `title` &mdash; Displayed on cards and detail pages.
- `summary` &mdash; Short blurb used for the carousel and `/projects` grid.
- `cover` &mdash; Path to an image under `public/` or a remote URL.
- `date` &mdash; ISO string (`YYYY-MM-DD`); used for sorting if `order` isn’t set.

### Optional fields

- `subtitle`, `repo`, `demoUrl`, `linkOut`, `tags`, `featured`, `order`.
- `featured: false` removes the project from the homepage carousel but keeps it on `/projects`.
- `order` lets you pin certain projects. Higher numbers appear first.

> **Reminder:** After adding new MDX files, restart the dev server so Next.js regenerates cache and static params.

## Project cards (`projects.json`)

`src/data/projects.json` powers the `/projects` overview grid. A lightweight card might look like:

```json
{
  "title": "PromptOps Lab",
  "description": "Open-source CLI + dashboard to regression-test prompts, guardrails, and agent flows.",
  "repo": "https://github.com/architmishrapro/prompt-ops-lab",
  "tags": ["Evaluations", "TypeScript", "CLI"],
  "cover": "/images/prj-2.svg"
}
```

- `demoUrl` can be added if you want a “Open Demo” link on the card.
- Cards can include projects that don’t yet have MDX writeups (great for sandboxes or WIP ideas).

## Skills & Resume flavour

- Progress bars are defined directly in `src/components/Skills.tsx`. Each entry is a `{ name, level, Icon }`.
- The companion “skill stories” cards can be edited in the same file &mdash; change titles, captions, or bullet highlights to match your evolving lab.

## Experience timeline

- `src/components/Experience.tsx` contains an array of roles. Update the `roles` array to tweak copy, add achievements, or reorder positions.
- To hide older roles, comment them out or move them to the end of the array.

## Photography gallery

- Edit `src/data/photos.json` to add or prune photos.
- `src/app/photography/page.tsx` reminds collaborators where to find the JSON file.
- Local images should live under `public/images/`.
- Remote URLs (e.g., Supabase) are fine; the gallery automatically disables Next.js optimisation for absolute URLs.

### Hosting photos on Supabase

If you prefer to keep RAWs or high-res assets off the repo, Supabase Storage works nicely:

1. **Create a bucket**  
   In the Supabase dashboard, open *Storage → Buckets* and create a bucket (e.g., `personal-portfolio`), leaving it public so Next.js can fetch assets without signed URLs.

2. **Upload images**  
   You can drag-and-drop via the dashboard or script it with the Supabase CLI. Organise files however you like; the JSON entries just need the final URL.

3. **Copy the public URL**  
   Supabase gives you a path like  
   `https://<project-ref>.supabase.co/storage/v1/object/public/personal-portfolio/royal-bengal-tiger.jpg`

4. **Reference the URL in `photos.json`**  
   ```json
   {
     "src": "https://<project-ref>.supabase.co/storage/v1/object/public/personal-portfolio/Royal-Bengal-Tiger.jpg",
     "title": "King of the Jungle",
     "album": "Wildlife",
     "tags": ["tiger", "nature"],
     "date": "2023-08-26"
   }
   ```

5. **Optional: set caching headers**  
   For faster loads, set cache-control headers on the bucket (Supabase > Storage > Policies > Public caching). A week (`max-age=604800`) is a good starting point.

JSON structure:

```json
{
  "src": "/images/sample-1.svg",
  "title": "Golden hour",
  "caption": "Light and texture study",
  "location": "Santa Monica, CA",
  "album": "Landscapes",
  "tags": ["sunset", "coast"],
  "date": "2023-08-26"
}
```

## Contact & metadata

- Phone, email, and CTA copy live in `src/components/ConnectBanner.tsx`.
- Default footer contact info is in `src/components/Footer.tsx`.
- Update `src/app/layout.tsx` metadata (title, description, `metadataBase`) before going live on your own domain.

## Static assets

- Place images in `public/images/`.
- SVG logos sit directly under `public/`.
- Tailwind classes expect covers sized roughly 16:9; adjust component styles if you prefer a different aspect ratio.

With content editing sorted, check out the [Customization Playbook](customization.md) for theming tips and deployment considerations.
