import { useFormik } from 'formik'
import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native'
import theme from '../theme'
import { useNavigate } from 'react-router-native'
import validationSchema from '../signUpValidation'
import { useMutation } from '@apollo/client'
import { SIGNUP } from '../graphql/mutations'
import useSignIn from '../hooks/useSignIn'

const SignUp = () => {
    const style = StyleSheet.create({
        signUpContainer: {
            display: 'flex',
            margin: 10,
        },
        inputContainer: {
            marginBottom: 15,
            borderWidth: 1,
            padding: 10,
            borderRadius: 7,
            fontFamily: theme.fonts.main,
        },
        errorText: {
            color: '#d73a4a',
            fontSize: theme.fontSizes.body,
            fontWeight: theme.fontWeights.normal,
            fontFamily: theme.fonts.main,
        },
        errorInputContainer: {
            marginBottom: 1,
            borderWidth: 1,
            padding: 10,
            borderRadius: 7,
            borderColor: '#d73a4a',
            fontFamily: theme.fonts.main,
        },
        buttonText: {
            fontWeight: theme.fontWeights.bold,
            fontSize: theme.fontSizes.subheading,
            color: theme.colors.textSecondary,
            fontFamily: theme.fonts.main,
        },
        signButton: {
            padding: 10,
            backgroundColor: '#0066D3',
            borderRadius: 6,
            display: 'flex',
            alignItems: 'center',
        },
    })

    const [signIn] = useSignIn()
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
            } catch (e) {
                console.log(e)
            }
            const { data } = await signIn({
                variables: { username, password },
            })
            navigate('/')
        },
    })

    return (
        <View style={style.signUpContainer}>
            <TextInput
                placeholder="Username"
                value={formik.values.username}
                onChangeText={formik.handleChange('username')}
                style={
                    formik.touched.username && formik.errors.username
                        ? style.errorInputContainer
                        : style.inputContainer
                }
            />
            {formik.touched.username && formik.errors.username && (
                <Text style={style.errorText}>{formik.errors.username}</Text>
            )}
            <TextInput
                placeholder="Password"
                value={formik.values.password}
                secureTextEntry
                onChangeText={formik.handleChange('password')}
                style={
                    formik.touched.password && formik.errors.password
                        ? style.errorInputContainer
                        : style.inputContainer
                }
            />
            {formik.touched.password && formik.errors.password && (
                <Text style={style.errorText}>{formik.errors.password}</Text>
            )}
            <TextInput
                placeholder="Password confirmation"
                value={formik.values.passwordConf}
                secureTextEntry
                onChangeText={formik.handleChange('passwordConf')}
                style={
                    formik.touched.passwordConf && formik.errors.passwordConf
                        ? style.errorInputContainer
                        : style.inputContainer
                }
            />
            {formik.touched.passwordConf && formik.errors.passwordConf && (
                <Text style={style.errorText}>
                    {formik.errors.passwordConf}
                </Text>
            )}
            <View style={style.signButton}>
                <Pressable onPress={formik.handleSubmit}>
                    <Text style={style.buttonText}>Sign up</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default SignUp
