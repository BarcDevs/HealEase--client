import { useEffect } from 'react'

import * as Sentry from '@sentry/react'
import { Outlet } from '@tanstack/react-router'
import {
    TanStackRouterDevtools
} from '@tanstack/react-router-devtools'

import { useAuth } from '@/hooks/useAuth.ts'

import { minuteInMs } from '@/constants/time'

import { env } from '@/config'

import { refreshAuthData } from '@/handlers/auth.ts'

const RootLayout = Sentry.withProfiler(
    ({}) => {
        const { checkAuth } = useAuth()

        useEffect(() => {
            const initAuth = async () => {
                await checkAuth()
                await refreshAuthData()
            }

            initAuth()

            const interval = setInterval(() => {
                refreshAuthData()
            }, minuteInMs * 50)

            return () => clearInterval(interval)
        }, [checkAuth])

        return (
            <>
                <div>
                    <Outlet/>
                </div>

                {env.DEV && <TanStackRouterDevtools/>}
            </>
        )
    })

export default RootLayout
