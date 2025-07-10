import { View, StyleSheet, Text, ScrollView } from 'react-native'
import theme from '../theme'
import Constants from 'expo-constants'
import { AppBarTab } from './AppBarTab'

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
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    tabWrapper: {
        marginRight: 30,
    },
})

const AppBar = () => {
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
                    <View style={styles.tabWrapper}>
                        <AppBarTab tabName={'Sign in'} link={'/signin'} />
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default AppBar
