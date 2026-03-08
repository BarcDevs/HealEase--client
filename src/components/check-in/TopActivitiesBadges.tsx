import {Badge} from '@/components/ui/badge.tsx'

import STYLES from '@/lib/styles.ts'

type Props = {
    activities: string[]
}

const TopActivitiesBadges = ({activities}: Props) => (
    <div className={'flex flex-wrap gap-1'}>
        {activities.map(activity => (
            <Badge
                key={activity}
                className={STYLES.badge}
            >
                {activity}
            </Badge>
        ))}
    </div>
)

export default TopActivitiesBadges