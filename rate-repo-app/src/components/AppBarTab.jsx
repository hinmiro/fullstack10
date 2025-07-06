import React from 'react'
import { Pressable, Text, StyleSheet, Alert } from 'react-native'
import { useNavigate } from 'react-router-native'

import theme from '../theme'

const styles = StyleSheet.create({
    text: {
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.subheading,
        color: theme.colors.textSecondary,
    },
})

export const AppBarTab = ({ tabName, link }) => {
    const navigate = useNavigate()

    return (
        <Pressable onPress={() => navigate(link)}>
            <Text style={styles.text}>{tabName}</Text>
        </Pressable>
    )
}
