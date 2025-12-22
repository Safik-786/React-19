import React from 'react'

function Card({ title, description, email }) {

    const handleClick= (event, name )=>{
        console.log(event)

        event.target.style.backgroundColor= "green"
        console.log("Handle Click worked....")
    }

    const handleSubmit= (e)=>{
        e.preventDefault()
        console.log("form submitted")
    }
    
    return (
        <div className='border shadow p-4'>
            <h2>title: {title}</h2>
            <h2>descriptionewfhgwjfegy: {description}</h2>
            <h2>email: {email}</h2>

            <button onClick={(e)=> handleClick(e, "safik")}>Click</button>

            <form onSubmit={handleSubmit} action="">

                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default Card

