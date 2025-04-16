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
    resolve: {
        alias: {
            '@/': `${path.resolve(__dirname, './src')}`,
        },
    },
    define: {
        __VUE_I18N_FULL_INSTALL__: true,
        __VUE_I18N_LEGACY_API__: false,
        __INTLIFY_PROD_DEVTOOLS__: false,
    },
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
