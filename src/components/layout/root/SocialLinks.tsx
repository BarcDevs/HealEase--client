import Icon from '@/components/shared/ui/Icon.tsx'
import {SOCIAL_LINKS} from '@/constants/componentData.ts'
import {Link} from '@tanstack/react-router'

const style = 'flex size-8 cursor-pointer items-center justify-center rounded-full bg-gray-700 transition-colors hover:bg-gray-600'

const SocialLinks = ({}) => (
    <div className={'mt-4 flex space-x-4 md:mt-0'}>
        {
            SOCIAL_LINKS.map(link => (
                <Link
                    to={link.href}
                    className={style}>
                    <Icon name={link.title.toLowerCase()}
                          size={25}/>
                </Link>
            ))
        }
    </div>
)

export default SocialLinks
