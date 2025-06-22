import {ReactNode} from 'react'
import {LangProvider} from '@/context/langContext'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

import {store, persistor} from '@/store'

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
