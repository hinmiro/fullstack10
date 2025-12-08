import React from 'react'
import RepositoryItem from './RepositoryItem'
import { StyleSheet, Text, View } from 'react-native'
import { useParams } from 'react-router-native'
import ReviewContainer from './ReviewContainer'
import useRepositories from '../hooks/useRepositories'

const SingleRepository = () => {
    const style = StyleSheet.create({
        repositoryContainer: {
            flex: 1,
        },
    })
    const { id } = useParams()

    const { repository, fetchMore, loading } = useRepositories(id)

    if (loading) return <Text>Loading...</Text>

    const reviews = repository.reviews ? repository.reviews : []
    console.log('has next page ', reviews.pageInfo.hasNextPage)

    const onEndReach = () => {
        fetchMore()
    }
    if (!repository) return <Text>No repository found</Text>

    return (
        <View style={style.repositoryContainer}>
            <RepositoryItem
                item={repository}
                isSingleRepo={true}
                repository={repository}
            />
            <ReviewContainer items={reviews} onEndReached={onEndReach} />
        </View>
    )
}

export default SingleRepository
