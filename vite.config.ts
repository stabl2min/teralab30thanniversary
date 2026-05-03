import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
    base: '/teralab30thanniversary/',
    plugins: [
          viteTsConfigPaths({
                  projects: ['./tsconfig.json'],
          }),
          tailwindcss(),
          tanstackStart({
                  target: 'static',
          }),
          viteReact(),
        ],
})

export default config
