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
        } as ForumSearchParams
    },
    // beforeLoad: ({search}) => ({search}),
    loaderDeps: ({search}) => ({search}),
    loader: async ({deps: {search}}) => await fetchPosts(search),
    pendingComponent: () => <ForumHomePage isLoading/>,
    component: ForumHomePage
})
