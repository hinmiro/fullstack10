import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import theme from '../theme'

const style = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 20,
        justifyContent: 'space-evenly',
        borderStyle: 'solid',
        borderColor: 'darkblue',
        borderWidth: 2,
        borderRadius: 15,
        margin: 5,
    },
    contentRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    textContainer: {
        flex: 1,
        flexShrink: 1,
    },
    text: {
        fontSize: theme.fontSizes.body,
        fontWeight: theme.fontWeights.normal,
        flexWrap: 'wrap',
    },
    subHeading: {
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.subheading,
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 20,
        borderRadius: 5,
    },
    languageBlock: {
        backgroundColor: '#0066FF',
        borderRadius: 5,
        padding: 5,
        marginTop: 10,
        alignSelf: 'flex-start',
    },
    languageText: {
        color: theme.colors.textSecondary,
        fontSize: theme.fontSizes.body,
    },
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

const RepositoryItem = ({ item }) => {
    return (
        <>
            <View style={style.container}>
                <View style={style.contentRow}>
                    <Image
                        style={style.avatar}
                        source={{ uri: item.ownerAvatarUrl }}
                    />
                    <View style={style.textContainer}>
                        <Text style={style.subHeading}>{item.fullName}</Text>
                        <Text style={style.textSecondary}>
                            {item.description}
                        </Text>
                        <View style={style.languageBlock}>
                            <Text style={style.languageText}>
                                {item.language}
                            </Text>
                        </View>
                        <View style={style.countContainer}>
                            <View style={style.itemContainer}>
                                <Text style={style.countText}>
                                    {item.stargazersCount > 999 ? (
                                        <Text>
                                            {(
                                                item.stargazersCount / 1000
                                            ).toFixed(1)}
                                            k
                                        </Text>
                                    ) : (
                                        item.stargazersCount
                                    )}
                                </Text>
                                <Text style={style.textSecondary}>Stars</Text>
                            </View>
                            <View style={style.itemContainer}>
                                <Text style={style.countText}>
                                    {item.forksCount > 999 ? (
                                        <Text>
                                            {(item.forksCount / 1000).toFixed(
                                                1
                                            )}
                                            k
                                        </Text>
                                    ) : (
                                        item.forksCount
                                    )}
                                </Text>
                                <Text style={style.textSecondary}>Forks</Text>
                            </View>
                            <View style={style.itemContainer}>
                                <Text style={style.countText}>
                                    {item.reviewCount > 999 ? (
                                        <Text>
                                            {(item.reviewCount / 1000).toFixed(
                                                1
                                            )}
                                            k
                                        </Text>
                                    ) : (
                                        item.reviewCount
                                    )}
                                </Text>
                                <Text style={style.textSecondary}>Reviews</Text>
                            </View>
                            <View style={style.itemContainer}>
                                <Text style={style.countText}>
                                    {item.ratingAverage}
                                </Text>
                                <Text style={style.textSecondary}>Rating</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default RepositoryItem
