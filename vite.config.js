import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    open: true,
  },
  // 👇 Add this part to enable SPA fallback
  build: {
    outDir: 'dist'
  },
  // Fix refresh 404 on deep links
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  base: '/', // Good for local dev and GitHub Pages if needed
});
