import { Link } from '@tanstack/react-router'
import { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'

type LinkProps = ComponentProps<typeof Link> & {
    label: string
}

const NavLink: FC<LinkProps> = ({
                                    to,
                                    label,
                                    ...props
                                }) => (
    <Link
        key={label}
        to={to}
        {...props}
    >
        {({ isActive }) => (
            <span
                className={twMerge(
                    'group relative px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900',
                    isActive && 'font-bold text-blue-600'
                )}
            >
        {label}

                <span
                    className={twMerge(
                        'absolute inset-x-0 bottom-0 h-0.5 scale-x-0',
                        'bg-gradient-to-r from-indigo-500 to-purple-600',
                        'transition-transform duration-200 group-hover:scale-x-100'
                    )}
                />
      </span>
        )}
    </Link>
)

export default NavLink
