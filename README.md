# Henry Carmenate — Portfolio

Single-page portfolio built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/): dark “tech-lux” layout, scroll reveals, and static export for fast hosting.

**Live site:** [henrycarmenate.com](https://henrycarmenate.com)

## Project structure

```
src/
├── components/       # Page sections (Hero, Projects, Contact, etc.)
├── layouts/
│   └── Layout.astro  # HTML shell, SEO meta, JSON-LD, favicon links
├── pages/
│   ├── index.astro   # Homepage
│   └── robots.txt.ts # Generated /robots.txt (sitemap link)
└── styles/
    └── global.css    # Theme variables and global styles

public/
├── favicon/          # ICO / PNG / apple-touch icons
├── og/
│   └── og-share.png  # Open Graph / Twitter preview image
├── site.webmanifest
```

Root config: `astro.config.mjs`, `tailwind.config.js`, `netlify.toml`, `.env.example`.

## Requirements

- **Node.js** 20.x (aligned with `netlify.toml`)

## Commands

```bash
npm install
npm run dev      # http://localhost:4321 (default Astro port)
npm run build    # output in dist/
npm run preview  # serve dist/ locally
```

## Environment

Canonical URLs, sitemap, and Open Graph use the site origin from `astro.config.mjs` (default `https://henrycarmenate.com`). To override (for example preview deployments), set:

```bash
PUBLIC_SITE_URL=https://henrycarmenate.com
```

Copy `.env.example` to `.env` locally if you need a non-default origin.

## SEO

- Meta description, Open Graph, Twitter cards, `canonical`, `theme-color`, `robots` (`index, follow` by default; optional `noindex` via layout props).
- `@astrojs/sitemap` emits `sitemap-index.xml` in `dist/` at build time.
- `Person` JSON-LD in `Layout.astro`.
- **`og-share.png`:** replace the file under `public/og/` if you change the share image; then update `OG_IMAGE_WIDTH` and `OG_IMAGE_HEIGHT` in `Layout.astro` so they match the new PNG pixel size (recommended ratio for many networks is around **1200×630**).

## Deployment

The build is static (`output: 'static'` in `astro.config.mjs`).

- **Netlify:** `netlify.toml` defines `npm run build` and publish directory `dist/`. Connect the repo, add custom domain `henrycarmenate.com`, and enable HTTPS.
- **Vercel / Cloudflare Pages:** same build command and `dist` output; set `PUBLIC_SITE_URL` if the preview hostname should drive metadata.

After deploy, validate `/robots.txt`, `/sitemap-index.xml`, and use Facebook / LinkedIn sharing debug tools if link previews look off.

## Customize content

Edit files in `src/components/` for copy, links, and sections. Global palette and motion live in `src/styles/global.css`.

## Pendientes (producto y ops)

- **Formulario “Quick message”** (`Contact.astro`): hoy solo hace `preventDefault()`; falta integrar un proveedor (Formspree, Basin, etc.) u ocultar el bloque hasta tener backend.
- **Proyectos** (`Projects.astro`): demos / notas marcadas “In progress” y copy de features en marcha; actualizar cuando haya enlaces públicos.
- **Imagen OG:** sustituir `public/og/og-share.png` por un asset ~**1200×630** y actualizar `OG_IMAGE_WIDTH` / `OG_IMAGE_HEIGHT` en `Layout.astro`.
- **Deploy:** conectar repo al hosting (p. ej. Netlify), DNS para `henrycarmenate.com`, variable `PUBLIC_SITE_URL` si usas previews con otro dominio; validar compartidos en redes y opcionalmente Search Console.
- **Git:** asegurar repositorio remoto y flujo de despliegue continuo si aún no están definidos.

## License

© 2026 Henry Carmenate. All rights reserved.

## Contact

- **Email:** [henrycarmenateg@gmail.com](mailto:henrycarmenateg@gmail.com)
- **Phone:** [+1 (786) 316-5465](tel:+1-786-316-5465)
- **LinkedIn:** [linkedin.com/in/henry-carmenate](https://www.linkedin.com/in/henry-carmenate/)
- **GitHub:** [github.com/hhcarmenate](https://github.com/hhcarmenate)
