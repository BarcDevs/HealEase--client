import {Badge} from '@/components/ui/badge'

type Props = {
    suggestions: string[]
    onSelect: (activity: string) => void
}

const SuggestedActivities = ({suggestions, onSelect}: Props) => {
    if (!suggestions.length) return null

    return (
        <div className={'flex flex-col gap-2'}>
            <span className={'text-xs text-muted-foreground'}>
                Suggested
            </span>
            <div className={'flex flex-wrap gap-2'}>
                {suggestions.map(activity => (
                    <Badge
                        key={activity}
                        variant={'outline'}
                        className={'cursor-pointer hover:bg-primary/10'}
                        onClick={() => onSelect(activity)}
                    >
                        {activity}
                    </Badge>
                ))}
            </div>
        </div>
    )
}

export default SuggestedActivities