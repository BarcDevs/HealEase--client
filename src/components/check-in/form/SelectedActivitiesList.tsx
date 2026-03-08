import {X} from 'lucide-react'

import {Badge} from '@/components/ui/badge.tsx'
import {Button} from '@/components/ui/button'

type SelectedActivitiesListProps = {
    activities: string[]
    onRemove: (activity: string) => void
}

const SelectedActivitiesList = ({
    activities,
    onRemove
}: SelectedActivitiesListProps) => {
    if (activities.length === 0) {
        return (
            <div className={'text-sm text-muted-foreground'}>
                No activities selected
            </div>
        )
    }

    return (
        <div className={'flex flex-wrap gap-2'}>
            {activities.map((activity) => (
                <Badge
                    key={activity}
                    variant={'secondary'}
                    className={'flex items-center gap-1 pr-1'}
                >
                    {activity}
                    <Button
                        type={'button'}
                        variant={'ghost'}
                        size={'sm'}
                        className={'h-4 w-4 p-0 hover:bg-destructive/20'}
                        onClick={() => onRemove(activity)}
                    >
                        <X className={'h-3 w-3'}/>
                    </Button>
                </Badge>
            ))}
        </div>
    )
}

export default SelectedActivitiesList