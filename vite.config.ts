import { fileURLToPath, URL } from 'node:url'

import { visualizer } from 'rollup-plugin-visualizer'
import tailwindcss from '@tailwindcss/vite'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { SoftonixAutoImportsVue, Resolvers } from '@softonix/vite-plugin-auto-imports-vue'
import svgLoader from 'vite-svg-loader'

import { IconNamesGenerator } from './.config'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    svgLoader(),
    visualizer({
      open: true
    }),
    IconNamesGenerator(),
    SoftonixAutoImportsVue({
      scripts: {
        dirs: ['./src/api/*client.ts'],
        imports: [
          'vue-router',
          '@vueuse/core',
          'pinia',
          'vue-i18n'
        ],
        resolvers: [
          Resolvers.ElementPlusResolver({ importStyle: false })
        ]
      },
      components: {
        resolvers: [
          Resolvers.ElementPlusResolver({ importStyle: false })
        ]
      }
    })
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
