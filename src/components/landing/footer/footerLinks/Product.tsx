import { NavLink } from '@/components/landing/navbar/NavLink.tsx'

import { landingFooterLinks } from '@/constants/shared/landingFooterLinks.ts'

export const Product = ({}) => (
    <div>
        <h3 className={'font-(family-name:--font-heading) text-sm font-semibold text-foreground'}>
            Product
        </h3>
        <ul className={'mt-4 space-y-3'}>
            {landingFooterLinks.product.map((link) => (
                <li key={link.label}>
                    <NavLink
                        key={link.label}
                        link={link}
                        type={'footer'}
                    />
                </li>
            ))}
        </ul>
    </div>
)