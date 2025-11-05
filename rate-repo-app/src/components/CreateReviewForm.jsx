import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useFormik } from 'formik'
import theme from '../theme'

const CreateReviewForm = () => {
    const style = StyleSheet.create({

    })

    const formik = useFormik({
        initialValues: {
            owner: '',
            repoName: '',
            rating: '',
            review: ''
        },
        validationSchema,
        
    })


    return (
        <View>
            <Text>Create review form site</Text>
        </View>
    )
}

export default CreateReviewForm
