import About from '@/components/home/About'
import Benefits from '@/components/home/Benefits'
import Features from '@/components/home/Features'
import Hero from '@/components/home/Hero'

const HomePage = ({}) => (
    <main className="min-h-screen bg-linear-to-br from-blue-50 to-green-50">
        <Hero/>
        <Features/>
        <Benefits/>
        <About/>
    </main>
)

export default HomePage
