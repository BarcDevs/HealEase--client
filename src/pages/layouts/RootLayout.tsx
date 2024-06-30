import * as Sentry from '@sentry/react'
import {Outlet} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'
import Header from '@/components/layout/root/Header.tsx'
import {useLocalStorage} from '@/hooks/useLocalStorage.ts'
import {env} from '@/config'

const RootLayout = Sentry.withProfiler(
    ({}) => {
        useLocalStorage()
        return (
            <>
                <Header/>
                <div className={'relative flex'}>
                    <Outlet/>
                </div>
                {/*<Footer/>*/}
                {env.DEV && <TanStackRouterDevtools/>}
            </>
        )
    })


export default RootLayout
