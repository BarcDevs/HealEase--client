import {Outlet} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'
import Header from '@/components/layout/root/Header.tsx'

const RootLayout = ({}) => (
    <>
        <Header/>
        <div className={'relative flex'}>
            <Outlet/>
        </div>
        {/*<Footer/>*/}
        <TanStackRouterDevtools/>
    </>
)


export default RootLayout
