import {Filter} from '@/data/forum/filters.ts'

export type ForumSearchParams = {
    filter?: Filter
    tag?: string
    category?: string
    search?: string
}
