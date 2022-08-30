import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, path.resolve(__dirname, '..'), '');

  return ({
    plugins: [react()],
    envDir: "..",
    server: { port: +env.FRONTEND_PORT || 3001 },
  })
})
