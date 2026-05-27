import { useEffect, useState } from 'react';

function useFetchPosts(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const result = await response.json();

            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, loading, error, refetch: fetchData };
}

export default useFetchPosts;