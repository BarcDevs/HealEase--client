import { twMerge } from 'tailwind-merge'

import { AuthType } from '@/types/auth.ts'

import {
    getGradientClass,
    renderGradientContent
} from '@/lib/authHelpers.tsx'

import { SVG_PATTERN } from '@/constants/patterns.ts'

type AuthDisplayContentProps = {
    type: AuthType
}

export const AuthDisplayContent = ({
    type
}: AuthDisplayContentProps) => (
    <div className={'relative hidden w-0 flex-1 lg:block'}>
        <div className={twMerge(
            'absolute inset-0 bg-linear-to-br',
            getGradientClass(type)
        )}>
            <div className={`absolute inset-0 bg-[url('${SVG_PATTERN}')] opacity-30`}/>
            <div className={'absolute inset-0 flex flex-col items-center justify-center p-12'}>
                {renderGradientContent(type)}
            </div>
        </div>
    </div>
)