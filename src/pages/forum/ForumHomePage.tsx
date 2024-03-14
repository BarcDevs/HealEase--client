import Page from '@/components/shared/ui/Page.tsx'
import PostList from '@/components/forum/PostList.tsx'
import {getRouteApi} from '@tanstack/react-router'
import FilterButtons from '@/components/forum/FilterButtons.tsx'

const route = getRouteApi('/_forum/forum/')

const ForumHomePage = ({}) => {
    const posts = route.useLoaderData()

    return (
        <Page>
            <FilterButtons/>
            <PostList posts={posts}/>
        </Page>
    )
}


export default ForumHomePage
