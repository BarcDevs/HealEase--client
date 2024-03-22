import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import {createRouter, RouterProvider} from '@tanstack/react-router'
import * as Sentry from '@sentry/react'
import './styles/index.css'

// Import the generated route tree
import {routeTree} from './routeTree.gen'
import ContextProvider from '@/context'
import config from '@/config'

// Create a new router instance
const router = createRouter({routeTree})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

// Sentry Configuration
Sentry.init({
    dsn: 'https://94ccf213e00340996348fa63f2605456@o4506954726703104.ingest.us.sentry.io/4506954741055488',
    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.metrics.metricsAggregatorIntegration(),
        // @ts-expect-error
        Sentry.reactRouterV6BrowserTracingIntegration({
            useEffect
        }),
        Sentry.replayIntegration({
            maskAllText: false,
            blockAllMedia: false
        })
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0,
    tracePropagationTargets: [config.hostname, config.serverUrl + '/api/*'],
    // Session Replay
    replaysSessionSampleRate: config.replaysSessionSampleRate,
    replaysOnErrorSampleRate: 1.0
})

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
