import {CheckInInsight as CheckInInsightType} from '@/types/checkIn.ts'

import STYLES from '@/lib/styles.ts'
import {cn} from '@/lib/utils.ts'

type Props = {
    insight: CheckInInsightType
}

const CheckInInsight = ({insight}: Props) => (
    <span
        className={cn(
            'inline-flex items-center gap-1.5 rounded-full',
            'px-3 py-1 text-xs font-medium',
            STYLES.insightDefault
        )}
    >
        <span className={'font-semibold capitalize'}>
            {insight.type}
        </span>
        <span>
            {insight.content}
        </span>
    </span>
)

export default CheckInInsight