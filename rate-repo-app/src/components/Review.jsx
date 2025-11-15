import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import theme from '../theme'

const style = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 20,
        justifyContent: 'space-evenly',
        borderBottomWidth: 10,
        borderColor: theme.colors.textSecondary,
        margin: 5
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
    containerText: {
        color: theme.colors.text,
        fontSize: theme.fontSizes.body,
    },
    scoreBorder: {
        color: theme.colors.secondary,
        borderRadius: 45 / 2,
        borderColor: theme.colors.primary,
        padding: 5,
        borderWidth: 3,
    },
})

const Review = ({ review }) => {
    const formattedDate = new Date(review.createdAt).toLocaleDateString()

    return (
        <View style={style.container}>
            <View style={style.contentRow}>
                <View style={style.scoreBorder}>
                    <Text style={style.subHeading}>{review.rating}</Text>
                </View>
            </View>
            <Text style={style.subHeading}>{review.user.username}</Text>
            <Text>{formattedDate}</Text>
            <Text style={style.containerText}>{review.text}</Text>
        </View>
    )
}

export default Review
