
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // MUITO IMPORTANTE: usa o nome exato do repositório e com barra final
  base: '/teste/', 
  build: { outDir: 'dist' },
})
