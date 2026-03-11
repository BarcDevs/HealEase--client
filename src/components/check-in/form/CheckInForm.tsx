import {UseFormReturn} from 'react-hook-form'

import SuggestedActivities from '@/components/check-in/form/SuggestedActivities.tsx'
import NotesField from '@/components/check-in/NotesField.tsx'
import ScoreSlider from '@/components/check-in/ScoreSlider.tsx'
import {Error} from '@/components/shared/Error.tsx'
import TagInput from '@/components/shared/form/TagInput.tsx'
import {Button} from '@/components/ui/button.tsx'
import {Form} from '@/components/ui/form.tsx'

import {CheckInSchema} from '@/validations/forms/checkInSchema.ts'

type CheckInFormProps = {
    form: UseFormReturn<CheckInSchema>
    suggestedActivities: string[]
    buttonText: string
    error: string
    onSubmit: (values: CheckInSchema) => Promise<void>
    onAddActivity: (activity: string) => void
}

const CheckInForm = ({
    form,
    suggestedActivities,
    buttonText,
    error,
    onSubmit,
    onAddActivity
}: CheckInFormProps) => (
    <Form {...form}>
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={
                'flex flex-col gap-8 animate-in fade-in-0 ' +
                'slide-in-from-bottom-2 duration-300'
            }
        >
            <ScoreSlider
                name={'moodScore'}
                label={'Mood Score'}
                formControl={form.control}
            />

            <ScoreSlider
                name={'painLevel'}
                label={'Pain Level'}
                formControl={form.control}
            />

            <TagInput
                name={'activities'}
                label={'Activities'}
                formControl={form.control}
                placeholder={'Add activity, press Enter'}
            />

            {suggestedActivities.length > 0 && (
                <SuggestedActivities
                    suggestions={suggestedActivities}
                    onAdd={onAddActivity}
                />
            )}

            <NotesField formControl={form.control}/>
            {error && (
                <Error error={error}/>
            )}

            <Button
                type={'submit'}
                className={'w-full'}
            >
                {buttonText}
            </Button>
        </form>
    </Form>
)

export default CheckInForm
