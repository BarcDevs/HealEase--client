import million from 'million/compiler'
import path from 'path'
import { defineConfig } from 'vite'

import { sentryVitePlugin } from '@sentry/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    server:{
        port: 5173,
        host: true,
    },
    plugins: [
        react(),
        tailwindcss(),
        tanstackRouter(),
        million.vite({ auto: true }),
        process.env.NODE_ENV === 'production' &&
        sentryVitePlugin({
            org: 'barcdevs',
            project: 'javascript-react',
            telemetry: false
        })
    ].filter(Boolean),

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
