import {PropsWithChildren} from 'react'

const Page = ({children}: PropsWithChildren) => (
    <main className={'min-h-screen w-full p-6'}>
        {children}
    </main>
)

export default Page
