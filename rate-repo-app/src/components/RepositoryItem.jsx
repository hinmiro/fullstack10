import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import theme from '../theme'
import { RepositoryItemCountContainer } from './RepositoryItemCountContainer'
import { LanguageBlock } from './LanguageBlock'

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
                        <LanguageBlock item={item} />
                        <RepositoryItemCountContainer item={item} />
                    </View>
                </View>
            </View>
        </>
    )
}

export default RepositoryItem
