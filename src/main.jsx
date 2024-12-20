/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
) */

  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  import { fileURLToPath } from 'url';
  import { dirname } from 'path';
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  
  export default defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': `${__dirname}/src`,
      },
    },
  });
  
