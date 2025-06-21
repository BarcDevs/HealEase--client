import logo from '@/assets/logo.webp'
import {BRAND_NAME} from '@/constants/plainTexts.ts'

const Logo = ({}) => (
    <span className={'text-sm font-bold text-white'}>
        <img
            src={logo}
            alt={`${BRAND_NAME} Logo`}
            width={40}
            height={40}
            className={'rounded-lg object-contain'}
        />
    </span>
)

export default Logo
