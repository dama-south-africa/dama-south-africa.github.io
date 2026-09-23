// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Live production domain. Currently served on GitHub Pages.
  // When you cut over to https://dama.org.za, change this to that URL and add
  // a public/CNAME file — canonical URLs and the sitemap follow automatically.
  site: 'https://dama-south-africa.github.io',
  integrations: [sitemap()],
});
