import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ReviewContainer from './ReviewContainer'
import { useQuery } from '@apollo/client'
import { GET_CURRENT_USER } from '../graphql/queries'
import theme from '../theme'

const styles = StyleSheet.create({
    repositoryContainer: {
        flex: 1,
    },
})

const UserReviews = () => {
    const { data, error, loading } = useQuery(GET_CURRENT_USER, {
        variables: { includeReviews: true },
        fetchPolicy: 'cache-and-network',
    })

    if (loading) return <Text>Loading reviews...</Text>

    if (error) {
        console.error(error)
    }

    return (
        <View style={styles.repositoryContainer}>
            <ReviewContainer items={data.me.reviews} buttons={true} />
        </View>
    )
}

export default UserReviews
