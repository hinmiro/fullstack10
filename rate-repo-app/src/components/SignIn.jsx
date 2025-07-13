import { Text, TextInput, Pressable, View, StyleSheet } from 'react-native'
import { useFormik } from 'formik'
import theme from '../theme'
import validationSchema from '../validation'

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
            borderRadius: 7,
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
            color: theme.colors.textSecondary,
        },
        errorText: {
            color: '#d73a4a',
            fontSize: theme.fontSizes.body,
            fontWeight: theme.fontWeights.normal,
        },
        errorInputContainer: {
            marginBottom: 15,
            borderWidth: 1,
            padding: 10,
            borderRadius: 7,
            borderColor: '#d73a4a',
        },
    })

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })

    return (
        <>
            <View style={style.formContainer}>
                <TextInput
                    placeholder="Username"
                    value={formik.values.username}
                    id="usernameInput"
                    onChangeText={formik.handleChange('username')}
                    style={
                        formik.touched.username && formik.errors.username
                            ? style.errorInputContainer
                            : style.inputContainer
                    }
                />
                {formik.touched.username && formik.errors.username && (
                    <Text style={style.errorText}>
                        {formik.errors.username}
                    </Text>
                )}
                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    value={formik.values.password}
                    onChangeText={formik.handleChange('password')}
                    style={
                        formik.touched.password && formik.errors.password
                            ? style.errorInputContainer
                            : style.inputContainer
                    }
                />
                {formik.touched.password && formik.errors.password && (
                    <Text style={style.errorText}>
                        {formik.errors.password}
                    </Text>
                )}
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
