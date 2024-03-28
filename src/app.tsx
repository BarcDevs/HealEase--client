import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import {createRouter, RouterProvider} from '@tanstack/react-router'
import './styles/index.css'
import {routeTree} from './routeTree.gen'
import ContextProvider from '@/context'
import {sentryInit} from '@/utils/sentry.ts'

// Create a new router instance
const router = createRouter({routeTree})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

// Sentry Configuration
sentryInit()

// Render the app
const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <StrictMode>
            <ContextProvider>
                <RouterProvider router={router}/>
            </ContextProvider>
        </StrictMode>
    )
}
