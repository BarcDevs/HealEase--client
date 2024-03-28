import {Reply} from '@/types/forum.ts'
import PostCard from '@/components/forum/PostCard.tsx'

type RepliesProps = {
    replies: Reply[]
}

const Replies = ({replies}: RepliesProps) => {
    return (
        <section>
            <div className={'flex-row-between'}>
                <p>
                    {`${replies.length} Replies`}
                </p>

                {/* todo sort button */}
            </div>

            <ol>
                {replies.map(reply => (
                    <li key={reply._id}>
                        <PostCard
                            type={'reply'}
                            reply={reply}
                        />
                    </li>
                ))}
            </ol>

            {/* todo add reply form */}
        </section>
    )
}

export default Replies
