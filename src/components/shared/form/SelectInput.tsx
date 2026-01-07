import {ReactNode} from 'react'

import {Control, FieldValues, Path} from 'react-hook-form'
import {twMerge} from 'tailwind-merge'

import { InputProps } from '@/types'
import {ClassName} from '@/types/react.ts'

import {FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form.tsx'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select.tsx'

type SelectInputProps<T extends FieldValues> = {
    name: Path<T>
    label?: string
    placeholder: string
    type?: InputProps['type'] | 'editor'
    className?: ClassName
    labelClassName?: ClassName
    secondaryLabel?: ReactNode
    required?: boolean
    formControl: Control<T & FieldValues, unknown>
    values: Record<string, string>
} & Omit<InputProps, 'type'>

const SelectInput = <T extends FieldValues>({
                                                name,
                                                label,
                                                placeholder,
                                                className,
                                                labelClassName,
                                                secondaryLabel,
                                                required,
                                                formControl,
                                                values
                                            }: SelectInputProps<T>) => (
    <FormField
        control={formControl}
        name={name}
        render={({field}) =>
            (<FormItem>
                <div className="flex items-center">
                    {label &&
                        <FormLabel htmlFor={field.name} className={labelClassName}>
                            {label}
                            {required && <span className={'text-red-500'}>*</span>}
                        </FormLabel>}
                    {secondaryLabel}
                </div>
                <FormControl>
                    <Select onValueChange={field.onChange}
                            defaultValue={field.value}>
                        <SelectTrigger
                            className={twMerge(
                                'no-focus w-full capitalize',
                                className)}>
                            <SelectValue placeholder={field.value ?
                                Object.keys(values).find(v => v === field.value) ?? placeholder
                                : placeholder}/>
                        </SelectTrigger>
                        <SelectContent>
                            {Object.entries(values).map(([value, label]) => (
                                <SelectItem key={value}
                                            value={value}
                                            className={'cursor-pointer capitalize'}>
                                    {label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </FormControl>
                <FormMessage/>
            </FormItem>)
        }/>
)

export default SelectInput
