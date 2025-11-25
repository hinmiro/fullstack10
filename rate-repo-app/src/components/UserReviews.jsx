import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ReviewContainer from './ReviewContainer'
import { useQuery } from '@apollo/client'
import { GET_AUTHORIZED_USER } from '../graphql/queries'
import theme from '../theme'

const styles = StyleSheet.create({
    repositoryContainer: {
        flex: 1,
    },
})

const UserReviews = () => {
    const { data, error, loading } = useQuery(GET_AUTHORIZED_USER, {
        fetchPolicy: 'cache-and-network',
    })

    if (loading) return <Text>Loading reviews...</Text>

    if (error) {
        console.error(error)
    }

    const reviewsObject = data?.me?.reviews ?? { edges: [] }
    const edges = Array.isArray(reviewsObject.edges) ? reviewsObject.edges : []
    const reviewNodes = edges.map((edge) => edge.node)
    console.log();



    return (
        <View style={styles.repositoryContainer}>
            <ReviewContainer items={data.me.reviews} />
        </View>
    )
}

export default UserReviews
