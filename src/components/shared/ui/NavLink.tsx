import {Link} from '@tanstack/react-router'
import {Button} from '@/components/ui/button.tsx'

type LinkProps = React.ComponentProps<typeof Link> & {
    label: string
}

const NavLink = ({to, label, ...props}: LinkProps) => (
    <Link to={to} {...props}>
        {({isActive}) =>
            <Button className={`rounded-md bg-slate-400 p-2 ${isActive ? 'bg-slate-600' : ''}`}>
                {label}
            </Button>
        }
    </Link>
)


export default NavLink
