import {Outlet} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'
import Header from '@/components/layout/root/Header.tsx'
import {useState} from 'react'

const RootLayout = ({}) => {
    const [dir, setDir] = useState('ltr')

    const toggleDir = () => setDir(dir === 'ltr' ? 'rtl' : 'ltr')

    return (
        <html lang="en" dir={dir}>
        <Header toggleDir={toggleDir}/>
        <div className={'relative flex'}>
            <Outlet/>
        </div>
        {/*<Footer/>*/}
        <TanStackRouterDevtools/>
        </html>
    )
}


export default RootLayout
