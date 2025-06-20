import * as Sentry from '@sentry/react'
import {env} from '@/config'
import {Outlet} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'
import {useLocalStorage} from '@/hooks/useLocalStorage.ts'
import Header from '@/components/layout/root/Header.tsx'
import Footer from '@/components/layout/root/Footer.tsx'

const RootLayout = Sentry.withProfiler(
    ({}) => {
        useLocalStorage()

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
