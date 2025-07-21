import { FlatList, View, StyleSheet, Text } from 'react-native'
import RepositoryItem from './RepositoryItem'
import { GET_REPOSITORIES } from '../graphql/queries'
import { useQuery } from '@apollo/client'

const styles = StyleSheet.create({
    separator: {
        height: 10,
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
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
    )
}

export default RepositoryList
