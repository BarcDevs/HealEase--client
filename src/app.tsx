import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from '@tanstack/react-router'
import './styles/index.css'
import ContextProvider from '@/context'
import {sentryInit} from '@/utils/sentry'
import {router} from '@/utils/router'
import {useAuth} from '@/hooks/useAuth.ts'

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

// Sentry Configuration
sentryInit()

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
    const {isLoggedIn} = useAuth()
    return (
        <RouterProvider router={router} context={{
            auth: {isLoggedIn}
        }}/>
    )
}

const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <StrictMode>
            <ContextProvider>
                <App/>
            </ContextProvider>
        </StrictMode>
    )
}
