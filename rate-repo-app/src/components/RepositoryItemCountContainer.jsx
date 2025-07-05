import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import theme from '../theme'

const style = StyleSheet.create({
    countContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: 2,
        padding: 2,
        alignItems: 'center',
    },
    countText: {
        fontSize: theme.fontSizes.body,
        fontWeight: theme.fontWeights.bold,
    },
    textSecondary: {
        color: theme.colors.secondary,
    },
})

export const RepositoryItemCountContainer = ({ item }) => {
    return (
        <View style={style.countContainer}>
            <View style={style.itemContainer}>
                <Text style={style.countText}>
                    {item.stargazersCount > 999 ? (
                        <Text>{(item.stargazersCount / 1000).toFixed(1)}k</Text>
                    ) : (
                        item.stargazersCount
                    )}
                </Text>
                <Text style={style.textSecondary}>Stars</Text>
            </View>
            <View style={style.itemContainer}>
                <Text style={style.countText}>
                    {item.forksCount > 999 ? (
                        <Text>{(item.forksCount / 1000).toFixed(1)}k</Text>
                    ) : (
                        item.forksCount
                    )}
                </Text>
                <Text style={style.textSecondary}>Forks</Text>
            </View>
            <View style={style.itemContainer}>
                <Text style={style.countText}>
                    {item.reviewCount > 999 ? (
                        <Text>{(item.reviewCount / 1000).toFixed(1)}k</Text>
                    ) : (
                        item.reviewCount
                    )}
                </Text>
                <Text style={style.textSecondary}>Reviews</Text>
            </View>
            <View style={style.itemContainer}>
                <Text style={style.countText}>{item.ratingAverage}</Text>
                <Text style={style.textSecondary}>Rating</Text>
            </View>
        </View>
    )
}
