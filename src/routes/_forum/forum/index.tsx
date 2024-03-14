import {createFileRoute} from '@tanstack/react-router'
import ForumHomePage from '@/pages/forum/ForumHomePage.tsx'
import {fetchPosts} from '@/mocks/loaders.ts'
import {Filter} from '@/data/forum/filters.ts'
import {ForumSearchParams} from '@/types/router'

export const Route = createFileRoute('/_forum/forum/')({
    validateSearch: (params: Record<string, unknown>): ForumSearchParams => {
        return {
            filter: params['filter'] as Filter || Filter.newest
        }
    },
    loader: async () => {
        return fetchPosts()
    },
    component: ForumHomePage
})
