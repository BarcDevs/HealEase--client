import {
    type Control,
    type FieldValues,
    type Path
} from 'react-hook-form'

import ActivitiesPickerField from '@/components/check-in/form/ActivitiesPickerField.tsx'
import {FormField} from '@/components/ui/form'


type ActivitiesPickerProps<T extends FieldValues> = {
    name: Path<T>
    formControl: Control<T>
    suggestions: string[]
}

const ActivitiesPicker = <T extends FieldValues>({
    name,
    formControl,
    suggestions
}: ActivitiesPickerProps<T>) => (
    <FormField
        name={name}
        control={formControl}
        render={({ field }) => (
            <ActivitiesPickerField
                currentActivities={field.value}
                onChange={field.onChange}
                suggestions={suggestions}
            />
        )}
    />
)

export default ActivitiesPicker