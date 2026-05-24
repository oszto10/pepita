import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/pepita/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tickets: resolve(__dirname, 'tickets.html'),
      },
    },
  },
});