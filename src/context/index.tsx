import {ReactNode} from 'react'
import {LangProvider} from '@/context/langContext.tsx'

const ContextProvider = ({children} : {children: ReactNode}) => (
    <LangProvider>
        {children}
    </LangProvider>
)


export default ContextProvider
