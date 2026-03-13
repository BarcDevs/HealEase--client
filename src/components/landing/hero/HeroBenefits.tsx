import { CheckCircle2 } from 'lucide-react'

import { HERO_BENEFITS } from '@/constants/landing/hero.ts'

export const HeroBenefits = ({}) => (
    <div className={'mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground'}>
        {HERO_BENEFITS.map((benefit) => (
            <div
                key={benefit.label}
                className={'flex items-center gap-2'}
            >
                <CheckCircle2 className={'size-4 text-accent'}/>
                <span>
                    {benefit.label}
                </span>
            </div>
        ))}
    </div>
)