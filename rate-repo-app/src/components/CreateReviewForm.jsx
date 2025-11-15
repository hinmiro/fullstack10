import React from 'react'
import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native'
import { useFormik } from 'formik'
import theme from '../theme'
import validationSchema from '../reviewValidation'
import { useMutation } from '@apollo/client'
import { REVIEW } from '../graphql/mutations'
import { useNavigate } from 'react-router-native'

const CreateReviewForm = () => {
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
            fontFamily: theme.fonts.main,
        },
        signButton: {
            padding: 10,
            backgroundColor: '#0066D3',
            borderRadius: 6,
            display: 'flex',
            alignItems: 'center',
        },
        disabledSignButton: {
            padding: 10,
            backgroundColor: '#4f5052ff',
            borderRadius: 6,
            display: 'flex',
            alignItems: 'center',
        },
        buttonText: {
            fontWeight: theme.fontWeights.bold,
            fontSize: theme.fontSizes.subheading,
            color: theme.colors.textSecondary,
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
    })
    const navigate = useNavigate()
    const [createReview, { data, error }] = useMutation(REVIEW, {
        fetchPolicy: 'no-cache',
    })

    const formik = useFormik({
        initialValues: {
            ownerName: '',
            repoName: '',
            rating: '',
            review: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await createReview({
                    variables: {
                        review: {
                            repositoryName: values.repoName,
                            ownerName: values.ownerName,
                            rating: parseInt(values.rating),
                            text: values.review,
                        },
                    },
                })
                navigate(`/${response.data.createReview.repository.id}`)
            } catch (e) {
                console.log(e)
            }
        },
    })

    const isDisabled = !formik.isValid || formik.isSubmitting

    return (
        <View style={style.formContainer}>
            <TextInput
                placeholder="Repository owner name"
                value={formik.values.ownerName}
                onChangeText={formik.handleChange('ownerName')}
                style={
                    formik.touched.ownerName && formik.errors.ownerName
                        ? style.errorInputContainer
                        : style.inputContainer
                }
            />
            {formik.touched.ownerName && formik.errors.ownerName && (
                <Text style={style.errorText}>{formik.errors.ownerName}</Text>
            )}
            <TextInput
                placeholder="Repository name"
                value={formik.values.repoName}
                onChangeText={formik.handleChange('repoName')}
                style={
                    formik.touched.repoName && formik.errors.repoName
                        ? style.errorInputContainer
                        : style.inputContainer
                }
            />
            {formik.touched.repoName && formik.errors.repoName && (
                <Text style={style.errorText}>{formik.errors.repoName}</Text>
            )}
            <TextInput
                placeholder="Rating between 0 and 100"
                value={formik.values.rating}
                keyboardType="numeric"
                onChangeText={formik.handleChange('rating')}
                style={
                    formik.touched.rating && formik.errors.rating
                        ? style.errorInputContainer
                        : style.inputContainer
                }
            />
            {formik.touched.rating && formik.errors.rating && (
                <Text style={style.errorText}>{formik.errors.rating}</Text>
            )}
            <TextInput
                placeholder="Review"
                value={formik.values.review}
                onChangeText={formik.handleChange('review')}
                style={style.inputContainer}
            />

            <View
                style={isDisabled ? style.disabledSignButton : style.signButton}
            >
                <Pressable onPress={formik.handleSubmit} disabled={isDisabled}>
                    <Text style={style.buttonText}>Submit</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default CreateReviewForm
