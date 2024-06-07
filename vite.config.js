import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/musicians': {
        target: 'http://localhost:8080',
        //changeOrigin: true,
        rewrite: (path) => path.replace(/^\/musicians/, ''),
      },
    },
  },
});