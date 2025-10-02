/* eslint-disable no-undef */
import {
    render,
    screen,
    fireEvent,
    waitFor,
} from '@testing-library/react-native'
import { View, TextInput, Text, Pressable } from 'react-native'
import { useFormik } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
})

const SignInContainer = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema,
        onSubmit,
    })

    return <SignIn formik={formik} />
}

const SignIn = ({ formik }) => {
    return (
        <>
            <View>
                <TextInput
                    placeholder="Username"
                    value={formik.values.username}
                    id="usernameInput"
                    testID="usernameInput"
                    onChangeText={formik.handleChange('username')}
                    style={formik.touched.username && formik.errors.username}
                />
                {formik.touched.username && formik.errors.username && (
                    <Text>{formik.errors.username}</Text>
                )}
                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    testID="passwordInput"
                    value={formik.values.password}
                    onChangeText={formik.handleChange('password')}
                    style={formik.touched.password && formik.errors.password}
                />
                {formik.touched.password && formik.errors.password && (
                    <Text>{formik.errors.password}</Text>
                )}
                <View>
                    <Pressable testID="submitButton" onPress={formik.handleSubmit}>
                        <Text>Sign in</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

describe('SignIn', () => {
    describe('SignInContainer', () => {
        it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
            const mockOnSubmit = jest.fn()
            const { getByTestId } = render(
                <SignInContainer onSubmit={mockOnSubmit} />
            )

            fireEvent.changeText(getByTestId('usernameInput'), 'testuser')
            fireEvent.changeText(getByTestId('passwordInput'), 'password123')

            fireEvent.press(getByTestId('submitButton'))

            await waitFor(() => {
                expect(mockOnSubmit).toHaveBeenCalledTimes(1)
                expect(mockOnSubmit.mock.calls[0][0]).toEqual({
                    username: 'testuser',
                    password: 'password123',
                })
            })
        })
    })
})
