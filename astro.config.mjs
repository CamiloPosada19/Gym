import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://camiloposada19.github.io',
  base: '/Gym',
  integrations: [tailwind({ applyBaseStyles: false })],
  server: {
    host: true,
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
