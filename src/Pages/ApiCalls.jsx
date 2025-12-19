import React, { use, useEffect } from 'react'

function ApiCalls() {

    const [data, setData] = React.useState([])

    const [error, setError] = React.useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicoe.com/posts`)
            .then((response) => {
                {
                    console.log(response)
                    return response.json()
                }
            })
            .then((data) => {
                setData(data)
                console.log(data)
            })
            .catch((error)=>{
                console.log("error during the  api call", error)
                setError(error)
            })
    }, [])

    return (
        <div>
            <div>
                <h2 className='bg-green-50'>Error section </h2>
                <div>
                    {error ? <p>{error}</p> : <p>No Errors</p>}
                </div>
            </div>
            {

                data && data?.map((item => {
                    return (
                        <div key={item.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                        </div>
                    )
                }))
            }
        </div>
    )
}

export default ApiCalls
