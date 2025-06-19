import Page from '@/components/shared/ui/Page.tsx'
import {getRouteApi} from '@tanstack/react-router'
import Post from '@/components/forum/Post.tsx'
import {Post as PostType} from '@/types/forum.ts'

const route = getRouteApi('/_forum/forum/posts/$postId')

const PostPage = ({}) => {
    const post = route.useLoaderData()

    return (
        <Page>
            {post && <Post post={post as PostType}/>}
        </Page>
    )
}

export default PostPage
