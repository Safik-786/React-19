import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function UseSearchParams() {

    const [search, setSearch] = useState("")

    const [searchParams, setSearchParams] = useSearchParams()


    let page = searchParams.get("page")
    let item = searchParams.get("item")
    let color = searchParams.get("color")
    let price = searchParams.get("price")

    let q = searchParams.get("q")



    const handleChange = (e) => {


        setSearch(e.target.value)
        // setSearchParams({ q: e.target.value })
    }

    const handleSubmit= (e)=>{
        e.preventDefault()

        console.log("search=", search)
        setSearchParams({q:search}) 
    }

    return (
        <div className='m-5 shadow h-128'>

            <div className='shadow m-10 p-10'>
                Result:
                <p>{page}</p>
                <p>{item}</p>
                <p>{color}</p>
                <p>Query: {q}</p>
                <p>Price:{price}</p>
            </div>


            <form action="" onSubmit={handleSubmit}>
                {/* <label htmlFor="">Search</label> <br /> */}
                <input type="text" className='border' onChange={handleChange} handleSubmit value={search} id="" />
                <input type="submit" value={"Search"} className='ms-1 rounded-full px-4 py-1 shadow cursor-pointer' id="" />
            </form>



            <button className='bg-blue-100 shadow p-2 mx-5 rounded cursor-pointer'
                onClick={() => setSearchParams({ page: 3, item: 5, color: "green" })}>Set Page-3</button>

            <button className='bg-blue-100 shadow p-2 rounded cursor-pointer' onClick={() => setSearchParams({ price: "5000" })}>Price &gt; 500</button>





        </div>
    )
}

export default UseSearchParams
