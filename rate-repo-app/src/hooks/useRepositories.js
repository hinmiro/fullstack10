import { useQuery } from '@apollo/client'
import { GET_REPOSITORY_BY_ID } from '../graphql/queries'

const useRepositories = (id) => {
    const { data, loading, fetchMore, ...result } = useQuery(
        GET_REPOSITORY_BY_ID,
        {
            variables: { id: id, first: 4 },
            fetchPolicy: 'cache-and-network',
        }
    )

    const handleFetchMore = () => {
        const canFetchMore =
            !loading && data?.repository?.reviews?.pageInfo?.hasNextPage

        if (!canFetchMore) {
            return
        }

        fetchMore({
            variables: {
                id: id,
                after: data.repository.reviews.pageInfo.endCursor,
                first: 2,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev
                return {
                    repository: {
                        ...prev.repository,
                        ...fetchMoreResult.repository,
                        reviews: {
                            ...fetchMoreResult.repository.reviews,
                            edges: [
                                ...prev.repository.reviews.edges,
                                ...fetchMoreResult.repository.reviews.edges,
                            ],
                        },
                    },
                }
            },
        })
    }

    return {
        repository: data?.repository,
        fetchMore: handleFetchMore,
        loading,
        ...result,
    }
}

export default useRepositories
