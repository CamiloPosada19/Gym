import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://clubchidaoba.com',
  base: '/',
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
