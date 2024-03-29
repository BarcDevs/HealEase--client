import {Filter} from '@/data/forum/filters.ts'
import {Role} from '@/types/index.ts'

export type ForumSearchParams = {
    filter?: Filter | undefined
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
