import {ReactNode} from 'react'
import {LangProvider} from '@/context/langContext.tsx'
import {Provider} from 'react-redux'
import store from '@/store'

const ContextProvider = ({children}: { children: ReactNode }) => (
    <Provider store={store}>
        <LangProvider>
            {children}
        </LangProvider>
    </Provider>
)


export default ContextProvider
