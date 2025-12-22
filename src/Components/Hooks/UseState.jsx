import React, { useState } from 'react'

function UseState() {

    const [count, setCount] = useState(0)

    const [name, setName]= useState("")
    let handleClick= ()=>{
        setCount(count+2)
    }

    let handleDecreaement= ()=>{
        setCount(count-2)
    }

    // let handleName= ()=>{
    //     setName("John Doe")
    // }

  
    return (
        <div>
            <h2>{count}</h2>
            <h2>Name:{name}</h2>

            <button style={{border:"1px solid red"}} onClick={handleClick}>increament</button>
            <button style={{border:"1px solid red"}} onClick={handleDecreaement}>decreament</button>
            <button style={{border:"1px solid red"}} onClick={()=> setName("John Doe")}>Set Name</button>
        </div>
    )
}

export default UseState



export function BookList() { 
    const [books, setBooks] = useState([]); 
    const addBook = () => { 
        setBooks([...books, `Book ${books.length + 1}`]); 
    }; 
    return ( 
        <> 
            <button onClick={addBook}>Add Book</button> 
            <ul> 
                {books}
                {/* {books.map((b, i) => <li key={i}>{b}</li>)}  */}
            </ul> 
        </> 
    ) 
} 



function UserProfile() { 
    const [user, setUser] = useState({ 
        name: 'Guest', 
        role: 'User', 
        isActive: false 
    }); 
    const activateUser = () => { 
        setUser({ 
            ...user, 
            isActive: true 
        }); 
    }; 
    const changeRole = () => { 
        setUser({ 
            ...user, 
            role: 'Admin' 
        }); 
    }; 
    return ( 
        <div> 
            <p>Name: {user.name}</p> 
            <p>Role: {user.role}</p> 
            <p>Status: {user.isActive ? 'Active' : 'Inactive'}</p> 
            <button onClick={activateUser}>Activate</button> 
            <button onClick={changeRole}>Make Admin</button> 
        </div> 
    ); 
} 
export { UserProfile }; 