import {Link} from '@tanstack/react-router'

const Header = ({}) => (
    <header className={'w-screen border-b border-gray-200 p-4 flex items-center h-20'}>
        <Link className={'text-blue-500'} to={'/forum'}>Forum</Link>
    </header>
)


export default Header
