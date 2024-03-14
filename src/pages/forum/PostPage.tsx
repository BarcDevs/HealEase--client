import Page from '@/components/shared/ui/Page.tsx'
import {useLoaderData} from '@tanstack/react-router'
import Post from '@/components/forum/Post.tsx'

const PostPage = ({}) => {
    const post = useLoaderData({from: '/_forum/forum/posts/$postId'})

    return (
        <Page>
            <Post post={post}/>
        </Page>
    )
}


export default PostPage
