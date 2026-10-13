# MJP.Tex — website (React + Tailwind CSS)

Vite + React 19 + Tailwind CSS v4 + React Router.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production files in dist/
```

## Structure
- `src/index.css` — Tailwind import, brand colours (`@theme`), all keyframe animations
- `src/components.jsx` — header, footer, shorts illustration, clouds, stars, shared links
- `src/pages/` — Home, Products, About, Contact
- `src/main.jsx` — routes

Contact details, WhatsApp and Meesho links live at the top of `src/components.jsx`.

## Deploying
It's a single-page app, so the host must send every route to `index.html`
(Vercel does this automatically for Vite; on Netlify add a `_redirects` file with `/* /index.html 200`).
