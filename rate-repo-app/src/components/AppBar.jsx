import { View, StyleSheet, Text, ScrollView, Pressable } from 'react-native'
import theme from '../theme'
import Constants from 'expo-constants'
import { AppBarTab } from './AppBarTab'
import useSignOut from '../hooks/useSignOut'
import { useQuery } from '@apollo/client'
import { GET_AUTHORIZED_USER } from '../graphql/queries'

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: theme.colors.backgroundColor,
    },
    text: {
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.subheading,
        color: theme.colors.textSecondary,
    },
    appName: {
        alignSelf: 'center',
        marginTop: 40,
        fontWeight: theme.fontWeights.bold,
        color: theme.colors.text,
        fontSize: theme.fontSizes.subheading,
    },
    scrollContent: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    tabWrapper: {
        marginRight: 30,
    },
})

const AppBar = () => {
    const signOut = useSignOut()
    const { data } = useQuery(GET_AUTHORIZED_USER, {
        fetchPolicy: 'cache-and-network',
    })
    const isSignedIn = Boolean(data?.me)

    const handleSignOut = async () => {
        await signOut()
    }
    return (
        <>
            <Text style={styles.appName}>Repository App 1.0</Text>
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    contentContainerStyle={styles.scrollContent}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.tabWrapper}>
                        <AppBarTab tabName={'Repository'} link={'/'} />
                    </View>
                    {isSignedIn && (
                        <View style={styles.tabWrapper}>
                            <AppBarTab
                                tabName={'Create a Review'}
                                link={'createReview'}
                            />
                        </View>
                    )}

                    <View style={styles.tabWrapper}>
                        {isSignedIn ? (
                            <Pressable onPress={handleSignOut}>
                                <Text style={styles.text}>Sign out</Text>
                            </Pressable>
                        ) : (
                            <AppBarTab tabName={'Sign in'} link={'/signin'} />
                        )}
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default AppBar
