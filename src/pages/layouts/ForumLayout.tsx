import {Outlet} from '@tanstack/react-router'
import LeftSidebar from '@/components/layout/forum/LeftSidebar.tsx'

const ForumLayout = ({}) => (
    <>
        {/*<Header/>*/}
        <LeftSidebar/>
        <Outlet/>
        {/*<RightSidebar/>*/}
    </>
)

export default ForumLayout
