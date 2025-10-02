import { render, screen } from '@testing-library/react-native'
import { FlatList, View, StyleSheet } from 'react-native'
import RepositoryItem from '../../components/RepositoryItem'
/* eslint-disable no-undef */
describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
        it('renders repository information correctly', () => {
            const repositories = {
                totalCount: 8,
                pageInfo: {
                    hasNextPage: true,
                    endCursor:
                        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    startCursor:
                        'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                },
                edges: [
                    {
                        node: {
                            id: 'jaredpalmer.formik',
                            fullName: 'jaredpalmer/formik',
                            description:
                                'Build forms in React, without the tears',
                            language: 'TypeScript',
                            forksCount: 1619,
                            stargazersCount: 21856,
                            ratingAverage: 88,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars2.githubusercontent.com/u/4060187?v=4',
                        },
                        cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                    },
                    {
                        node: {
                            id: 'async-library.react-async',
                            fullName: 'async-library/react-async',
                            description:
                                'Flexible promise-based React data loader',
                            language: 'JavaScript',
                            forksCount: 69,
                            stargazersCount: 1760,
                            ratingAverage: 72,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars1.githubusercontent.com/u/54310907?v=4',
                        },
                        cursor: 'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    },
                ],
            }
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
                const repositoryNodes = repositories
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

            render(<RepositoryList repositories={repositories} />)

            const fullNames = screen.getAllByTestId('fullName')
            const descriptions = screen.getAllByTestId('description')
            const languages = screen.getAllByTestId('language')
            const stargazersCounts = screen.getAllByTestId('stargazersCount')
            const forksCounts = screen.getAllByTestId('forksCount')
            const reviewCounts = screen.getAllByTestId('reviewCount')
            const ratingAverages = screen.getAllByTestId('ratingAverage')

            // Test the first repository item
            expect(fullNames[0]).toHaveTextContent('jaredpalmer/formik')
            expect(descriptions[0]).toHaveTextContent(
                'Build forms in React, without the tears'
            )
            expect(languages[0]).toHaveTextContent('TypeScript')
            expect(stargazersCounts[0]).toHaveTextContent('21.9k')
            expect(forksCounts[0]).toHaveTextContent('1.6k')
            expect(reviewCounts[0]).toHaveTextContent('3')
            expect(ratingAverages[0]).toHaveTextContent('88')
        })
    })
})
