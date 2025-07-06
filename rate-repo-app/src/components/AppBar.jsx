import { View, StyleSheet, Text } from 'react-native'
import theme from '../theme'
import Constants from 'expo-constants'
import { AppBarTab } from './AppBarTab'

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: 10,
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
})

const AppBar = () => {
    return (
        <>
            <Text style={styles.appName}>Repository App 1.0</Text>
            <View style={styles.container}>
                <AppBarTab tabName={'Repository'} link={'/'}/>
                <AppBarTab tabName={'Sign in'} link={'/signin'}/>
            </View>
        </>
    )
}

export default AppBar
