import React from 'react'
import RepositoryItem from './RepositoryItem'
import theme from '../theme'
import * as Linking from 'expo-linking'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { GET_REPOSITORY_BY_ID } from '../graphql/queries'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-native'

const SingleRepository = () => {
    const style = StyleSheet.create({
        signButton: {
            padding: 10,
            backgroundColor: 'blue',
            borderRadius: 6,
            display: 'flex',
            alignSelf: 'flex-end',
            alignItems: 'center',
        },
        buttonText: {
            fontWeight: theme.fontWeights.bold,
            fontSize: theme.fontSizes.subheading,
            color: theme.colors.textSecondary,
            fontFamily: theme.fonts.main,
        },
        openButton: {
            padding: 10,
            backgroundColor: 'blue',
            borderRadius: 6,
            display: 'flex',
            alignSelf: 'flex-end',
            alignItems: 'center',
        },
        openButtonPressed: {
            opacity: 10,
            transform: [{ scale: 0.955 }],
        },
        repoContainer: {
            padding: 10,
            borderColor: 'blue',
            borderRadius: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    })

    const { id } = useParams()

    const { data, error, loading } = useQuery(GET_REPOSITORY_BY_ID, {
        variables: { id },
        fetchPolicy: 'cache-and-network',
    })

    if (loading) return <Text>Repository loading...</Text>

    if (error) return <Text>{error.message}</Text>

    const repository = data?.repository

    if (!repository) return <Text>No repository found</Text>

    return (
        <View>
            <RepositoryItem item={repository} />
            <View style={style.repoContainer}>
                <View style={style.repoContainer}>
                    <Pressable
                        style={({ pressed }) => [
                            style.openButton,
                            pressed && style.openButtonPressed,
                        ]}
                        android_ripple={{ color: 'rgba(255,255,255,0.2)' }}
                        onPress={() => Linking.openURL(repository.url)}
                    >
                        <Text style={style.buttonText}>
                            Open Github Repository
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default SingleRepository
