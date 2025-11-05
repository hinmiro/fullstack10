import React from 'react'
import RepositoryItem from './RepositoryItem'
import theme from '../theme'
import * as Linking from 'expo-linking'
import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native'
import { GET_REPOSITORY_BY_ID } from '../graphql/queries'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-native'
import ReviewContainer from './ReviewContainer'

const SingleRepository = () => {
    const style = StyleSheet.create({
        repositoryContainer: {
            flex: 1
        }
    })

    const { id } = useParams()

    const { data, error, loading } = useQuery(GET_REPOSITORY_BY_ID, {
        variables: { id },
        fetchPolicy: 'cache-and-network',
    })

    if (loading) return <Text>Repository loading...</Text>

    if (error) return <Text>{error.message}</Text>

    const repository = data?.repository
    const reviews = repository.reviews ? repository.reviews : []

    if (!repository) return <Text>No repository found</Text>

    return (
        <View style={style.repositoryContainer}>
            <RepositoryItem item={repository} isSingleRepo={true} repository={repository}/>
            <ReviewContainer items={reviews} />
        </View>
    )
}

export default SingleRepository
