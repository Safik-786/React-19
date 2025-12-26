import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function UseParams() {

    const { id, name } = useParams()

    const [data, setData] = useState({})

    const fetchData = async (id) => {
        // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        // const data = await res.json()
        // setData(data)

        alert(id)
    }
    useEffect(() => {
        fetchData(id)
    }, [id])


    return (
        <div>

            <div className='flex  gap-5'>
                {
                    new Array(10).fill(0).map((_, index) => {
                        return (
                            <Link to={`/posts/${index + 1}`} key={index} className='shadow rounded h-10 w-10 flex justify-center items-center'>
                                <button>{index+1 }</button>
                            </Link>
                        )
                    })


                    // <Link to={`/posts/1`}>
                    // <button>1</button>
                    // </Link>
                    // <button>1</button>
                    // <button>1</button>
                    // <button>1</button>
                    // <button>1</button>
                    // <button>1</button>
                    // <button>1</button>
                    // <button>1</button>
                    // <button>1</button>
                }
            </div>
            {/* <h2>{id}</h2> */}
            <h2>Name: {name}</h2>

            <div>

                UserId= {data.userId}
            </div>
            <div>

                id= {data.id}
            </div>

            <div>

                title= {data.title}
            </div>

            <div>

                body= {data.body}
            </div>

        </div>
    )
}

export default UseParams
