import { fileURLToPath, URL } from 'node:url';

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
      alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      scss: {
        sourceMap: false
      },
      sass: {
        sourceMap: false
      }
    }
  },
  build: {
    sourcemap: false
  },
  server: {
    sourcemapIgnoreList: () => true
  }
});