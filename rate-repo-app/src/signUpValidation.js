import * as yup from 'yup'

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(5)
        .max(30)
        .required('You need to choose username'),
    password: yup.string().min(5).max(30).required('Password is required'),
    passwordConf: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

export default validationSchema
