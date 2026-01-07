import {ReactNode} from 'react'

import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

import {LangProvider} from '@/context/langContext'

import {persistor, store} from '@/store'

const ContextProvider = ({children}: { children: ReactNode }) => (
    <Provider store={store}>
        <PersistGate
            loading={null}
            persistor={persistor}>
            <LangProvider>
                {children}
            </LangProvider>
        </PersistGate>
    </Provider>
)

export default ContextProvider
