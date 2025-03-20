import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const resolvePath = (dir) => path.resolve(__dirname, 'src', dir);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@src': resolvePath(''),
      '@components': resolvePath('components'),
      '@context': resolvePath('context'),
      '@pages': resolvePath('pages'),
      '@hooks': resolvePath('hooks'),
    },
  },
})
