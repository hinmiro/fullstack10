import { Text, StyleSheet, View } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import SignIn from './SignIn'

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
})

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path="/" element={<RepositoryList />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </View>
    )
}

export default Main
