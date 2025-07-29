import { useMutation, useApolloClient } from '@apollo/client'

import { AUTHENTICATE } from '../graphql/mutations'
import useAuthStorage from './useAuthStorage'

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHENTICATE)
    const authStorage = useAuthStorage()
    const apolloClient = useApolloClient()

    const signIn = async (props) => {
        const { username, password } = props.variables
        const result = await mutate({ variables: { username, password } })
        const accessToken = result?.data?.authenticate?.accessToken
        if (accessToken) {
            await authStorage.setAccessToken(accessToken)
            apolloClient.resetStore()
        }
        return result
    }
    return [signIn, result]
}

export default useSignIn
