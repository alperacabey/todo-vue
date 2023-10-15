import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const port = 3000;

export default defineConfig({
  server: { port },
  plugins: [vue()],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
})
