import {createFileRoute} from '@tanstack/react-router'
import ForumHomePage from '@/pages/forum/ForumHomePage.tsx'
import {fetchPosts} from '@/mocks/loaders.ts'
import {ForumSearchParams} from '@/types/router'
import {Filter} from '@/data/forum/filters.ts'

export const Route = createFileRoute('/_forum/forum/')({
    validateSearch: (params: ForumSearchParams) => {
        // TODO: Add validation
        return {
            filter: params.filter || Filter.newest,
            ...params
        }
    },
    beforeLoad: ({search}) => ({search}),
    loader: ({context}) => fetchPosts(context.search),
    component: ForumHomePage
})
