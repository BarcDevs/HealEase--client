import {Skeleton} from '@/components/ui/skeleton'

const CheckInsChartSkeleton = () => (
    <div className={'space-y-4 p-4 rounded-lg border bg-card'}>
        <Skeleton className={'h-4 w-32'}/>
        <Skeleton className={'h-70 w-full'}/>
    </div>
)

export default CheckInsChartSkeleton
