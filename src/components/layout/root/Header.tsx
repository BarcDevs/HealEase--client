import {Button} from '@/components/ui/button.tsx'
// import {useLanguage} from '@/context/langContext.tsx'
// import languages from '@/data/languages.ts'
import {useAuth} from '@/hooks/useAuth.ts'
import Logo from '@/components/shared/Logo.tsx'
import {BRAND_NAME, BUTTONS} from '@/constants/plainTexts.ts'
import Nav from '@/components/layout/root/Nav.tsx'
import {Link} from '@tanstack/react-router'

const Header = () => {
    // const {lang, changeLang} = useLanguage()
    const {isLoggedIn, logout} = useAuth()

    // const toggleLang = () => {
    //     changeLang(lang.code === 'en' ? languages.he : languages.en)
    // }

    return (
        <header className={'sticky top-0 z-50 border-b border-blue-100 bg-white/80 backdrop-blur-sm'}>
            <div className={'container mx-auto p-4'}>
                <div className={'flex items-center justify-between'}>
                    <div className={'flex items-center space-x-2'}>
                        <div
                            className={'flex size-8 items-center justify-center'}>
                            <Logo/>
                        </div>
                        <span className={'text-xl font-bold text-gray-800'}>
                            {BRAND_NAME}
                        </span>
                    </div>

                    <Nav/>

                    <div className={'flex space-x-2'}>
                        {!isLoggedIn &&
                            <section className={'flex space-x-2'}>
                                <Button
                                    variant={'outline'}
                                    className={'hidden border-blue-200 text-blue-600 hover:bg-blue-50 sm:inline-flex'}>
                                    <Link
                                        to={'/login'}
                                        search={{ redirect: '/' }}
                                    >
                                        {BUTTONS.signIn}
                                    </Link>
                                </Button>

                                <Button
                                    className={'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'}>
                                    <Link to={'/signup'}>
                                        {BUTTONS.joinNow}
                                    </Link>
                                </Button>
                            </section>}

                        {isLoggedIn &&
                            <Button
                                className={'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800'}
                                onClick={logout}>
                                {BUTTONS.logout}
                            </Button>
                        }
                    </div>

                    {/*TODO: Add language picker*/}
                    {/*<Button onClick={toggleLang}>*/}
                    {/*    {lang.name}*/}
                    {/*</Button>*/}
                </div>
            </div>
        </header>
    )
}

export default Header
