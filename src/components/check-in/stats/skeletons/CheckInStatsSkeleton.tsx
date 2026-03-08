import {Skeleton} from '@/components/ui/skeleton'

const CheckInStatsSkeleton = () => (
    <div className={'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'}>
        {Array.from({length: 4}).map((_, i) => (
            <div
                key={i}
                className={'space-y-2 p-4 rounded-lg border bg-card'}
            >
                <Skeleton className={'h-4 w-24'}/>
                <Skeleton className={'h-8 w-16'}/>
            </div>
        ))}
    </div>
)

export default CheckInStatsSkeleton
