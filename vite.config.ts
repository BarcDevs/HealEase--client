import million from 'million/compiler'
import path from 'path'
import { defineConfig } from 'vite'

import { sentryVitePlugin } from '@sentry/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import react from '@vitejs/plugin-react'

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
