import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/your-repo-name/', // Make sure this is correct
  plugins: [react()],
  build: {
    outDir: 'docs', // Add this line
  },
});