import {useState} from 'react'

import {useForm} from 'react-hook-form'
import {toast} from 'sonner'

import {zodResolver} from '@hookform/resolvers/zod'

import {Profile} from '@/types/profile'

import {Error as ErrorAlert} from '@/components/shared/Error'
import {Button} from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {Textarea} from '@/components/ui/textarea'

import {
    useUpdateProfileMutation
} from '@/hooks/useProfileMutations'

import {getErrorMessage} from '@/lib/errors.ts'

import {
    ProfileUpdateSchema,
    profileUpdateSchema
} from '@/validations/forms/profileSchema'

interface ProfileFormProps {
    profile: Profile | undefined
    isLoading: boolean
}

export const ProfileForm = ({
    profile,
    isLoading
}: ProfileFormProps) => {
    const [error, setError] = useState<string | null>(null)
    const mutation = useUpdateProfileMutation()
    const form = useForm<ProfileUpdateSchema>({
        resolver: zodResolver(profileUpdateSchema),
        defaultValues: {
            bio: profile?.bio ?? '',
            location: profile?.location ?? '',
            timezone: profile?.timezone ?? ''
        }
    })

    const handleSubmit = async (
        data: ProfileUpdateSchema
    ) => {
        try {
            setError(null)
            await mutation.mutateAsync(data)
            toast.success('Profile updated successfully')
        } catch (err: unknown) {
            setError(getErrorMessage(err))
        }
    }

    return (
        <div className={'space-y-6'}>
            {error && (
                <ErrorAlert error={error}/>
            )}
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(
                        handleSubmit
                    )}
                    className={'space-y-4'}
                >
                    <FormField
                        control={form.control}
                        name={'bio'}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    {'Bio'}
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder={'Tell us about yourself'}
                                        disabled={isLoading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={'location'}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    {'Location'}
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={'City, Country'}
                                        disabled={isLoading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={'timezone'}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    {'Timezone'}
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={'e.g. UTC, EST'}
                                        disabled={isLoading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button
                        type={'submit'}
                        disabled={
                            isLoading ||
                            mutation.isPending
                        }
                    >
                        {mutation.isPending
                            ? 'Saving...'
                            : 'Save Changes'
                        }
                    </Button>
                </form>
            </Form>
        </div>
    )
}