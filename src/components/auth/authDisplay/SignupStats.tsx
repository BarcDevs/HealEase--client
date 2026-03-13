import { RECOVERY_STATS } from '@/constants/auth/recoveryStats.ts'

export const SignupStats = () => (
    <div className={'max-w-md text-center'}>
        <h2 className={'text-3xl font-bold text-primary-foreground'}>
            Begin Your Healing Journey
        </h2>
        <p className={'mt-4 text-lg leading-relaxed text-primary-foreground/80'}>
            Track your progress, connect with others on
            similar paths, and receive personalized
            insights to support your recovery.
        </p>
        <div className={'mt-8 flex justify-center gap-8'}>
            {RECOVERY_STATS.map(({ value, label }) => (
                <div key={value} className={'text-center'}>
                    <div className={'text-3xl font-bold text-primary-foreground'}>
                        {value}
                    </div>
                    <div className={'text-sm text-primary-foreground/70'}>
                        {label}
                    </div>
                </div>
            ))}
        </div>
    </div>
)
