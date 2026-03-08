import {ReactNode} from 'react'

import {CheckInStats} from '@/types/checkIn.ts'

import TopActivitiesBadges from '@/components/check-in/TopActivitiesBadges.tsx'

type StatItem = {
    title: string
    value: ReactNode
}

export const getStatItems = (
    stats: CheckInStats
): StatItem[] => [
    {title: 'Total Check-ins', value: stats.total},
    {title: 'Avg Mood', value: `${stats.avgMood.toFixed(1)}/10`},
    {title: 'Avg Pain', value: `${stats.avgPain.toFixed(1)}/10`},
    {title: 'Current Streak', value: `${stats.currentStreak} days`},
    {title: 'Longest Streak', value: `${stats.longestStreak} days`},
    {
        title: 'Top Activities',
        value: <TopActivitiesBadges
            activities={stats.topActivities}
        />
    }
]