import ActivitiesInput from '@/components/check-in/form/ActivitiesInput.tsx'
import SelectedActivitiesList from '@/components/check-in/form/SelectedActivitiesList.tsx'
import SuggestedActivities from '@/components/check-in/form/SuggestedActivities.tsx'
import {
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import {Separator} from '@/components/ui/separator.tsx'

type ActivitiesPickerFieldProps = {
    currentActivities: string[] | undefined
    onChange: (value: string[]) => void
    suggestions: string[]
}

const ActivitiesPickerField = ({
    currentActivities,
    onChange,
    suggestions
}: ActivitiesPickerFieldProps) => {
    const selected = currentActivities ?? []

    const unselected = suggestions.filter(
        suggestion =>
            !selected.some(
                activity =>
                    activity.toLowerCase() ===
                    suggestion.toLowerCase()
            )
    )

    const add = (activity: string) => {
        const trimmed = activity.trim()
        if (!trimmed) return

        const isDuplicate = selected.some(
            a =>
                a.toLowerCase() ===
                trimmed.toLowerCase()
        )

        if (isDuplicate) return

        onChange([
            ...selected,
            trimmed
        ])
    }

    return (
        <FormItem>
            <FormLabel className="opacity-50">
                Activities
            </FormLabel>

            <ActivitiesInput
                add={add}
            />

            <SelectedActivitiesList
                activities={selected}
                onRemove={(activity) => onChange(selected.filter(a => a !== activity))}
            />

            <FormMessage/>

            {
                unselected.length > 0 &&
                <Separator className={'mt-4 mb-1'}/>
            }

            <SuggestedActivities
                suggestions={unselected}
                onAdd={add}
            />
        </FormItem>
    )
}

export default ActivitiesPickerField