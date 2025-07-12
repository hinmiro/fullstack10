import { Text, TextInput, Pressable, View, StyleSheet } from 'react-native'
import { useFormik } from 'formik'
import theme from '../theme'

const SignIn = () => {
    const style = StyleSheet.create({
        formContainer: {
            display: 'flex',
            margin: 10,
        },
        inputContainer: {
            marginBottom: 15,
            borderWidth: 1,
            padding: 10,
            borderRadius: 7
        },
        signButton: {
            padding: 10,
            backgroundColor: 'blue',
            borderRadius: 6,
            display: 'flex',
            alignSelf: 'flex-end',
            alignItems: 'center',
        },
        buttonText: {
            fontWeight: theme.fontWeights.bold,
            fontSize: theme.fontSizes.subheading,
            color: theme.colors.textSecondary
        }
    })

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: (values) => {
            console.log(values)
        },
    })

    return (
        <>
            <View style={style.formContainer}>
                    <TextInput
                        placeholder="username"
                        value={formik.values.username}
                        onChangeText={formik.handleChange('username')}
                        style={style.inputContainer}
                    />
                    <TextInput
                        placeholder="password"
                        secureTextEntry
                        value={formik.values.password}
                        onChangeText={formik.handleChange('password')}
                        style={style.inputContainer}
                    />
                <View style={style.signButton}>
                    <Pressable onPress={formik.handleSubmit}>
                        <Text style={style.buttonText}>Sign in</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

export default SignIn
