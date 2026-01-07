import {getRouteApi} from '@tanstack/react-router'

import {Post} from '@/types/forum.ts'

import FilterButtons from '@/components/forum/FilterButtons.tsx'
import Headline from '@/components/forum/Headline.tsx'
import PostList from '@/components/forum/PostList.tsx'
import Page from '@/components/shared/ui/Page.tsx'

import {getCategory} from '@/data/forum/categories.ts'

const route = getRouteApi('/_forum/forum/')

const ForumHomePage = ({isLoading}: { isLoading?: boolean }) => {
    const posts = route.useLoaderData()
    const search = route.useSearch()
    const category = 'category' in search ? search.category : undefined

    return (
        <Page>
            <Headline
                title={category ? getCategory(category)?.name || 'Error' : 'All Posts'}
                createPost/>
            <FilterButtons/>
            {isLoading ?
                <p>Loading...</p> :
                <PostList posts={posts as Post[]}/>
            }
        </Page>
    )
}

export default ForumHomePage
