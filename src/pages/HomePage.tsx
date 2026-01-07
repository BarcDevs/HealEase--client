import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import Benefits from '@/components/home/Benefits'
import About from '@/components/home/About'

const HomePage = ({}) => (
    <main className="min-h-screen bg-linear-to-br from-blue-50 to-green-50">
        <Hero/>
        <Features/>
        <Benefits/>
        <About/>
    </main>
)

export default HomePage
