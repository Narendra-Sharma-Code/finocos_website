import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Final Vite config for Vercel / GitHub Pages / Netlify
export default defineConfig({
  base: './', // IMPORTANT: prevents white screen
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true, // optional but recommended
  },
  server: {
    port: 3000,
    open: true,
  },
});
