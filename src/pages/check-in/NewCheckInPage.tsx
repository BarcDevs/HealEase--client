import {useState} from 'react'

import {toast} from 'sonner'

import {
    getRouteApi,
    useNavigate,
    useRouter
} from '@tanstack/react-router'

import CheckInForm from '@/components/check-in/form/CheckInForm.tsx'
import Page from '@/components/shared/ui/Page.tsx'

import {useCheckInForm} from '@/hooks/useCheckInForm.ts'

import {DEFAULTS} from '@/constants/defaults.ts'
import {BUTTONS} from '@/constants/plainTexts'

import {handleCheckInSubmit} from '@/handlers/actions/checkIn.ts'

import {fetchCheckIns, fetchCheckInStats} from '@/api/checkIn.ts'
import {CheckInSchema} from '@/validations/forms/checkInSchema.ts'

const route = getRouteApi('/_checkin/check-in/new')

const NewCheckInPage = () => {
    const router = useRouter()
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const {stats, history} = route.useLoaderData()

    const latestCheckIn = history?.[0] ?? null

    const {
        form,
        isTodayCheckInExists,
        suggestedActivities,
        handleAddActivity
    } = useCheckInForm({
        latestCheckIn,
        stats
    })

    const buttonText = isTodayCheckInExists ?
        BUTTONS.updateCheckIn :
        'Start Check-in'

    const onSubmit = async (values: CheckInSchema) => {
        setError('')
        try {
            await handleCheckInSubmit(values)
            toast.success('Check-in saved!')
            await Promise.all([
                fetchCheckIns(DEFAULTS.checkIn.historyLimit),
                fetchCheckInStats()
            ])
            router.invalidate()
            navigate({to: '/check-in'})
        } catch (err) {
            const message = (err as any).response?.data?.message
            setError(message || (err as Error).message)
        }
    }

    return (
        <Page>
            <div className={'mb-8'}>
                <h1 className={'text-2xl font-bold'}>
                    {buttonText}
                </h1>
            </div>

            <CheckInForm
                form={form}
                suggestedActivities={suggestedActivities}
                buttonText={buttonText}
                error={error}
                onSubmit={onSubmit}
                onAddActivity={handleAddActivity}
            />
        </Page>
    )
}

export default NewCheckInPage