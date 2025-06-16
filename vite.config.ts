import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 8080,
    },
    base: "/alec-portfolio",
    plugins: [
        vue(),
    ],
    optimizeDeps: {
        include: [
            'vue',
            'vue-router'
        ]
    },
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ["legacy-js-api"],
            }
        }
    }
})
