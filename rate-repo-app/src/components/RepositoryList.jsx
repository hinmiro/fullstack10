import { FlatList, View, StyleSheet, Text } from 'react-native'
import RepositoryItem from './RepositoryItem'
import { useState, useEffect } from 'react'

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
    const [repositories, setRepositories] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchRepositories = async () => {
        setLoading(true)
        const response = await fetch('http://10.0.2.2:5000/api/repositories')
        const json = await response.json()

        setLoading(false)
        setRepositories(json)
    }

    useEffect(() => {
        fetchRepositories()
    }, [])


    const repositoryNodes = Array.isArray(repositories.edges)
        ? repositories.edges.map((edge) => edge.node)
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
