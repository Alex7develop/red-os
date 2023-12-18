import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Alex7develop/',
  build: {
    target: 'es2015',
  },
});
