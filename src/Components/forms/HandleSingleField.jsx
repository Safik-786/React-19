

// import { useState } from 'react'

// function HandleSingleField() {

//     let [name, setName] = useState("")
//     let [email, setEmail] = useState("")

//     console.log(name)
//     console.log(email)

//     let handleName= (e)=>{
//         let value= e.target.value
//         setName(value)
//     }
//     let handleMail= (e)=>{
//         // let value= 
//         setEmail(e.target.value)
//     }
//     let handleSubmit= (e)=>{
//         e.preventDefault()
//         console.log(name)
//         console.log(email)
//     }
//     return (

//         <>
//             <form onSubmit={handleSubmit} action="">
//                 <input className='border' type="text" placeholder='Enter Name' value={name} onChange={handleName} name="" id="" /> <br /><br />
//                 <input className='border' type="email" placeholder='Enter Name' value={email} onChange={handleMail} name="" id="" /><br /><br />
//                 <input className='shadow rounded px-2 py-1 border bg-green-50' type="submit" value="Submit" id="" />
//             </form>
//             <div>HandleSingleField</div>
//         </>
//     )
// }

// export default HandleSingleField





import { useState } from 'react'

function HandleSingleField() {

    let initialState= {
        username:"",
        email:"",
        password:"",
    }

    const [formData, setFormData] = useState(initialState)

    console.log(formData)


    let handleChange= (e)=>{
        // console.log(e.target)
        let value= e.target.value
        let name= e.target.name

        setFormData((prev)=>{
            return {...prev, [name]: value }
        })
    }

    let handleSubmit= (e)=>{
        e.preventDefault()
        console.log("Form Submitted Successfully=", formData)
        // Database
    }
    return (

        <>
            <form onSubmit={handleSubmit} action="">
                <input className='border' type="text" placeholder='Enter Name' value={formData.name} onChange={handleChange} name="username" id="" /> <br /><br />
                <input className='border' type="email" placeholder='Enter Email' value={formData.email} onChange={handleChange} name="email" id="" /><br /><br />
                <input className='border' type="password" placeholder='Enter password' value={formData.password} onChange={handleChange} name="password" id="" /><br /><br />
                <input className='shadow rounded px-2 py-1 border bg-green-50' type="submit" value="Submit" id="" />

            </form>
            <div>HandleSingleField</div>
        </>
    )
}

export default HandleSingleField