import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assanad": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "./docs"), // Github pages "www" folder
  },
})
