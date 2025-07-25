import { useMutation } from '@apollo/client'
import { AUTHENTICATE } from '../graphql/mutations'

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHENTICATE)

    const signIn = async (props) => {
        const { username, password } = props.variables
        return await mutate({ variables: { username, password } })
    }
    return [signIn, result]
}

export default useSignIn
