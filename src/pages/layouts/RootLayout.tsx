import {useEffect} from 'react'

import * as Sentry from '@sentry/react'
import {Outlet} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/react-router-devtools'

import Footer from '@/components/layout/root/Footer.tsx'
import Header from '@/components/layout/root/Header.tsx'

import {useAuth} from '@/hooks/useAuth.ts'

import {minuteInMs} from '@/constants/time'

import {env} from '@/config'

import {refreshAuthData} from '@/handlers/auth.ts'

const RootLayout = Sentry.withProfiler(
    ({}) => {
        const {checkAuth} = useAuth()

        useEffect(() => {
            checkAuth()

            const interval = setInterval(() => {
                refreshAuthData()
            }, minuteInMs * 50)

            return () => clearInterval(interval)
        }, [checkAuth])

        return (
            <>
                <Header/>

                <div className={'relative flex'}>
                    <Outlet/>
                </div>

                <Footer/>

                {env.DEV && <TanStackRouterDevtools/>}
            </>
        )
    })

export default RootLayout
