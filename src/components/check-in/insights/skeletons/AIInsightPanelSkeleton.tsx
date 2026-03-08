import { Skeleton } from '@/components/ui/skeleton'

const AIInsightPanelSkeleton = () => (
    <div className={'rounded-lg border p-4'}>
        <Skeleton className={'mb-4 h-6 w-32'} />

        <div className={'space-y-3'}>
            {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className={'flex items-start gap-3'}>
                    <Skeleton className={'h-6 w-16 flex-shrink-0'} />
                    <Skeleton className={'h-4 w-full'} />
                </div>
            ))}
        </div>
    </div>
)

export default AIInsightPanelSkeleton
