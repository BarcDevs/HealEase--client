import {Post} from '@/types/forum'
import {Card, CardContent, CardFooter, CardHeader} from '@/components/ui/card.tsx'
import {Link} from '@tanstack/react-router'
import Metric from '@/components/shared/ui/Metric.tsx'
import {toRelative, toShortNumber} from '@/lib/utils.ts'
import Tag from '@/components/forum/Tag.tsx'
import UserLabel from '@/components/shared/ui/UserLabel.tsx'

type Props = {
    post: Post
}

const PostCard = ({post: {_id, title, tags, createdAt, author, views, replies, votes}}: Props) => (
    <Card
        className={'w-full rounded-[10px] border-none bg-slate-100 p-9 shadow shadow-slate-700 sm:px-11 sm:pt-[30px]'}>
        <CardHeader className={'mb-3.5 flex items-start justify-between gap-5 p-0 max-sm:flex-col-reverse'}>
            <Link
                to={'/forum/posts/$postId'}
                params={{postId: _id}}
            >
                <h3 className={'line-clamp-1 flex-1 font-bold'}>
                    {title}
                </h3>
            </Link>
            <span className={'line-clamp-1 flex sm:hidden'}>
                    {toRelative(createdAt)}
                </span>
            {/*{buttons && <div>*/}
            {/*</div>}*/}
        </CardHeader>

        <CardContent className={'flex flex-wrap gap-2 p-0'}>
            {tags.map(tag => (
                <Tag key={tag._id} tag={tag}/>
            ))}
        </CardContent>

        <CardFooter className={'flex-row-between mt-6 w-full flex-wrap gap-3 p-0'}>
            <Link
                className={'flex-center flex-row gap-1'}
                to={'/forum/profile/$authorId'}
                params={{authorId: author._id}}
            >
                <UserLabel
                    user={author}
                    textStyles={'body-medium'}
                />
            </Link>

            <div className={'flex flex-row items-center gap-2.5'}>
                <Metric
                    image={'like'}
                    title={'Votes'}
                    value={toShortNumber(votes.positive - votes.negative)}
                    textStyles={''}
                />

                <Metric
                    image={'message'}
                    title={'Replies'}
                    value={toShortNumber(replies.length)}
                    textStyles={''}
                />

                <Metric
                    image={'eye'}
                    title={'Views'}
                    value={toShortNumber(views)}
                    textStyles={''}
                />
            </div>
        </CardFooter>
    </Card>
)


export default PostCard
