import React, { useEffect, useState } from 'react'

function HandlingMultipleField() {
    // const [name, setName]= useState("")
    // const [email, setEmail]= useState("")
    // const [password, setPassword]= useState("")

    const initialData = {
        name: "",
        email: "",
        password: "",
        number: ""
    }

    const [formData, setFormdata] = useState(initialData)

    const [error, setError] = useState({})

    const validate = (name, email, password) => {
<<<<<<< HEAD
        if (!name || !email || !password) {
            alert("All fields are required")
            setError({ global: ["All fields are required"] })
            return false
        }
        if (name.length < 3) {
            setError({ name: ["Name must be at least 3 characters"] })
            return false
        }
        if (name.length > 20) {
            setError({ ...error, name: error.name.push("hchgfcdy") })
            return false
        }
        if (!email.includes("@")) {
            setError({ email: ["Email must contain @"] })
            return false
        }
        if (password.length < 6) {
            setError({ password: ["Password must be at least 6 characters"] })
            return false
=======
        let isError = false
        if (!name || !email || !password) {
            alert("All fields are required")
            setError({ global: ["All fields are required"] })
            isError = true
        }
        if (name.length < 3) {
            setError({ name: ["Name must be at least 3 characters"] })
            isError = true
        }
        if (name.length > 20) {
            setError({ ...error, name: error.name.push })
            isError = true
        }
        if (!email.includes("@")) {
            setError({ email: ["Email must contain @"] })
            isError = true
        }
        if (password.length < 6) {
            setError({ password: ["Password must be at least 6 characters"] })
            isError = true
>>>>>>> a8a4fe20dc98445a755bc5a07087d7bed59cf799
        }
        return isError
    }

    console.log(formData)

    const handleChange = (e) => {
        // const {name, value}= e.target

        // const isError= validate(formData.name, formData.email, formData.password)

        const name = e.target.name
        const value = e.target.value

        setFormdata({ ...formData, [name]: value })
    }

<<<<<<< HEAD


    const handleSubmit = (e) => {
        // e.preventDefault()
=======
    useEffect(() => {
        console.log(formData)
    }, [formData])

    const handleSubmit = (e) => {
        e.preventDefault()
>>>>>>> a8a4fe20dc98445a755bc5a07087d7bed59cf799

        // const isError= validate(name, email, password)
        // if (!isError) {
        //     console.log(name, email, password)
        //     // Api call
        // }
        // else{


        // }
        // setName("")
        // setEmail("")
        // setPassword("")
    }



    return (
        <div>
<<<<<<< HEAD
            <form action="/DropDown.jsx" onSubmit={handleSubmit}>

=======
            <form action="" onSubmit={handleSubmit}>

                {/* global Error */}
                {/* <div>
                    {
                        error.global && (
                            <div>
                                {error.global.map((err, index) => (
                                    <p key={index}>{err}</p>
                                ))}
                            </div>
                        )
                    }
                </div> */}

>>>>>>> a8a4fe20dc98445a755bc5a07087d7bed59cf799
                <div>
                    <label htmlFor="name">Name:</label>
                    <input className='border' type="text" name='name' value={formData.name} onChange={handleChange} id='name' />
                    {/* {
                    error && error.name && (
                        <div>
                            {error.name.map((err, index)=>(
                                <p key={index}>{err}</p>
                            ))}
                        </div>
                    )
                } */}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input className='border' type="email" name='email' value={formData.email} onChange={handleChange} id='email' />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input className='border' type="password" name='password' onChange={handleChange} value={formData.password} id='password' />
                </div>
                <div>
                    <label htmlFor="number">Number:</label>
                    <input className='border' type="number" name='number' onChange={handleChange} value={formData.number} id='number' />
                </div>
<<<<<<< HEAD
                <button className='border' type='submit'>Submit</button>
            </form>
=======

                <button className='border' type='submit'>Submit</button>
            </form>

>>>>>>> a8a4fe20dc98445a755bc5a07087d7bed59cf799
        </div>
    )
}

export default HandlingMultipleField
