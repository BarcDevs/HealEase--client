import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from '@/components/ui/card'
import {Skeleton} from '@/components/ui/skeleton'

const PostCardSkeleton = () => (
    <Card className="w-full rounded-[10px] border-none bg-slate-100 p-9 shadow-md shadow-slate-200 sm:px-11 sm:pt-7.5">
        <CardHeader className="mb-3.5 flex items-start justify-between gap-5 p-0 max-sm:flex-col-reverse">
            <Skeleton className="h-6 w-2/3"/>
            <Skeleton className="h-4 w-20 sm:hidden"/>
        </CardHeader>

        <CardContent className="flex flex-wrap gap-2 p-0">
            <Skeleton className="h-7 w-16 rounded-full"/>
            <Skeleton className="h-7 w-20 rounded-full"/>
            <Skeleton className="h-7 w-14 rounded-full"/>
        </CardContent>

        <CardFooter className="flex-row-between mt-6 w-full flex-wrap gap-3 p-0">
            <div className="flex items-center gap-2">
                <Skeleton className="h-7 w-7 rounded-full"/>
                <Skeleton className="h-4 w-24"/>
            </div>

            <div className="flex items-center gap-4">
                <Skeleton className="h-4 w-12"/>
                <Skeleton className="h-4 w-12"/>
                <Skeleton className="h-4 w-12"/>
            </div>
        </CardFooter>
    </Card>
)

export default PostCardSkeleton