import React from 'react'
import { Pressable, Text, StyleSheet, Alert } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
    text: {
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.subheading,
        color: theme.colors.textSecondary,
    },
})

export const AppBarTab = ({ tabName }) => {
    return (
        <Pressable onPress={() => Alert.alert('Pressed button!')}>
            <Text style={styles.text}>{tabName}</Text>
        </Pressable>
    )
}
