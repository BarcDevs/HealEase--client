import {createFileRoute} from '@tanstack/react-router'
import ForumHomePage from '@/pages/forum/ForumHomePage.tsx'
import {ForumSearchParams} from '@/types/router.ts'
import {Filter} from '@/data/forum/filters.ts'
import {postsLoader} from '@/loaders/forum.ts'

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
    loader: async ({deps: {search}}) => await postsLoader(search),
    pendingComponent: () => <ForumHomePage isLoading/>,
    component: ForumHomePage
})
