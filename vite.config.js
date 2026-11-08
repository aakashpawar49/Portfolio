import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // `@/` points at src/, e.g. import Reveal from '@/components/motion/Reveal'
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
