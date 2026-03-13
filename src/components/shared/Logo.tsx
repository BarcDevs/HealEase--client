import { Link } from '@tanstack/react-router'

import {BRAND_NAME} from '@/constants/plainTexts.ts'

const Logo = ({}) => (
    <Link
        to={'/'}
        className={'flex items-center gap-2'}
    >
        <div className={'flex size-10 items-center justify-center rounded-xl'}>
            <img
                src={'/logos/HealEaseLogoNoCaption.webp'}
                alt={`${BRAND_NAME} Logo`}
                width={40}
                height={40}
                className={'rounded-lg object-contain'}
            />
        </div>
        {/* TODO: add color logo = dark blue (matches the logo color from canva*/}
        <span className={'font-(family-name:--font-heading) text-xl font-semibold text-logo'}>
            {BRAND_NAME}
        </span>
    </Link>
)

export default Logo
