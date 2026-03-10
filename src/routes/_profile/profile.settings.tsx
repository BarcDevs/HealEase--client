import {createFileRoute} from '@tanstack/react-router'

import {ProfileSettingsPage} from '@/pages/profile/ProfileSettingsPage'

export const Route =
    createFileRoute('/_profile/profile/settings')({
        component: ProfileSettingsPage
    })