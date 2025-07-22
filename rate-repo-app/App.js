import { NativeRouter } from 'react-router-native'
import { ApolloProvider } from '@apollo/client'
import Main from './src/components/Main'
import createApolloClient from './src/utils/apolloClient'
import Constants from 'expo-constants'

const apolloClient = createApolloClient()

const App = () => {
    console.log(Constants.expoConfig)

    return (
        <NativeRouter
            future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
            <ApolloProvider client={apolloClient}>
                <Main />
            </ApolloProvider>
        </NativeRouter>
    )
}

export default App
