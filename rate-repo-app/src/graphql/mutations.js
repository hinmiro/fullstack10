import { gql } from '@apollo/client'

export const AUTHENTICATE = gql`
    mutation Authenticate($username: String!, $password: String!) {
        authenticate(
            credentials: { username: $username, password: $password }
        ) {
            accessToken
        }
    }
`

export const REVIEW = gql`
    mutation ($review: CreateReviewInput) {
        createReview(review: $review) {
            repository {
                id
            }
        }
    }
`

export const SIGNUP = gql`
    mutation ($username: String!, $password: String!) {
        createUser(user: { username: $username, password: $password }) {
            id
            username
        }
    }
`
