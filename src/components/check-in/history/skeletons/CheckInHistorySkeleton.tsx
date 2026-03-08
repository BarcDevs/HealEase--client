import {Skeleton} from '@/components/ui/skeleton'

const CheckInHistorySkeleton = () => (
    <div className={'space-y-4'}>
        {Array.from({length: 5}).map((_, i) => (
            <div
                key={i}
                className={'space-y-2 p-4 rounded-lg border bg-card'}
            >
                <Skeleton className={'h-4 w-32'}/>
                <div className={'flex gap-4'}>
                    <Skeleton className={'h-4 w-24'}/>
                    <Skeleton className={'h-4 w-24'}/>
                </div>
            </div>
        ))}
    </div>
)

export default CheckInHistorySkeleton
