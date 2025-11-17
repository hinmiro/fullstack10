import { FlatList, View, StyleSheet, Text } from 'react-native'
import RepositoryItem from './RepositoryItem'
import { GET_REPOSITORIES } from '../graphql/queries'
import { useQuery } from '@apollo/client'
import { Menu, Divider, Button, PaperProvider } from 'react-native-paper'
import { useState } from 'react'
import theme from '../theme'

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    filterContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#666666',
    },
    filterText: {
        fontSize: theme.fontSizes.subheading,
        color: theme.colors.textSecondary,
        fontWeight: theme.fontWeights.bold,
    },
})

const ItemSeparator = () => <View style={styles.separator} />

const renderItem = ({ item }) => {
    return (
        <>
            <RepositoryItem item={item} />
        </>
    )
}

const RepositoryList = () => {
    const [filter, setFilter] = useState('Latest repositories')
    const [visible, SetVisible] = useState(false)
    const openMenu = () => SetVisible(true)
    const closeMenu = () => SetVisible(false)

    const { data, error, loading } = useQuery(GET_REPOSITORIES, {
        variables: { first: 10 },
        fetchPolicy: 'cache-and-network',
    })

    if (loading) {
        return <Text>Loading...</Text>
    }

    if (error) {
        return <Text>{error.message}</Text>
    }

    const repositoryNodes = data?.repositories?.edges
        ? data.repositories.edges.map((edge) => edge.node)
        : []

    return (
        <PaperProvider>
            <View style={styles.filterContainer}>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Button
                            onPress={openMenu}
                            children={filter}
                            icon={'filter-variant'}
                            buttonColor="white"
                        ></Button>
                    }
                >
                    <Menu.Item
                        onPress={() => {
                            setFilter('Latest repositories')
                            closeMenu()
                        }}
                        title="Latest repositories"
                    />
                    <Menu.Item
                        onPress={() => {
                            setFilter('Highest rated repositories')
                            closeMenu()
                        }}
                        title="Highest rated repositories"
                    />
                    <Menu.Item
                        onPress={() => {
                            setFilter('Lowest rated repositories')
                            closeMenu()
                        }}
                        title="Lowest rated repositories"
                    />
                </Menu>
            </View>
            <FlatList
                data={repositoryNodes}
                ItemSeparatorComponent={ItemSeparator}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </PaperProvider>
    )
}

export default RepositoryList
