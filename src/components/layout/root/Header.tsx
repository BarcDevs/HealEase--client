import {Link} from '@tanstack/react-router'
import {Button} from '@/components/ui/button.tsx'
import {useLanguage} from '@/context/langContext.tsx'
import languages from '@/data/languages.ts'

const Header = () => {
    const {lang, changeLang} = useLanguage()

    const toggleLang = () => {
        changeLang(lang.code === 'en' ? languages.he : languages.en)
    }

    return (
        <header className={'flex h-20 w-screen items-center justify-between border-b border-gray-200 p-4'}>
            <Button onClick={toggleLang}>direction</Button>
            <Link className={'text-blue-500'} to={'/forum'}>Forum</Link>
        </header>
    )
}


export default Header
