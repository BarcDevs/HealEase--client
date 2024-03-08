import {Outlet} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'

const RootLayout = ({}) => (
    <>
        {/*<Header/>*/}
        <Outlet/>
        {/*<Footer/>*/}
        <TanStackRouterDevtools/>
    </>
)


export default RootLayout
