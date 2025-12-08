import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import Review from './Review'

const ReviewContainer = ({
    items,
    buttons = false,
    refetch = () => {},
    onEndReached = false,
}) => {
    const styles = StyleSheet.create({
        separator: {
            height: 10,
        },
        container: {
            flex: 1
        }
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
        <View style={styles.container}>
            {reviewNodes.length === 0 ? (
                <Text>No reviews available</Text>
            ) : (
                <FlatList
                    data={reviewNodes}
                    ItemSeparatorComponent={ItemSeparator}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    onEndReached={onEndReached}
                    onEndReachedThreshold={0.8}
                />
            )}
        </View>
    )
}

export default ReviewContainer
