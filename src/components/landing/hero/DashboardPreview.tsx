import { HERO_DASHBOARD_PREVIEW } from '@/constants/landing/hero.ts'

export const DashboardPreview = ({}) => (
    <div className={'relative mx-auto mt-16 max-w-5xl'}>
        <div className={'overflow-hidden rounded-2xl border bg-card shadow-2xl shadow-primary/10'}>
            <div className={'flex items-center gap-2 border-b bg-muted/50 px-4 py-3'}>
                <div className={'size-3 rounded-full bg-destructive/60'}/>
                <div className={'size-3 rounded-full bg-chart-4'}/>
                <div className={'size-3 rounded-full bg-accent/60'}/>
            </div>
            <div className={'grid gap-4 p-6 sm:grid-cols-3'}>
                {HERO_DASHBOARD_PREVIEW.map((stat) => (
                    <div
                        key={stat.id}
                        className={`rounded-xl ${stat.bgClass} p-5`}
                    >
                        <div className={'text-sm font-medium text-muted-foreground'}>
                            {stat.label}
                        </div>
                        <div className={'mt-2 text-3xl font-bold text-foreground'}>
                            {stat.value}
                        </div>
                        <div className={`mt-1 text-xs ${stat.changeColor}`}>
                            {stat.change}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
)