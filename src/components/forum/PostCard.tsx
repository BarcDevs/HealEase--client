import {Post, Reply} from '@/types/forum.ts'
import {Card, CardContent, CardFooter, CardHeader} from '@/components/ui/card.tsx'
import {Link} from '@tanstack/react-router'
import Metric from '@/components/shared/ui/Metric.tsx'
import {toRelative, toShortNumber} from '@/lib/time.ts'
import Tag from '@/components/forum/Tag.tsx'
import UserLabel from '@/components/shared/ui/UserLabel.tsx'

type PostProps = {
    type: 'post'
    post: Post
}

type ReplyProps = {
    type: 'reply'
    reply: Reply
}

type Props = PostProps | ReplyProps

// todo find out the best way to handle conditional types on react component
const PostCard = (props: Props) => {
    const {type} = props
    const data: Post | Reply = type === 'post' ? props.post : props.reply

    return (
        <Card
            className={'w-full rounded-[10px] border-none bg-slate-100 p-9 shadow shadow-slate-700 sm:px-11 sm:pt-[30px]'}>
            <CardHeader className={'mb-3.5 flex items-start justify-between gap-5 p-0 max-sm:flex-col-reverse'}>
                {type === 'post' && <Link
                    to={'/forum/posts/$postId'}
                    params={{postId: data.id}}
                >
                    <h3 className={'line-clamp-1 flex-1 font-bold'}>
                        {(data as Post).title}
                    </h3>
                </Link>}
                <span className={'line-clamp-1 flex sm:hidden'}>
                    {toRelative(data.createdAt)}
                </span>
                {/* todo edit buttons */}
                {/*{buttons && <div>*/}
                {/*</div>}*/}
            </CardHeader>

            <CardContent className={'flex flex-wrap gap-2 p-0'}>
                {type === 'post' && (data as Post).tags.map(tag => (
                    <Tag key={tag.id} tag={tag}/>
                ))}
                {type === 'reply' && <p>{data.body}</p>}
            </CardContent>

            <CardFooter className={'flex-row-between mt-6 w-full flex-wrap gap-3 p-0'}>
                <div className={'flex--row flex-center gap-1'}>
                    <Link className={'flex items-center gap-1'}
                          to={'/forum/profile/$authorId'}
                          params={{authorId: data.author?.id || ''}}
                    >
                        {data.author && <UserLabel
                            user={data.author}
                        />}

                        <span className={'line-clamp-1 text-sm opacity-80'}>
                            {`• posted ${toRelative(data.createdAt)}`}
                        </span>
                    </Link>
                </div>

                <div className={'metrics'}>
                    <Metric
                        image={'like'}
                        title={'Votes'}
                        value={toShortNumber(data.votes.upvotes - data.votes.downvotes)}
                        textStyles={''}
                    />

                    {type === 'post' && <>
                        <Metric
                            image={'message'}
                            title={'Replies'}
                            value={toShortNumber((data as Post)._count?.replies || 0)}
                            textStyles={''}
                        />

                        <Metric
                            image={'eye'}
                            title={'Views'}
                            value={toShortNumber((data as Post).views)}
                            textStyles={''}
                        />
                    </>}
                </div>
            </CardFooter>
        </Card>
    )
}

export default PostCard
