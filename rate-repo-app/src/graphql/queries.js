import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
    query GetRepositories(
        $first: Int
        $after: String
        $orderBy: AllRepositoriesOrderBy
        $orderDirection: OrderDirection
        $searchKeyword: String
        $ownerName: String
    ) {
        repositories(
            first: $first
            after: $after
            orderBy: $orderBy
            orderDirection: $orderDirection
            searchKeyword: $searchKeyword
            ownerName: $ownerName
        ) {
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

export const GET_AUTHORIZED_USER = gql`
    query Me {
        me {
            id
            username
            reviews {
                edges {
                    node {
                        createdAt
                        id
                        rating
                        repository {
                            name
                            ownerName
                        }
                        text
                        user {
                            username
                        }
                    }
                }
            }
        }
    }
`

export const GET_REPOSITORY_BY_ID = gql`
    query GetRepositoryById($id: ID!) {
        repository(id: $id) {
            id
            createdAt
            fullName
            reviewCount
            ratingAverage
            forksCount
            stargazersCount
            description
            language
            ownerAvatarUrl
            url
            reviews {
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        user {
                            id
                            username
                        }
                    }
                }
            }
        }
    }
`
