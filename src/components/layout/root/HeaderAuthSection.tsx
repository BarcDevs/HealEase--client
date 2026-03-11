import LoggedInButtons from '@/components/layout/root/LoggedInButtons.tsx'
import NotLoggedInButtons from '@/components/layout/root/NotLoggedInButtons.tsx'

type HeaderAuthSectionProps = {
    isLoggedIn: boolean
    logout: () => void
}

const HeaderAuthSection = ({
    isLoggedIn,
    logout
}: HeaderAuthSectionProps) => (
    <section className={'hidden gap-2 sm:flex'}>
        {isLoggedIn ? (
            <LoggedInButtons logout={logout}/>
        ) : (
            <NotLoggedInButtons/>
        )}
    </section>
)

export default HeaderAuthSection
