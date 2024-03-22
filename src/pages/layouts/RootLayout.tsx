import * as Sentry from '@sentry/react'
import {Outlet} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'
import Header from '@/components/layout/root/Header.tsx'

const RootLayout = Sentry.withProfiler(
    ({}) => (
        <>
            <Header/>
            <div className={'relative flex'}>
                <Outlet/>
            </div>
            {/*<Footer/>*/}
            <TanStackRouterDevtools/>
        </>
    ))


export default RootLayout
