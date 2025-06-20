import {Post} from '@/types/forum.ts'
import PostCard from '@/components/forum/PostCard.tsx'

const PostList = ({posts}: { posts: Post[] }) => (
    <section>
        <ul>
            {posts.length > 0 ? posts.map((post) => (
                    <li key={post.id} className={'flex--col gap-5 p-3'}>
                        <PostCard post={post} type={'post'}/>
                    </li>
                )) :
                <p>No posts found</p>
            }
        </ul>
    </section>
)

export default PostList
