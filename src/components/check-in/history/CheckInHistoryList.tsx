import {CheckIn} from '@/types/checkIn'

import CheckInHistoryItem from '@/components/check-in/history/CheckInHistoryItem'

type CheckInHistoryListProps = {
    checkIns: CheckIn[]
    isLoading?: boolean
}

const CheckInHistoryList = ({
    checkIns,
    isLoading
}: CheckInHistoryListProps) => {
    if (isLoading) {
        return (
            <div className={'space-y-4'}>
                {Array.from({length: 3}).map((_, i) => (
                    <div
                        key={i}
                        className={'h-20 rounded-lg bg-muted animate-pulse'}
                    />
                ))}
            </div>
        )
    }

    if (!checkIns || checkIns.length === 0) {
        return (
            <div className={'text-center py-8 text-muted-foreground'}>
                No check-ins yet. Start tracking your progress!
            </div>
        )
    }

    return (
        <div className={'space-y-4'}>
            {checkIns.map((checkIn, index) => (
                <CheckInHistoryItem
                    key={checkIn.id}
                    item={checkIn}
                    index={index}
                />
            ))}
        </div>
    )
}

export default CheckInHistoryList
