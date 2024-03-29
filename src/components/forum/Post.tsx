import {Post as PostType, Reply} from '@/types/forum.ts'
import Tag from '@/components/forum/Tag.tsx'
import Metric from '@/components/shared/ui/Metric.tsx'
import {toRelative, toShortNumber} from '@/lib/utils.ts'
import {Button} from '@/components/ui/button.tsx'
import Icon from '@/components/shared/ui/Icon.tsx'
import {Link} from '@tanstack/react-router'
import UserLabel from '@/components/shared/ui/UserLabel.tsx'
import Replies from '@/components/forum/Replies.tsx'
import {useAuth} from '@/hooks/useAuth.ts'

type Props = {
    post: PostType
}

const Post = ({post: {id, title, body, author, tags, createdAt, votes, replies, views}}: Props) => {
    const {user} = useAuth()
    const isAuthor = user?.id === author?.id

    return (
        <div className={'flex--col gap-5 p-3'}>
            <section className={'flex--row justify-between gap-2.5'}>
                <Link to={'/forum'}>
                    <Button className={'rounded-full bg-slate-500 p-2 rtl:rotate-180'}>
                        <Icon name={'arrow-left'} size={25}/>
                    </Button>
                </Link>

                {author && <Link to={'/forum/profile/$authorId'}
                       params={{authorId: author.id}}
                       className={'ml-14'}
                >
                    <UserLabel user={author} withName/>
                </Link>}
            </section>
            <h3 className={'inline-flex items-center gap-2 text-xl font-bold'}>
                {title}
                {isAuthor &&
                    <span>
                        <Link to={'/forum/posts/$postId/edit'} params={{postId: id}}>
                           <Icon name={'edit'} size={16}/>
                        </Link>
                    </span>
                }
            </h3>
            <p>{body}</p>
            <section className={'flex--row justify-between'}>
                <div className={'metrics'}>
                    <Metric
                        image={'clock'}
                        title={''}
                        value={`posted ${toRelative(createdAt)}`}
                        textStyles={''}
                    />

                    <Metric
                        image={'like'}
                        title={''}
                        value={toShortNumber(votes.upvotes)}
                        textStyles={''}
                    />

                    <Metric
                        image={'dislike'}
                        title={''}
                        value={toShortNumber(votes.downvotes)}
                        textStyles={''}
                    />

                    <Metric
                        image={'message'}
                        title={''}
                        value={toShortNumber(replies.length)}
                        textStyles={''}
                    />

                    <Metric
                        image={'eye'}
                        title={''}
                        value={toShortNumber(views)}
                        textStyles={''}
                    />
                </div>
                <div className={'flex--row gap-1'}>
                    <Metric
                        image={'upvote'}
                        title={''}
                        value={votes.upvotes}
                        textStyles={''}
                    />

                    <Metric
                        image={'downvote'}
                        title={''}
                        value={votes.downvotes}
                        textStyles={''}
                    />

                    <button>
                        <Icon name={'star-red'} size={16}/>
                    </button>
                </div>
            </section>
            <section className={'flex flex-row gap-3'}>
                {tags.map(tag => (
                    <Tag key={tag.id} tag={tag}/>
                ))}
            </section>
            {/* todo populate replies on loader */}
            <Replies replies={replies as Reply[]}/>
        </div>
    )
}


export default Post
