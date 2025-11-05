import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import theme from '../theme'
import * as Linking from 'expo-linking'
import { RepositoryItemCountContainer } from './RepositoryItemCountContainer'
import { LanguageBlock } from './LanguageBlock'
import { useNavigate } from 'react-router-native'

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
    buttonText: {
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.subheading,
        color: theme.colors.textSecondary,
        fontFamily: theme.fonts.main,
    },
    openButton: {
        padding: 10,
        marginTop: 15,
        width: 325,
        backgroundColor: theme.colors.primary,
        borderRadius: 6,
        display: 'flex',
        alignSelf: 'center',
        alignItems: 'center',
    },
    openButtonPressed: {
        opacity: 10,
        transform: [{ scale: 0.955 }],
    },
})

const RepositoryItem = ({ item, isSingleRepo, repository }) => {
    const navigate = useNavigate()

    return (
        <>
            <Pressable onPress={() => navigate(`/${item.id}`)}>
                <View style={style.container}>
                    <View style={style.contentRow}>
                        <Image
                            style={style.avatar}
                            source={{ uri: item.ownerAvatarUrl }}
                        />
                        <View style={style.textContainer}>
                            <Text testID={'fullName'} style={style.subHeading}>
                                {item.fullName}
                            </Text>
                            <Text
                                testID={'description'}
                                style={style.textSecondary}
                            >
                                {item.description}
                            </Text>
                            <LanguageBlock item={item} />
                            <RepositoryItemCountContainer item={item} />
                        </View>
                    </View>
                    {isSingleRepo && (
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
                    )}
                </View>
            </Pressable>
        </>
    )
}

export default RepositoryItem
