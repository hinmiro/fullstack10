import { useFormik } from 'formik'
import { Text, View } from 'react-native'
import theme from '../theme'
import { useNavigate } from 'react-router-native'
import validationSchema from '../signUpValidation'
import { useMutation } from '@apollo/client'
import { SIGNUP } from '../graphql/mutations'

const SignUp = () => {
    const navigate = useNavigate()
    const [signUp, { data, error }] = useMutation(SIGNUP, {
        fetchPolicy: 'no-cache',
    })

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            passwordConf: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            const { username, password } = values
            try {
                const { data } = await signUp({
                    variables: { username, password },
                })
                console.log(data)
            } catch (e) {
                console.log(e)
            }
        },
    })

    return (
        <View>
            <Text>Sign up component</Text>
        </View>
    )
}

export default SignUp
