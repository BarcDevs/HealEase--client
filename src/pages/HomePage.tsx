import About from '@/components/home/About'
import Benefits from '@/components/home/Benefits'
import Features from '@/components/home/Features'
import Hero from '@/components/home/Hero'
import ProductPreview from '@/components/home/ProductPreview'
import QuickActions from '@/components/home/QuickActions'

import {useAuth} from '@/hooks/useAuth.ts'

const HomePage = () => {
    const {isLoggedIn} = useAuth()

    return (
        <main className="min-h-screen bg-linear-to-br from-blue-50 to-green-50">
            <Hero/>
            {isLoggedIn ? (
                <>
                    <QuickActions/>
                    <ProductPreview/>
                </>
            ) : (
                <>
                    <Features/>
                    <Benefits/>
                    <About/>
                </>
            )}
        </main>
    )
}

export default HomePage
