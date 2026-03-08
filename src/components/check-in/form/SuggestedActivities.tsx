import {Button} from '@/components/ui/button'

type SuggestedActivitiesProps = {
    suggestions: string[]
    onAdd: (activity: string) => void
}

const SuggestedActivities = ({
    suggestions,
    onAdd
}: SuggestedActivitiesProps) => {
    if (!suggestions || suggestions.length === 0) {
        return null
    }

    return (
        <div className={'space-y-2'}>
            <p className={'text-sm font-medium text-muted-foreground'}>
                Suggested Activities
            </p>
            <div className={'flex flex-wrap gap-2'}>
                {suggestions.map((activity) => (
                    <Button
                        key={activity}
                        type={'button'}
                        variant={'outline'}
                        size={'sm'}
                        onClick={() => onAdd(activity)}
                        className={'text-xs'}
                    >
                        + {activity}
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default SuggestedActivities
