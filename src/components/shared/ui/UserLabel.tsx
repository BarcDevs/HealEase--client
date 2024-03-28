import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar.tsx'
import {PartialUser} from '@/types'
import {getUserFallback} from '@/lib/utils'
import {twMerge} from 'tailwind-merge'

type Props = {
    user: PartialUser
    withName?: boolean
    textStyles?: string
}

const UserLabel = ({user: {image, firstName, lastName, username}, withName, textStyles}: Props) => (
    <div className={'flex-center flex-row flex-wrap gap-1'}>
        <Avatar>
            <AvatarImage src={image}/>
            <AvatarFallback className={'bg-gray-500 text-white'}>
                {getUserFallback(firstName, lastName)}
            </AvatarFallback>
        </Avatar>

        <div className={twMerge('flex--col font-bold', textStyles)}>
            <p>{username}</p>

            {withName && <p className={'line-clamp-1 text-xs font-semibold max-sm:hidden'}>
                {firstName} {lastName}
            </p>}
        </div>
    </div>
)


export default UserLabel
