import React, { useEffect, useState } from 'react'
import { axiosInstancs } from '../../ApiHandling/api/axios'

function Debouncing() {

    const [query, setQuery] = useState("")
    const [result, setResult] = useState([])


    const fetchdata = async () => {
        const res = await axiosInstancs.get(`/users?name=${query}`)
        if (res.data) {
            setResult(res.data)
        }
    }

    useEffect(() => {
        if (!query) {
            setResult([])
            return;
        }
        const timer = setTimeout(() => {
            fetchdata()
        }, 1000)
        return () => clearTimeout(timer)
    }, [query])


    return (
        <div>

            <div>

                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className='outline-none border border-blue-500' name="" id="" />
            </div>

            <div className='shadow p-4 grid grid-cols-6 gap-4'>

                {
                    result.map((item) => {
                        return (
                            <div key={item.id}>
                                <img src={item.avatar} alt="" />
                                <h1>{item.name}</h1>
                                <p>{item.price}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Debouncing