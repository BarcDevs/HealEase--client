import {toast} from 'sonner'

import {
    ActivityPreference
} from '@/types/profile'

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
    useAddActivitiesMutation,
    useRemoveActivityMutation
} from '@/hooks/useProfileMutations'
import {useProfileOptionsQuery} from '@/hooks/useProfileOptionsQuery'
import {useProfileQuery} from '@/hooks/useProfileQuery'

import {getErrorMessage} from '@/lib/errors.ts'

export const ActivityPreferenceSelector = () => {
    const {data: profile} = useProfileQuery()
    const {data: options} = useProfileOptionsQuery()
    const addMutation = useAddActivitiesMutation()
    const removeMutation = useRemoveActivityMutation()

    const currentSlugs = new Set(
        profile?.activityPreferences.map(
            a => a.slug
        ) ?? []
    )

    const groupedByCategory: Record<
        string,
        ActivityPreference[]
    > = (options?.activityPreferences ?? [])
        .reduce((
            acc: Record<string, ActivityPreference[]>,
            activity: ActivityPreference
        ) => {
            if (!acc[activity.category]) {
                acc[activity.category] = []
            }
            acc[activity.category].push(activity)
            return acc
        }, {})

    const handleToggleActivity = async (
        slug: string,
        isChecked: boolean
    ) => {
        try {
            if (isChecked) {
                await addMutation.mutateAsync([slug])
                toast.success('Activity added')
            } else {
                await removeMutation.mutateAsync(slug)
                toast.success('Activity removed')
            }
        } catch (err) {
            toast.error(getErrorMessage(err))
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Activity Preferences</CardTitle>
                <CardDescription>
                    Select activities you prefer to do
                </CardDescription>
            </CardHeader>
            <CardContent className={'space-y-6'}>
                {Object.entries(groupedByCategory).map(
                    ([category, activities]) => (
                        <div
                            key={category}
                            className={'space-y-2'}
                        >
                            <h3 className={'font-semibold'}>
                                {category}
                            </h3>
                            <div className={'space-y-2'}>
                                {activities.map(
                                    (
                                        activity: ActivityPreference
                                    ) => (
                                        <div
                                            key={activity.slug}
                                            className={'flex items-center gap-2'}
                                        >
                                            <Checkbox
                                                id={`activity-${activity.slug}`}
                                                checked={currentSlugs.has(
                                                    activity.slug
                                                )}
                                                onCheckedChange={(
                                                    checked
                                                ) =>
                                                    handleToggleActivity(
                                                        activity.slug,
                                                        checked === true
                                                    )
                                                }
                                                disabled={
                                                    addMutation.isPending ||
                                                    removeMutation.isPending
                                                }
                                            />
                                            <Label
                                                htmlFor={`activity-${activity.slug}`}
                                            >
                                                {activity.name}
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
