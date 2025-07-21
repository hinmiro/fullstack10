import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
    query GetRepositories($first: Int) {
        repositories(first: $first) {
            totalCount
            edges {
                node {
                    id
                    name
                    ownerName
                    createdAt
                    fullName
                    reviewCount
                    ratingAverage
                    forksCount
                    stargazersCount
                    description
                    language
                    ownerAvatarUrl
                }
                cursor
            }
        }
    }
`
