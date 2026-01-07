import {Role} from '@/types/index.ts'

import {FilterType} from '@/constants/filter.ts'

export type ForumSearchParams = {
    filter?: FilterType | undefined
    tag?: string
    category?: string
    search?: string
}

export type RouterContext = {
    auth: {
        isLoggedIn: boolean
        role?: Role
    }
}
