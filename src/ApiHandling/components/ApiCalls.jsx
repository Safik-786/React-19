// import React, { use, useEffect } from 'react'
// import { set } from 'react-hook-form'

// function ApiCalls() {

//     const [data, setData] = React.useState([])

//     const [error, setError] = React.useState([])
//     const [loading, setLoading] = React.useState(false)



//     const fetchData = async () => {
//         try {
//             setLoading(true)
//             // fetch(`https://6901f2bfb208b24affe460ef.mockapi.io/users`)
//             //     .then((response) => {
//             //         {
//             //             console.log("response= ", response)
//             //             return response.json()
//             //         }
//             //     })
//             //     .then((data) => {
//             //         setData(data)
//             //         console.log(data)
//             //     })
//             //     .catch((error)=>{
//             //         console.log("error during the  api call", error)
//             //         setError(error)
//             //     })
//             const response = await fetch(`https://6901f2bfb28b24affe460ef.mockapi.io/users`)
//             const data = await response.json()
//             console.log(data)
//             setData(data)
//         } catch (error) {
//             setError(error.message)
//         } finally {
//             setLoading(false)
//         }

//     }
//     useEffect(() => {
//         fetchData()
//     }, [])


//     if (loading) {
//         return (
//             <div className='h-screen grid grid-cols-2 md:grid-rows-2  md:grid-cols-4 gap-5'>
//                 {
//                     new Array(10).fill(0).map((item, index) => {
//                         return (
//                             <div key={index} className=' bg-gray-200 rounded shadow animate-pulse'></div>
//                         )
//                     })
//                 }
//             </div>
//         )
//     }

//     return (
//         <div>


//             <div>
//                 {/* <h2 className='bg-green-50'>Error section </h2> */}
//                 <div>
//                     {error ? <p>{error}</p> : <p>No Errors</p>}
//                 </div>
//             </div>
//             <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
//                 {
//                     data && data?.map((item => {
//                         return (
//                             <div key={item.id} className='shadow rounded' >
//                                 <h3>{item.id}</h3>
//                                 <h3>{item.createdAt}</h3>
//                                 <img className='h-50 w-50' src={item.avatar} alt="" />
//                                 <p>{item.body}</p>
//                             </div>
//                         )
//                     }))
//                 }
//             </div>
//         </div>
//     )
// }

// export default ApiCalls





import React, { useEffect, useState } from 'react'
import { axiosInstancs } from '../ApiHandling/api/axios'

function ApiCalls() {
    const [data, setData] = useState([])
    const [showForm, SetShowForm] = useState(false)
    const [name, setName] = useState('')

    // let fetchData = async () => {
    //     let response = await axiosInstancs.get('/users')
    //     console.log(response.data)
    //     setData(response.data)
    // }

    let fetchData = async () => {
        try {
<<<<<<< HEAD:src/Pages/ApiCalls.jsx
=======
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
>>>>>>> a8a4fe20dc98445a755bc5a07087d7bed59cf799:src/ApiHandling/components/ApiCalls.jsx
            const response = await fetch(`https://6901f2bfb208b24affe460ef.mockapi.io/users`)
            const data = await response.json()
            setData(data)
        } catch (error) {

        }
    }

    // let fetchData=  ()=>{
    //     fetch(`https://6901f2bfb208b24affe460ef.mockapi.io/users`)
    //     .then((response) => {
    //         return response.json()
    //     })
    //     .then((data) => {
    //         setData(data)
    //     })
    // }

    useEffect(() => {
        fetchData()
    }, [])


    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let response = await axiosInstancs.post('/users', { name: name })
            console.log(response.data)
            fetchData()
            SetShowForm(false)
        } catch (error) {
            console.log(error)
        }
    }



    return (

        <>

            <button className='border shadow px-6 py-2 bg-green-500' onClick={() => SetShowForm(!showForm)}>Create User</button>


            <div className='grid grid-cols-10 gap-4 pb-10'>
                {
<<<<<<< HEAD:src/Pages/ApiCalls.jsx
                    data.map((item) => {
=======
                    data ? data?.map((item => {
>>>>>>> a8a4fe20dc98445a755bc5a07087d7bed59cf799:src/ApiHandling/components/ApiCalls.jsx
                        return (
                            <div key={item.id} className='shadow rounded' >
                                <h3>{item.id}</h3>
                                <h2>{item.name}</h2>
                                <h3>{item.createdAt}</h3>
                                <img className='h-50 w-50' src={item.avatar} alt="" />
                                <p>{item.body}</p>
                            </div>
                        )
<<<<<<< HEAD:src/Pages/ApiCalls.jsx
                    })
=======
                    }))
                    :
                    <h2>Data not Found</h2>
>>>>>>> a8a4fe20dc98445a755bc5a07087d7bed59cf799:src/ApiHandling/components/ApiCalls.jsx
                }
            </div>

            {
                showForm &&

                <div className='flex justify-center items-center fixed inset-0 bg-black/50'>
                    <form onSubmit={handleSubmit} className='h-100 w-100 bg-white relative p-8 border' action="">
                        <button className='absolute top-2 right-2 border px-2 py-1 bg-red-500' onClick={() => SetShowForm(false)}>X</button>
                        <label htmlFor="">Name</label><br />
                        <input type="text" name="" className='border' value={name} onChange={(e) => setName(e.target.value)} id="" />
                        <br /><br /><br />
                        <button type='submit' className='border bg-blue-50 text-blue-700'>Submit</button>
                    </form>
                </div>
            }
        </>
    )
}

export default ApiCalls