import {CheckInStats as CheckInStatsType} from '@/types/checkIn.ts'

import StatCard from '@/components/check-in/StatCard.tsx'
import {Badge} from '@/components/ui/badge.tsx'

import STYLES from '@/lib/styles.ts'

const DELAYS = [
    '0ms',
    '75ms',
    '150ms',
    '225ms',
    '300ms',
    '375ms'
]

type Props = {
    stats: CheckInStatsType
}

const CheckInStats = ({stats}: Props) => (
    <section className={'mb-8'}>
        <h2 className={'mb-4 text-xl font-semibold'}>
            Your Stats
        </h2>
        <div className={'grid grid-cols-2 gap-4 sm:grid-cols-3'}>
            <StatCard
                title={'Total Check-ins'}
                value={stats.total}
                delay={DELAYS[0]}
            />
            <StatCard
                title={'Avg Mood'}
                value={`${stats.avgMood.toFixed(1)}/10`}
                delay={DELAYS[1]}
            />
            <StatCard
                title={'Avg Pain'}
                value={`${stats.avgPain.toFixed(1)}/10`}
                delay={DELAYS[2]}
            />
            <StatCard
                title={'Current Streak'}
                value={`${stats.currentStreak} days`}
                delay={DELAYS[3]}
            />
            <StatCard
                title={'Longest Streak'}
                value={`${stats.longestStreak} days`}
                delay={DELAYS[4]}
            />
            <StatCard
                title={'Top Activities'}
                delay={DELAYS[5]}
                value={
                    <div className={'flex flex-wrap gap-1'}>
                        {stats.topActivities.map(
                            activity => (
                                <Badge
                                    key={activity}
                                    className={STYLES.badge}
                                >
                                    {activity}
                                </Badge>
                            ))}
                    </div>
                }
            />
        </div>
    </section>
)

export default CheckInStats