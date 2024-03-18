import Page from '@/components/shared/ui/Page.tsx'
import PostList from '@/components/forum/PostList.tsx'
import {getRouteApi} from '@tanstack/react-router'
import FilterButtons from '@/components/forum/FilterButtons.tsx'
import Headline from '@/components/forum/Headline.tsx'

const route = getRouteApi('/_forum/forum/')

const ForumHomePage = ({}) => {
    const posts = route.useLoaderData()

    return (
        <Page>
            <Headline title={'All Posts'} createPost/>
            <FilterButtons/>
            <PostList posts={posts}/>
        </Page>
    )
}


export default ForumHomePage
