import {useState} from 'react'

import {useForm} from 'react-hook-form'
import {toast} from 'sonner'

import {zodResolver} from '@hookform/resolvers/zod'
import {useNavigate, useRouter} from '@tanstack/react-router'

import {CheckIn} from '@/types/checkIn'

import {extractErrorMsg} from '@/utils/error'

import {TOASTS} from '@/constants/plainTexts'

import checkInFormConfig from '@/config/schema/checkInForm'

import {handleCheckInSave} from '@/handlers/actions/checkIn'

import {
    CheckInSchema,
    checkInSchema
} from '@/validations/forms/checkInSchema'

const {
    moodScore: moodConfig,
    painLevel: painConfig
} = checkInFormConfig

export const useCheckInForm = (
    existingCheckIn?: CheckIn | null
) => {
    const navigate = useNavigate()
    const router = useRouter()
    const [error, setError] = useState('')
    const [isPending, setIsPending] = useState(false)

    const isUpdate = existingCheckIn != null

    const form = useForm<CheckInSchema>({
        resolver: zodResolver(checkInSchema),
        defaultValues: isUpdate ? {
            moodScore: existingCheckIn.moodScore,
            painLevel: existingCheckIn.painLevel,
            activities: existingCheckIn.activities,
            notes: existingCheckIn.notes ?? ''
        } : {
            moodScore: moodConfig.min,
            painLevel: painConfig.min,
            activities: [],
            notes: ''
        }
    })

    const onSubmit = async (values: CheckInSchema) => {
        setError('')
        setIsPending(true)
        try {
            const result = await handleCheckInSave(
                values,
                existingCheckIn ?? undefined
            )

            await router.invalidate()
            await navigate({
                to: '/check-in',
                replace: true
            })

            const message = result.created
                ? TOASTS.checkInSaved
                : TOASTS.checkInUpdated

            toast.success(message)
        } catch (err) {
            const errorMsg = extractErrorMsg(err)
            setError(errorMsg)
            toast.error(errorMsg)
        } finally {
            setIsPending(false)
        }
    }

    return {
        form,
        onSubmit,
        error,
        isPending,
        isUpdate
    }
}