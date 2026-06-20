import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://spirenio.fr',
  build: {
    format: 'directory', // /quiz/niveau-1/ au lieu de /quiz/niveau-1.html
  },
});
