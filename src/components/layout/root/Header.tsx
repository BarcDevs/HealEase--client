import {Link} from '@tanstack/react-router'
import {Button} from '@/components/ui/button.tsx'

type Props = {
    toggleDir: () => void
}

const Header = ({toggleDir} : Props) => (
    <header className={'flex h-20 w-screen items-center justify-between border-b border-gray-200 p-4'}>
        <Button onClick={toggleDir}>direction</Button>
        <Link className={'text-blue-500'} to={'/forum'}>Forum</Link>
    </header>
)


export default Header
