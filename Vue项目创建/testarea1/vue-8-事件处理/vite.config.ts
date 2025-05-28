import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,  // 改用3000端口
    strictPort: false  // 如果端口被占用自动尝试其他端口
  }
})
