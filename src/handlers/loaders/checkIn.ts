import {CheckIn, CheckInStats} from '@/types/checkIn.ts'

import {DEFAULTS} from '@/constants/defaults.ts'

import {fetchCheckIns, fetchCheckInStats} from '@/api/checkIn.ts'

type CheckInLoaderData = {
    history: CheckIn[]
    stats: CheckInStats
}

export const checkInLoader = async (): Promise<CheckInLoaderData> => {
    const [historyRes, statsRes] = await Promise.all([
        fetchCheckIns(DEFAULTS.checkIn.historyLimit),
        fetchCheckInStats()
    ])

    return {
        history: historyRes.data.data,
        stats: statsRes.data.data
    }
}

export const newCheckInLoader = async (): Promise<CheckInLoaderData> => {
    const [historyRes, statsRes] = await Promise.all([
        fetchCheckIns(DEFAULTS.checkIn.historyLimit),
        fetchCheckInStats()
    ])

    return {
        history: historyRes.data.data,
        stats: statsRes.data.data
    }
}