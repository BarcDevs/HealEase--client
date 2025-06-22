import * as Sentry from '@sentry/react'
import {env} from '@/config'
import {Outlet} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'
import Header from '@/components/layout/root/Header.tsx'
import Footer from '@/components/layout/root/Footer.tsx'
import {useAuth} from '@/hooks/useAuth.ts'
import {refreshAuthData} from '@/handlers/auth.ts'
import {useEffect} from 'react'

const RootLayout = Sentry.withProfiler(
    ({}) => {
        const {checkAuth} = useAuth()

        useEffect(() => {
            checkAuth()

            const interval = setInterval(() => {
                refreshAuthData()
            }, 1000 * 60 * 50) // refresh every 50 min

            return () => clearInterval(interval)
        }, [])

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
