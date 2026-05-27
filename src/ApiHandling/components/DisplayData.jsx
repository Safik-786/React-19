import { useEffect, useState } from 'react'
import React from 'react'
import { axiosInstancs } from '../api/axios'

function DisplayData() {
    const [data, setData] = useState([])

    let fetchData = async () => {
        let data = await axiosInstancs.get('/users')
        console.log(" data:", data)
        if (data.status === 200) {
            setData(data.data)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 m-4'>
            {
                data.map((item) => {
                    return (
                        <div key={item.id} className='shadow p-4' >
                            <div className='  flex justify-between'>
                                <div>
                                    <p>Id: {item.id}</p>
                                    <h2>Name: {item.name}</h2>
                                </div>
                                <div className='shadow rounded-2xl overflow-hidden'>
                                    <img className='h-20 w-20 cursor-pointer rounded-2xl hover:scale-105 transition-all duration-300' src={item.avatar} alt="" />
                                </div>
                            </div>
                            <div className=''>
                                <button className='text-[12px] px-2 me-2 py-1 rounded text-red-500 bg-white shadow'>Delete</button>
                                <button className='text-[12px] px-2 py-1 rounded text-blue-500 bg-white shadow' onClick={""}>Edit</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayData
