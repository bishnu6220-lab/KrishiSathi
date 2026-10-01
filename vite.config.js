import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Uses relative base so it works on GitHub Pages without renaming repo
export default defineConfig({
  plugins: [react()],
  base: './',
});
