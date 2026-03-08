import {format} from 'date-fns'

import {CheckIn} from '@/types/checkIn.ts'

import CheckInInsight from '@/components/check-in/insights/CheckInInsight.tsx'
import {Badge} from '@/components/ui/badge.tsx'
import {Card, CardContent} from '@/components/ui/card.tsx'

import STYLES from '@/lib/styles.ts'

import {DEFAULTS} from '@/constants/defaults.ts'

type Props = {
    item: CheckIn
    index: number
}

const CheckInHistoryItem = ({item, index}: Props) => (
    <Card
        className={'animate-in fade-in-0 slide-in-from-bottom-2 duration-200'}
        style={{animationDelay: `${index * 50}ms`}}
    >
        <CardContent className={'flex flex-col gap-3 p-4'}>
            <div className={'flex items-center gap-6'}>
                <span>
                    {`Mood: ${item.moodScore}/10`}
                </span>
                <span>
                    {`Pain: ${item.painLevel}/10`}
                </span>
                <span className={'ml-auto text-sm text-muted-foreground'}>
                    {format(
                        new Date(item.createdAt),
                        DEFAULTS.checkIn.dateFormat
                    )}
                </span>
            </div>
            <div className={'flex flex-wrap gap-2'}>
                {item.activities.map(activity => (
                    <Badge
                        key={activity}
                        className={STYLES.badge}
                    >
                        {activity}
                    </Badge>
                ))}
            </div>
            {item.notes && (
                <p className={'text-sm text-muted-foreground'}>
                    {item.notes}
                </p>
            )}
            {!!item.insights?.length && (
                <div className={'flex flex-wrap gap-2'}>
                    {item.insights.map((insight) => (
                        <CheckInInsight
                            key={insight.content}
                            insight={insight}
                        />
                    ))}
                </div>
            )}
        </CardContent>
    </Card>
)

export default CheckInHistoryItem