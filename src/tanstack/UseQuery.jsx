import { useQuery } from '@tanstack/react-query'
import React from 'react'

function UseQuery() {

    const fetchData = async (id) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const data = await res.json()
        return data
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchData
    })

    if (isError) {
        return (
            <h2>
                {error.message}
            </h2>
        )
    }

    if (isLoading) {
        return (
            <h2>Loading...</h2>
        )
    }
    return (
        <div>

            {
                data &&
                <h2>{JSON.stringify(data.slice(0, 5))}</h2>
            }

        </div>
    )
}

export default UseQuery
