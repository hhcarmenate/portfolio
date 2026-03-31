import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Override with PUBLIC_SITE_URL in .env or the hosting dashboard (e.g. preview URLs) — HTTPS, no trailing slash.
const site = (process.env.PUBLIC_SITE_URL ?? 'https://henrycarmenate.com').replace(/\/$/, '');

export default defineConfig({
  site,
  integrations: [tailwind(), sitemap()],
  output: 'static',
});
