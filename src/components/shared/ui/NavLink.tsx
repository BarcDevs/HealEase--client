import {Link} from '@tanstack/react-router'
import {Button} from '@/components/ui/button.tsx'
import {twMerge} from 'tailwind-merge'

type LinkProps = React.ComponentProps<typeof Link> & {
    label: string
    logout?: boolean
}

const NavLink = ({to, label, logout, ...props}: LinkProps) => (
    <Link to={to} {...props}>
        {({isActive}) =>
            <Button className={
                twMerge(
                    'rounded-md bg-slate-400 p-2',
                    isActive && 'bg-slate-500',
                    logout && 'bg-red-600 hover:bg-red-700')}>
                {label}
            </Button>
        }
    </Link>
)


export default NavLink
