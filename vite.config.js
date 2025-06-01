import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import compression from 'vite-plugin-compression' // Compressing build assets
import viteImagemin from 'vite-plugin-imagemin' // Optimizing images during the build

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    compression({
      algorithm: 'brotliCompress', // or 'gzip'
      ext: '.br',
      deleteOriginFile: false
    }),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 70 },
      svgo: true,
      webp: {
        quality: 75
      },
      avif: {
        quality: 50
      }
    }),
  ],
})
