// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- KYA YEH WAHAN HAI?

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- AUR KYA YEH WAHAN INCLUDED HAI?
  ],
})

