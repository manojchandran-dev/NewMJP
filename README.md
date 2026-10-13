# MJP.Tex — website (Next.js + Tailwind CSS)

Next.js 16 (App Router) + React 19 + Tailwind CSS v4.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build in .next/
npm start        # serve the production build
```

## Structure
- `src/app/layout.jsx` — page shell: font, metadata, header, footer
- `src/app/page.jsx` — Home; `src/app/{products,about,contact}/` — the other pages
- `src/app/globals.css` — Tailwind import, brand colours (`@theme`), all keyframe animations
- `src/app/icon.svg` — favicon
- `src/components.jsx` — footer, logo, shorts illustration, clouds, stars, shared links
- `src/Header.jsx` — header and nav (client component: highlights the current page)

Contact details, WhatsApp and Meesho links live at the top of `src/components.jsx`.

## Deploying
Deploy to Vercel as-is. Every page is pre-rendered as static HTML.
