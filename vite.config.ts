import { defineConfig } from 'vite'

export default defineConfig({
  // Serve the index.html directly as the entry point
  root: './',
  // Build configuration for static HTML/CSS/JS
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  // Server configuration
  server: {
    port: 8080,
    open: true
  }
})