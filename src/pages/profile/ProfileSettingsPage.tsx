import {
    ActivityPreferenceSelector
} from '@/components/profile/ActivityPreferenceSelector'
import {
    HealthInterestSelector
} from '@/components/profile/HealthInterestSelector'
import {ProfileForm} from '@/components/profile/ProfileForm'
import {Skeleton} from '@/components/ui/skeleton'

import {useProfileQuery} from '@/hooks/useProfileQuery'

export const ProfileSettingsPage = () => {
    const {
        data: profile,
        isLoading,
        error
    } = useProfileQuery()

    if (isLoading) {
        return (
            <div className={'space-y-8'}>
                <Skeleton className={'h-64'}/>
                <Skeleton className={'h-64'}/>
                <Skeleton className={'h-64'}/>
            </div>
        )
    }

    if (error || !profile) {
        return (
            <div className={'text-red-600'}>
                {'Failed to load profile'}
            </div>
        )
    }

    return (
        <div className={'space-y-8'}>
            <div>
                <h1 className={'text-3xl font-bold'}>
                    {'Profile Settings'}
                </h1>
                <p className={'text-gray-600'}>
                    {'Manage your profile information'}
                </p>
            </div>

            <div>
                <h2 className={'text-2xl font-semibold mb-4'}>
                    {'Edit Profile'}
                </h2>
                <ProfileForm
                    profile={profile}
                    isLoading={isLoading}
                />
            </div>

            <div>
                <h2 className={'text-2xl font-semibold mb-4'}>
                    {'Health Interests'}
                </h2>
                <HealthInterestSelector/>
            </div>

            <div>
                <h2 className={'text-2xl font-semibold mb-4'}>
                    {'Activity Preferences'}
                </h2>
                <ActivityPreferenceSelector/>
            </div>
        </div>
    )
}