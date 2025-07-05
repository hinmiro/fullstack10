import { View, StyleSheet, Text, Pressable, Alert } from 'react-native'
import theme from '../theme'
import Constants from 'expo-constants'
import { AppBarTab } from './AppBarTab'

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingBottom: 10,
        backgroundColor: theme.colors.backgroundColor,
    },
    text: {
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.subheading,
        color: theme.colors.textSecondary,
    },
})
 
const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab tabName={'Repository'} />
        </View>
    )
}

export default AppBar
