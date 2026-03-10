import {toast} from 'sonner'

import {HealthInterest} from '@/types/profile'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import {Checkbox} from '@/components/ui/checkbox'
import {Label} from '@/components/ui/label'

import {
    useAddInterestsMutation,
    useRemoveInterestMutation
} from '@/hooks/useProfileMutations'
import {useProfileOptionsQuery} from '@/hooks/useProfileOptionsQuery'
import {useProfileQuery} from '@/hooks/useProfileQuery'

export const HealthInterestSelector = () => {
    const {data: profile} = useProfileQuery()
    const {data: options} = useProfileOptionsQuery()
    const addMutation = useAddInterestsMutation()
    const removeMutation = useRemoveInterestMutation()

    const currentSlugs = new Set(
        profile?.healthInterests.map(i => i.slug) ?? []
    )

    const groupedByCategory: Record<
        string,
        HealthInterest[]
    > = (options?.healthInterests ?? [])
        .reduce((
            acc: Record<string, HealthInterest[]>,
            interest: HealthInterest
        ) => {
            if (!acc[interest.category]) {
                acc[interest.category] = []
            }
            acc[interest.category].push(interest)
            return acc
        }, {})

    const handleToggleInterest = async (
        slug: string,
        isChecked: boolean
    ) => {
        try {
            if (isChecked) {
                await addMutation.mutateAsync([slug])
                toast.success('Interest added')
            } else {
                await removeMutation.mutateAsync(slug)
                toast.success('Interest removed')
            }
        } catch (err) {
            const message = err instanceof Error
                ? err.message
                : 'Failed to update interests'
            toast.error(message)
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Health Interests
                </CardTitle>
                <CardDescription>
                    Select topics you are interested in
                </CardDescription>
            </CardHeader>
            <CardContent className={'space-y-6'}>
                {Object
                    .entries(groupedByCategory)
                    .map(
                    ([category, interests]) => (
                        <div
                            key={category}
                            className={'space-y-2'}
                        >
                            <h3 className={'font-semibold'}>
                                {category}
                            </h3>
                            <div className={'space-y-2'}>
                                {interests.map(
                                    (interest: HealthInterest) => (
                                        <div
                                            key={interest.slug}
                                            className={'flex items-center gap-2'}
                                        >
                                            <Checkbox
                                                id={`interest-${interest.slug}`}
                                                checked={currentSlugs.has(
                                                    interest.slug
                                                )}
                                                onCheckedChange={(
                                                    checked
                                                ) =>
                                                    handleToggleInterest(
                                                        interest.slug,
                                                        checked === true
                                                    )
                                                }
                                                disabled={
                                                    addMutation.isPending ||
                                                    removeMutation.isPending
                                                }
                                            />
                                            <Label
                                                htmlFor={`interest-${interest.slug}`}
                                            >
                                                {interest.name}
                                            </Label>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    )
                )}
            </CardContent>
        </Card>
    )
}