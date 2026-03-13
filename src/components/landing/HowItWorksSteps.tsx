import { HOW_IT_WORKS_STEPS } from '@/constants/landing/howItWorks.ts'

export const HowItWorksSteps = ({}) => (
    <div className={'mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'}>
        {HOW_IT_WORKS_STEPS.map((item, index) => (
            <div
                key={item.step}
                className={'relative'}
            >
                {index < HOW_IT_WORKS_STEPS.length - 1 &&
                    <div className={'absolute left-1/2 top-12 hidden h-0.5 w-full translate-x-0 bg-linear-to-r from-primary/20 to-transparent lg:block'}/>
                }
                <div className={'relative flex flex-col items-center text-center'}>
                    <div className={'relative'}>
                        <div className={'flex size-24 items-center justify-center rounded-2xl bg-card shadow-lg shadow-primary/5'}>
                            <item.icon className={'size-10 text-primary'}/>
                        </div>
                        <div className={'absolute -right-2 -top-2 flex size-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground'}>
                            {item.step}
                        </div>
                    </div>
                    <h3 className={'font-(family-name:--font-heading) mt-6 text-lg font-semibold text-foreground'}>
                        {item.title}
                    </h3>
                    <p className={'mt-2 text-sm leading-relaxed text-muted-foreground'}>
                        {item.description}
                    </p>
                </div>
            </div>
        ))}
    </div>
)