import {KeyboardEvent, useState} from 'react'

import {X} from 'lucide-react'
import {
    Control,
    FieldValues,
    Path
} from 'react-hook-form'
import {twMerge} from 'tailwind-merge'

import SuggestedActivities from '@/components/check-in/SuggestedActivities'
import {Badge} from '@/components/ui/badge'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'

import STYLES from '@/lib/styles'

type ActivitiesPickerProps<T extends FieldValues> = {
    name: Path<T>
    formControl: Control<T>
    suggestions: string[]
}

const ActivitiesPicker = <T extends FieldValues>({
    name,
    formControl,
    suggestions
}: ActivitiesPickerProps<T>) => {
    const [input, setInput] = useState('')

    return (
        <FormField
            name={name}
            control={formControl}
            render={({field}) => {
                const selected: string[] = field.value ?? []

                const unselected = suggestions.filter(
                    s => !selected.some(
                        a => a.toLowerCase() === s.toLowerCase()
                    )
                )

                const add = (activity: string) => {
                    const trimmed = activity.trim()
                    if (!trimmed) return
                    const isDuplicate = selected.some(
                        a => a.toLowerCase() === trimmed.toLowerCase()
                    )
                    if (!isDuplicate) {
                        field.onChange([...selected, trimmed])
                    }
                }

                const remove = (activity: string) =>
                    field.onChange(
                        selected.filter(a => a !== activity)
                    )

                const onKeyDown = (
                    e: KeyboardEvent<HTMLInputElement>
                ) => {
                    if (e.key !== 'Enter') return
                    e.preventDefault()
                    add(input)
                    setInput('')
                }

                return (
                    <FormItem>
                        <FormLabel className={'opacity-50'}>
                            Activities
                        </FormLabel>
                        <SuggestedActivities
                            suggestions={unselected}
                            onSelect={add}
                        />
                        <FormControl>
                            <Input
                                placeholder={'Add activity, press Enter'}
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={onKeyDown}
                                className={'no-focus placeholder:opacity-40'}
                            />
                        </FormControl>
                        <ul className={'flex flex-wrap gap-2'}>
                            {selected.map(activity => (
                                <Badge
                                    key={activity}
                                    className={twMerge(
                                        STYLES.badgeHover,
                                        'flex cursor-pointer items-center gap-1 uppercase'
                                    )}
                                    onClick={() => remove(activity)}
                                >
                                    {activity}
                                    <X className={'h-3 w-3'}/>
                                </Badge>
                            ))}
                        </ul>
                        <FormMessage/>
                    </FormItem>
                )
            }}
        />
    )
}

export default ActivitiesPicker