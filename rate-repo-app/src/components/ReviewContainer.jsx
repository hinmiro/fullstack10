import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import Review from './Review'
import { useMutation } from '@apollo/client'
import { DELETE_REVIEW } from '../graphql/queries'

const ReviewContainer = ({ items, buttons = false, refetch = {} }) => {
    const styles = StyleSheet.create({
        separator: {
            height: 10,
        },
    })

    const ItemSeparator = () => <View style={styles.separator} />

    const renderItem = ({ item }) => {
        return (
            <>
                <Review review={item} buttons={buttons} refetch={refetch} />
            </>
        )
    }

    const reviewNodes = items?.edges ? items.edges.map((edge) => edge.node) : []

    return (
        <View style={{ flex: 1 }}>
            {reviewNodes.length === 0 ? (
                <Text>No reviews available</Text>
            ) : (
                <FlatList
                    data={reviewNodes}
                    ItemSeparatorComponent={ItemSeparator}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    nestedScrollEnabled={true}
                    style={{ width: '100%' }}
                />
            )}
        </View>
    )
}

export default ReviewContainer
