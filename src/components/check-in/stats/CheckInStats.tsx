import { CheckInStats as CheckInStatsType } from '@/types/checkIn'

import STYLES from '@/lib/styles'

type CheckInStatsProps = {
    stats: CheckInStatsType | undefined
}

const DELAYS = [ '0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s' ]

const StatCard = ({
    label,
    value,
    delay
}: {
    label: string
    value: string | number
    delay: string
}) => (
    <div
        style={{ '--animation-delay': delay } as any}
        className={'rounded-lg border border-muted-foreground/20 p-4 animate-in fade-in-0 slide-in-from-bottom-4'}
    >
        <p className={'text-sm text-muted-foreground'}>
            {label}
        </p>
        <p className={'text-2xl font-bold mt-1'}>
            {value}
        </p>
    </div>
)

const CheckInStats = ({
    stats
}: CheckInStatsProps) => {
    if (!stats) {
        return null
    }

    return (
        <div className={'grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6'}>
            <StatCard
                label={'Total'}
                value={stats.totalCheckIns ?? stats.total ?? 0}
                delay={DELAYS[ 0 ]}
            />
            <StatCard
                label={'Avg Mood'}
                value={(stats.averageMoodScore ?? stats.avgMood ?? 0).toFixed(1)}
                delay={DELAYS[ 1 ]}
            />
            <StatCard
                label={'Avg Pain'}
                value={(stats.averagePainLevel ?? stats.avgPain ?? 0).toFixed(1)}
                delay={DELAYS[ 2 ]}
            />
            <StatCard
                label={'Current Streak'}
                value={stats.currentStreak ?? 0}
                delay={DELAYS[ 3 ]}
            />
            <StatCard
                label={'Longest Streak'}
                value={stats.longestStreak ?? 0}
                delay={DELAYS[ 4 ]}
            />
            {
                stats.topActivities && stats.topActivities.length > 0 &&
                <div
                    style={{ '--animation-delay': DELAYS[ 5 ] } as any}
                    className={'rounded-lg border border-muted-foreground/20 p-4 animate-in fade-in-0 slide-in-from-bottom-4'}
                >
                    <p className={'text-sm text-muted-foreground mb-2'}>
                        Top Activities
                    </p>
                    <div className={'space-y-1'}>
                        {stats.topActivities.slice(0, 2).map((activity) => (
                            <div
                                key={activity}
                                className={STYLES.badge}
                            >
                                {activity}
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default CheckInStats
