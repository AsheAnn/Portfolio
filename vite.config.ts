import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from '@unocss/vite'
import presetIcons from '@unocss/preset-icons'
import path from 'path'
import glsl from 'vite-plugin-glsl'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    react(),
    UnoCSS({
      presets: [presetIcons({})]
    }),
    glsl({
      include: [
        '**/*.glsl',
        '**/*.wgsl',
        '**/*.vert',
        '**/*.frag',
        '**/*.vs',
        '**/*.fs'
      ],
      exclude: undefined, 
      warnDuplicatedImports: true, 
      defaultExtension: 'glsl', 
      compress: false, 
      watch: true,
      root: '/' 
    })
  ]
})
