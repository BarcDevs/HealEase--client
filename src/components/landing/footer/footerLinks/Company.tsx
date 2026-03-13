import { NavLink } from '@/components/landing/navbar/NavLink.tsx'

import { landingFooterLinks } from '@/constants/shared/landingFooterLinks.ts'

export const Company = ({}) => (
    <div>
        <h3 className={'font-(family-name:--font-heading) text-sm font-semibold text-foreground'}>
            Company
        </h3>
        <ul className={'mt-4 space-y-3'}>
            {landingFooterLinks.company.map((link) => (
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