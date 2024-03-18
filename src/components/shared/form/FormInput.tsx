import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form.tsx'
import {Input, InputProps} from '@/components/ui/input.tsx'
import {Control, FieldValues, Path} from 'react-hook-form'
import {twMerge} from 'tailwind-merge'
import {ClassName} from '@/types/react'
import TextEditor from '@/components/shared/form/TextEditor.tsx'

type FormInputProps<T extends FieldValues> = {
    name: Path<T>
    label?: string
    placeholder?: string
    description?: string
    type?: InputProps['type'] | 'editor'
    className?: ClassName
    required?: boolean
    formControl: Control<T & FieldValues, unknown>
} & InputProps

const FormInput = <T extends FieldValues>({
                                              name,
                                              label,
                                              placeholder,
                                              description,
                                              className,
                                              formControl,
                                              type,
                                              required,
                                              ...props
                                          }: FormInputProps<T>) =>
    (
        <FormField
            control={formControl}
            name={name}
            render={({field}) =>
                (
                    <FormItem>
                        {label &&
                            <FormLabel htmlFor={field.name} className={'opacity-50'}>
                                {label}
                                {required && <span className={'text-red-500'}>*</span>}
                            </FormLabel>}
                        <FormControl>
                            {type === 'editor' ?
                                <TextEditor placeholder={placeholder}
                                            onBlur={field.onBlur}
                                            onChange={field.onChange}
                                /> :
                                <Input placeholder={placeholder}
                                       type={type ?? 'text'}
                                       className={twMerge('no-focus placeholder:opacity-40', className)}
                                       {...props}
                                       {...field}
                                />}
                        </FormControl>
                        {description && <FormDescription>{description}</FormDescription>}
                        <FormMessage/>
                    </FormItem>
                )}
        />
    )

export default FormInput
