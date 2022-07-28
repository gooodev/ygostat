import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default () =>
  defineConfig({
    base: './',
    server: {
      port: 3000,
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
    },
  });
