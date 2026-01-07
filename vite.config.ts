import { sentryVitePlugin } from '@sentry/vite-plugin'
import path from 'path'
import react from '@vitejs/plugin-react'
import million from 'million/compiler'
import { defineConfig } from 'vite'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        TanStackRouterVite(),
        million.vite({ auto: true }),
        sentryVitePlugin({
            org: 'barcdevs',
            project: 'javascript-react'
        })
    ],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },

    build: {
        sourcemap: true
    },

    optimizeDeps: {
        include: ['@tanstack/react-router']
    }
})
