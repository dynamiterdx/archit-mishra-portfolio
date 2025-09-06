## Summary

Migrate personal portfolio to a Next.js App Router app and apply the Ocean Sunset palette with light/dark themes. Split into dedicated pages for Data Science and Photography, add an About section, resume link, and a recruiter JD box.

## Changes

- Next.js app scaffold with app router and global theme
- Pages: Home (`/`), Data Science (`/datascience`), Photography (`/photography`)
- Ocean Sunset palette with palette-aware variables and header theme toggle
- About Me, Technical Expertise, Skills, Resume link
- "Am I Fit For Your Job?" JD paste box (copy, download, email compose)
- Data-driven content: `data/projects.json`, `data/photos.json`
- Assets moved to `public/` and placeholder images updated

## How to Run

```bash
npm install
npm run dev
open http://localhost:3000
```

## Notes

- Photography page uses a pastel variant of the palette.
- Theme preference persists via localStorage.

