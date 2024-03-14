import Page from '@/components/shared/ui/Page.tsx'
import PostList from '@/components/forum/PostList.tsx'
import {useLoaderData} from '@tanstack/react-router'
import FilterButtons from '@/components/forum/FilterButtons.tsx'

const ForumHomePage = ({}) => {
    const posts = useLoaderData({from: '/_forum/forum/'})

    return (
        <Page>
            <FilterButtons />
            <PostList posts={posts}/>
        </Page>
    )
}


export default ForumHomePage
