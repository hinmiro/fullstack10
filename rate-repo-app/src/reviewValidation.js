import * as yup from 'yup'

const validationSchema = yup.object().shape({
    ownerName: yup.string().required('Repository owner name is required'),
    repoName: yup.string().required('Repository name is required'),
    rating: yup
        .number()
        .positive('Rating cannot be negative')
        .min(0, 'Rating must be in field of 0 to 100')
        .max(100, 'Rating must be in field of 0 to 100')
        .required('Rating is required'),
})

export default validationSchema
