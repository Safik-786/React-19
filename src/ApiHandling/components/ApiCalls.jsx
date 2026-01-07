import React, { use, useEffect } from 'react'
import { set } from 'react-hook-form'

function ApiCalls() {

    const [data, setData] = React.useState([])

    const [error, setError] = React.useState([])
    const [loading, setLoading] = React.useState(false)



    const fetchData = async () => {
        try {
            setLoading(true)
            // fetch(`https://6901f2bfb208b24affe460ef.mockapi.io/users`)
            //     .then((response) => {
            //         {
            //             console.log("response= ", response)
            //             return response.json()
            //         }
            //     })
            //     .then((data) => {
            //         setData(data)
            //         console.log(data)
            //     })
            //     .catch((error)=>{
            //         console.log("error during the  api call", error)
            //         setError(error)
            //     })
            const response = await fetch(`https://6901f2bfb208b24affe460ef.mockapi.io/users`)
            const data = await response.json()
            console.log(data)
            setData(data)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }

    }
    useEffect(() => {
        fetchData()
    }, [])


    if (loading) {
        return (
            <div className='h-screen grid grid-cols-2 md:grid-rows-2  md:grid-cols-4 gap-5'>
                {
                    new Array(10).fill(0).map((item, index) => {
                        return (
                            <div key={index} className=' bg-gray-200 rounded shadow animate-pulse'></div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div>


            <div>
                {/* <h2 className='bg-green-50'>Error section </h2> */}
                <div>
                    {error ? <p>{error}</p> : <p>No Errors</p>}
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                {
                    data ? data?.map((item => {
                        return (
                            <div key={item.id} className='shadow rounded' >
                                <h3>{item.id}</h3>
                                <h3>{item.createdAt}</h3>
                                <img className='h-50 w-50' src={item.avatar} alt="" />
                                <p>{item.body}</p>
                            </div>
                        )
                    }))
                    :
                    <h2>Data not Found</h2>
                }
            </div>
        </div>
    )
}

export default ApiCalls
