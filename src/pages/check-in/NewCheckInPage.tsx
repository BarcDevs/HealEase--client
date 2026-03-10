import {useState} from 'react'

import {useForm} from 'react-hook-form'
import {toast} from 'sonner'

import {zodResolver} from '@hookform/resolvers/zod'
import {useNavigate} from '@tanstack/react-router'

import NotesField from '@/components/check-in/NotesField.tsx'
import ScoreSlider from '@/components/check-in/ScoreSlider.tsx'
import {Error} from '@/components/shared/Error.tsx'
import TagInput from '@/components/shared/form/TagInput.tsx'
import Page from '@/components/shared/ui/Page.tsx'
import {Button} from '@/components/ui/button.tsx'
import {Form} from '@/components/ui/form.tsx'

import checkInFormConfig from '@/config/schema/checkInForm.ts'

import {handleCheckInSubmit} from '@/handlers/actions/checkIn.ts'

import {CheckInSchema,checkInSchema} from '@/validations/forms/checkInSchema.ts'

const {
    moodScore: moodConfig,
    painLevel: painConfig
} = checkInFormConfig

const NewCheckInPage = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const form = useForm<CheckInSchema>({
        resolver: zodResolver(checkInSchema),
        defaultValues: {
            moodScore: moodConfig.min,
            painLevel: painConfig.min,
            activities: [],
            notes: ''
        }
    })

    const onSubmit = async (values: CheckInSchema) => {
        setError('')
        try {
            await handleCheckInSubmit(values)
            toast.success('Check-in saved!')
            navigate({to: '/check-in'})
        } catch (err) {
            const message = (err as any).response?.data?.message
            setError(message || (err as Error).message)
        }
    }

    return (
        <Page>
            <h1 className={'mb-6 text-2xl font-bold'}>
                New Check-in
            </h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className={
                        'flex flex-col gap-6 animate-in fade-in-0 ' +
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
                    <NotesField formControl={form.control}/>
                    {error && (
                        <Error error={error}/>
                    )}
                    <Button type={'submit'}>
                        Save Check-in
                    </Button>
                </form>
            </Form>
        </Page>
    )
}

export default NewCheckInPage