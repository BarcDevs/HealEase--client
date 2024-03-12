import Page from '@/components/shared/ui/Page.tsx'
import {posts} from '@/mocks/post.ts'
import PostList from '@/components/forum/PostList.tsx'

const ForumHomePage = ({}) => (
    <Page>
        {/*<FilterButtons />*/}
        <PostList posts={posts}/>
    </Page>
)


export default ForumHomePage
