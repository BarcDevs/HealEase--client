import {Control, useWatch} from 'react-hook-form'

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form.tsx'
import {Textarea} from '@/components/ui/textarea.tsx'

import checkInFormConfig from '@/config/schema/checkInForm.ts'

import {CheckInSchema} from '@/validations/forms/checkInSchema.ts'

const {notes: notesConfig} = checkInFormConfig

type Props = {
    formControl: Control<CheckInSchema>
}

const NotesField = ({formControl}: Props) => {
    const notes = useWatch({
        control: formControl,
        name: 'notes'
    })

    return (
        <FormField
            control={formControl}
            name={'notes'}
            render={({field}) => (
                <FormItem>
                    <FormLabel>
                        Notes
                    </FormLabel>
                    <FormControl>
                        <Textarea
                            placeholder={'How are you feeling today?'}
                            maxLength={notesConfig.maxLength}
                            {...field}
                        />
                    </FormControl>
                    <p className={'text-right text-sm text-muted-foreground'}>
                        {`${notes?.length ?? 0}/${notesConfig.maxLength}`}
                    </p>
                    <FormMessage/>
                </FormItem>
            )}
        />
    )
}

export default NotesField