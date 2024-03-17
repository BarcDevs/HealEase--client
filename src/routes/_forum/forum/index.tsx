import {createFileRoute} from '@tanstack/react-router'
import ForumHomePage from '@/pages/forum/ForumHomePage.tsx'
import {fetchPosts} from '@/mocks/loaders.ts'
import {Filter} from '@/data/forum/filters.ts'
import {ForumSearchParams} from '@/types/router'

export const Route = createFileRoute('/_forum/forum/')({
    validateSearch: (params: Record<string, unknown>): ForumSearchParams => {
        // TODO: Add validation
        return {
            filter: params['filter'] as Filter || Filter.newest,
            tag: params['tagId'] as string,
            category: params['categoryId'] as string,
            search: params['search'] as string
        }
    },
    loader: async () => {
        return fetchPosts()
    },
    component: ForumHomePage
})
