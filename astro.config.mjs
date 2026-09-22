// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Final production domain. Only affects sitemap/canonical URLs, not the look.
  // While previewing on Cloudflare you can temporarily set this to your
  // *.pages.dev URL, then switch back to the custom domain at cutover.
  site: 'https://dama.org.za',
});
