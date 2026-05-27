import React, { useContext, useEffect } from 'react'
import useFetchPosts from './Components/Hooks/CustomApiHooks';

function DemoApp() {


    const { theme,  setTheme, toggleTheme } = useContext(ThemeContext);

    const { data, loading, error } = useFetchPosts('https://jsonplaceholder.typicode.com/posts');

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className='bg-green-50 grid grid-cols-2'>
            {data && (
                data.map(post => (
                    <div className='m-4 bg-white shadow rounded-xl p-6' key={post.id}>
                        <h3 className='font-bold text-xl uppercase '>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))
            )}

        </div>
    )
}

export default DemoApp
