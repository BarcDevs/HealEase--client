import {CheckInInsight as CheckInInsightType} from '@/types/checkIn.ts'

import {cn} from '@/lib/utils.ts'

const INSIGHT_COLORS: Record<string, string> = {
    tip: 'bg-blue-100 text-blue-800',
    warning: 'bg-amber-100 text-amber-800',
    positive: 'bg-green-100 text-green-800',
    default: 'bg-gray-100 text-gray-700'
}

type Props = {
    insight: CheckInInsightType
}

const CheckInInsight = ({insight}: Props) => {
    const color = 
        INSIGHT_COLORS[insight.type] ?? 
        INSIGHT_COLORS.default

    return (
        <span
            className={cn(
                'inline-flex items-center gap-1.5 rounded-full',
                'px-3 py-1 text-xs font-medium',
                color
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
}

export default CheckInInsight