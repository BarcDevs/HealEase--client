import {Fragment, StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from '@tanstack/react-router'
import './styles/index.css'
import ContextProvider from '@/context'
import {router} from '@/utils/router'
import {useAuth} from '@/hooks/useAuth.ts'
import {env} from '@/config'

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

// Sentry Configuration
// TODO: fix sentry and re-enable
// existing ERROR:
// "Refused
// to connect to 'https://o4506954726703104.ingest.us.sentry.io/api/4506954741055488/envelope/?sentry_key=94ccf213e00340996348fa63f2605456&sentry_version=7&sentry_client=sentry.javascript.react%2F7.108.0'
// because it violates the following Content Security Policy directive: "default-src 'self'".
// Note that 'connect-src' was not explicitly set, so 'default-src' is used as a fallback.
// env.PROD && sentryInit()

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
    const ReactStrictMode = env.DEV ? StrictMode : Fragment
    root.render(
        <ReactStrictMode>
            <ContextProvider>
                <App/>
            </ContextProvider>
        </ReactStrictMode>
    )
}
