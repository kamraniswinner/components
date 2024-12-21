import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for a React project
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      // Ensure that JavaScript files are processed as JSX when necessary
      loader: {
        '.js': 'jsx',
      },
    },
  },
  build: {
    outDir: 'dist', // Specify the output directory
    sourcemap: true, // Enable sourcemaps for debugging
  },
  server: {
    port: 3000, // Dev server port
    open: true, // Open browser on server start
  },
});

