import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  preview: {
    allowedHosts: ['oya.health', 'www.oya.health'],
  },
  server: {
    allowedHosts: ['oya.health', 'www.oya.health'],
  },
});
