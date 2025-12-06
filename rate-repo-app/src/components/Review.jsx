import React from 'react'
import { Text, View, StyleSheet, Pressable, Alert } from 'react-native'
import theme from '../theme'
import { useNavigate } from 'react-router-native'
import { useMutation } from '@apollo/client'
import { DELETE_REVIEW } from '../graphql/mutations'

const style = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 20,
        justifyContent: 'space-evenly',
        borderBottomWidth: 10,
        borderColor: theme.colors.textSecondary,
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
    buttonText: {
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.subheading,
        color: theme.colors.textSecondary,
        fontFamily: theme.fonts.main,
    },
    viewButton: {
        padding: 10,
        backgroundColor: '#0066D3',
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
    },
    deleteButton: {
        padding: 10,
        backgroundColor: '#d30000ff',
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 20,
    },
})

const Review = ({ review, buttons = false, refetch }) => {
    const navigate = useNavigate()
    const formattedDate = new Date(review.createdAt).toLocaleDateString()
    const [deleteReview] = useMutation(DELETE_REVIEW, {
        fetchPolicy: 'no-cache',
    })

    const handleDelete = () => {
        Alert.alert(
            'Delete review',
            'Are you sure you want to delete this review?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            await deleteReview({
                                variables: { deleteReviewId: review.id },
                            })
                            refetch()
                        } catch (e) {
                            console.log(e)
                        }
                    },
                },
            ]
        )
    }

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
            {buttons && (
                <View style={style.buttonContainer}>
                    <View style={style.viewButton}>
                        <Pressable
                            onPress={() => navigate(`/${review.repository.id}`)}
                        >
                            <Text style={style.buttonText}>
                                View Repository
                            </Text>
                        </Pressable>
                    </View>
                    <View style={style.deleteButton}>
                        <Pressable onPress={handleDelete}>
                            <Text style={style.buttonText}>Delete review</Text>
                        </Pressable>
                    </View>
                </View>
            )}
        </View>
    )
}

export default Review
