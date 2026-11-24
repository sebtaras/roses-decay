// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// Hosted on GitHub Pages at https://sebtaras.github.io/roses-decay/
// If you move to a custom domain (e.g. rosesdecay.com), set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://sebtaras.github.io',
  base: '/roses-decay',
  trailingSlash: 'always',
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});
