import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import kuma from '@kuma-ui/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), kuma()],
})
