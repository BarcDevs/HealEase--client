import {Button} from '@/components/ui/button.tsx'
import {useLanguage} from '@/context/langContext.tsx'
import languages from '@/data/languages.ts'
import NavLink from '@/components/shared/ui/NavLink.tsx'

const Header = () => {
    const {lang, changeLang} = useLanguage()

    const toggleLang = () => {
        changeLang(lang.code === 'en' ? languages.he : languages.en)
    }

    return (
        <header className={'flex h-20 w-screen items-center justify-between border-b border-gray-200 p-4'}>
            <Button onClick={toggleLang}>{lang.name}</Button>
            <nav className={'flex--row gap-4'}>
                <NavLink label={'Home'} to={'/'} activeOptions={{exact: true}}/>
                <NavLink label={'Login'} to={'/login'}/>
                <NavLink label={'Forum'} to={'/forum'}/>
            </nav>
        </header>
    )
}


export default Header
