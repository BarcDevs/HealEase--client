import {Control, FieldValues, Path} from 'react-hook-form'
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form.tsx'
import {Input, InputProps} from '@/components/ui/input.tsx'
import {twMerge} from 'tailwind-merge'
import {ClassName} from '@/types/react.ts'
import {Fragment, useState} from 'react'
import {Badge} from '@/components/ui/badge.tsx'

type TagInputProps<T extends FieldValues> = {
    name: Path<T>
    label?: string
    type?: InputProps['type']
    placeholder?: string
    description?: string
    max?: number
    className?: ClassName
    formControl: Control<T & FieldValues, unknown>
} & InputProps

const TagInput = <T extends FieldValues>({
                                             name,
                                             formControl,
                                             label,
                                             placeholder,
                                             className,
                                             type,
                                             description,
                                             max,
                                             ...props
                                         }: TagInputProps<T>) => {
    const [tag, setTag] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTag(e.target.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, field: any) => {
        if (e.key === 'Enter') {
            e.preventDefault()

            if (!field.value.includes(tag)) {
                field.onChange([...field.value, tag])
                setTag('')
            }
        }
    }

    const handleTagClick = (tag: string, field: any) => {
        field.onChange(field.value.filter((t: string) => t !== tag))
    }

    return (
        <FormField
            name={name}
            control={formControl}
            render={({field}) => {
                if (!Array.isArray(field.value)) {
                    console.error(`Invalid TagInput: Value of ${name} is not an array`)
                    return <Fragment/>
                }

                const maxValueReached = !!max && field.value.length >= max

                return (
                    <FormItem>
                        {label &&
                            <FormLabel htmlFor={field.name} className={'opacity-50'}>
                                {label}
                            </FormLabel>}
                        <FormControl>
                            <Input placeholder={placeholder}
                                   type={type ?? 'text'}
                                   className={twMerge('no-focus placeholder:opacity-40', className)}
                                   value={maxValueReached ? `Tag limit reached` : tag}
                                   onChange={handleChange}
                                   onKeyDown={e => handleKeyDown(e, field)}
                                   disabled={props.disabled || field.disabled || maxValueReached}
                                   {...props}
                            />
                        </FormControl>
                        <ul className={'flex--row flex-wrap gap-2'}>
                            {field.value.map((tag: string) => (
                                <Badge
                                    key={tag}
                                    className={'rounded-md border-none px-4 py-2 uppercase cursor-pointer'}
                                    onClick={() => handleTagClick(tag, field)}>
                                    {tag}
                                </Badge>
                            ))}
                        </ul>
                        {description && <FormDescription>{description}</FormDescription>}
                        <FormMessage/>
                    </FormItem>
                )
            }}
        >

        </FormField>
    )
}

export default TagInput
