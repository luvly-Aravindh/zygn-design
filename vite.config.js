import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // 👈 sets your deployment base URL
  server: {
    proxy: {
      '/zygn/php': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/zygn\/php/, '')
      }
    }
  }
})
