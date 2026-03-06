# AGENTS.md

## Cursor Cloud specific instructions

This is a React + TypeScript + Vite portfolio site (single-page app, no backend/database).

**Key commands** (all from repo root):
- Dev server: `npm run dev` (Vite, defaults to port 5173)
- Build: `npm run build` (runs `tsc -b && vite build`)
- Preview production build: `npm run preview`

**Notes:**
- No linter script is configured in `package.json`; use `npx tsc -b` for type-checking.
- No test framework is configured; there are no automated tests.
- The animated Terminal window on the right side of the page types out the developer's bio—it is purely decorative and not a real terminal.
- Dock icons at the bottom open external links (GitHub, LinkedIn, etc.) in new tabs.
