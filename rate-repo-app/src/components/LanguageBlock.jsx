import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import theme from '../theme'

const style = StyleSheet.create({
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

export const LanguageBlock = ({ item }) => {
    return (
        <View style={style.languageBlock}>
            <Text style={style.languageText}>{item.language}</Text>
        </View>
    )
}
