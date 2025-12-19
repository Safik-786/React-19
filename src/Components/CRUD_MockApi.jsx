import React, { useEffect, useState } from 'react'
import { set } from 'react-hook-form'
import { axiosInstancs } from '../ApiHandling/api/axios'

export default function CRUD() {
  const [editPayload, setEditPayload] = useState(null)

  const [isfetchindData, setisFetchingdata]= useState(false)
const [isEditMode, setIsEditMode]= useState(false)
  const initialData = {
    name: editPayload?.name ?? ""
  }



  console.log(initialData)
  const [userData, setUserData] = useState([])
  const [formData, setFormData] = useState(initialData)
  const [openForm, setOpenForm] = useState(false)


  let closeForm= ()=>{
    setOpenForm(false)
    setEditPayload(null)
    setIsEditMode(false)
  }

  useEffect(()=>{
     setFormData(editPayload)
     if(editPayload){
      setIsEditMode(true)
     }
     
  }, [editPayload])

  const fetchData = async () => {
    setisFetchingdata(true)
    try {
      const response = await axiosInstancs.get("/users")
      setUserData(response.data)

      console.log(response.data)
    } catch (error) {
      console.log(error)
    }finally{
      setisFetchingdata(false)
    }
  }

  const createData = async () => {
    try {
      const response = await axiosInstancs.post("/users", formData)
      console.log(response)
      fetchData()
      closeForm()
    } catch (error) {
      console.log(error)
    }
  }

  const editData= async ()=>{
    const response= await axiosInstancs.put(`/users/${editPayload.id}`, formData)
    console.log(response)
    closeForm()
    fetchData()
  }


  const handleDelete = async (id) => {
    try {
      let isConfirm = confirm("Are you Sure")
      if (!isConfirm) {
        return;
      }
      const response = await axiosInstancs.delete(`/users/${id}`)
      console.log(response)
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }


  const handleEdit = (itemData) => {
    console.log("itemData at handledit= ", itemData)
    setEditPayload(itemData)
    setOpenForm(true)
  }

  const handleChange = (e) => {
    console.log(e.target)
    const {name, value} = e.target
    setFormData((prev) => {
      return { ...prev, [name]: value }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // const isEditMode= Boolean(editPayload)

    console.log(isEditMode)

    if (isEditMode) {
      editData()
      setEditPayload(null)
    }
    else {
      createData()
    }
  }

  

  useEffect(() => {
    fetchData()
  }, [])

  if (isfetchindData) {
    return (
      <div className='flex justify-around items-center h-screen'>
        <div className='animate-spin border-2 h-10 w-10  rounded-full border-t-transparent'></div>
      </div>
    )
  }


  return (
    <>
      <div className='p-5 shadow m-4 rounded text-end'>
        <button onClick={() => setOpenForm(true)} className='shadow px-4 py-2 text-blue-500 rounded cursor-pointer '>Create New</button>
      </div>
      <div className='grid grid-cols-3'>
        {
          userData && [...userData].reverse().map((item, index) => {
            return (
              <div key={index} className="shadow flex justify-between gap-2 m-3 p-4 rounded-xl">
                <div>
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p>{item.id}</p>
                  <p>{item.createdAt}</p>
                  <button className='shadow px-1 text-blue-400 cursor-pointer' onClick={() => handleEdit(item)}>Edit</button>
                  <button className='shadow px-1 text-red-400 cursor-pointer' onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
                <div>
                  <img src={item.avatar} height={100} width={100} alt="" />
                </div>
              </div>
            )
          })
        }
      </div>


      {
        openForm && (
          <div className='fixed inset-0 bg-black/70 backdrop-blur-xs'>
            <div className='flex justify-center items-center h-full ' onClick={(e) => {
              e.stopPropagation()
              closeForm()
            }}>
              <div className='bg-white relative p-4 rounded-xl w-lg ' onClick={(e) => e.stopPropagation()}>
                <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                  <h2 className='p-4 shadow bg-blue-50 rounded uppercase text-blue-600 text-center text-2xl'>Add Data</h2>
                  <div className="flex  flex-col">
                    <label htmlFor="">Name</label>
                    <input type="text" value={formData?.name} name='name' onChange={handleChange} className='py-2 px-4 shadow outline-none border-none rounded ring-1 focus:ring-blue-600' placeholder='Name ' />
                  </div>
                  {/* <div className="flex  flex-col">

                    <label htmlFor="">Email</label>
                    <input type="text" className='py-2 px-4 shadow outline-none border-none rounded ring-1 focus:ring-blue-600' placeholder='Email ' />
                  </div>
                  <div className="flex  flex-col">

                    <label htmlFor="">Password</label>
                    <input type="text" className='py-2 px-4 shadow outline-none border-none rounded ring-1 focus:ring-blue-600' placeholder='Password ' />
                  </div> */}
                  <button type="submit" className=" justify-center rounded-2xl mt-10 bg-blue-400 py-2 w-full flex border">{isEditMode ? "Edit User" : "Craete USer"}</button>
                </form>
                <span className="text-2xl absolute transition-all duration-200 top-2 hover:text-red-500 hover:scale-130 active:scale-95 cursor-pointer right-3 rotate-45"
                  onClick={() => closeForm()}
                >+</span>
              </div>
            </div>
          </div>
        )
      }

    </>
  )
}




// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
// import React from 'react'

// function CRUD() {

//   const fetchData = async () => {
//     const response = await fetch("https://6901f2bfb208b24affe460ef.mockapi.io/users")
//     const data = await response.json()
//     return data
//   }

//   const useCreateUser= ()=>{
//     const queryClient= useQueryClient()
//     return useMutation({
//       mutationFn: async (newUser)=>{
//         const response = await fetch("https://6901f2bfb208b24affe460ef.mockapi.io/users", {
//           method: "POST",
//           body: JSON.stringify(newUser),
//           headers: {
//             "Content-Type": "application/json"
//           }
//         })
//         return response.json()
//       },
//       onSuccess: ()=>{
//         queryClient.invalidateQueries({queryKey: ["users"]})
//         alert("User Created Successfully")
//       },
//       onError: ()=>{
//         alert("Error Creating User")
//       }
//     })
//   }

//   const createUserMutation= useCreateUser()

//   createUserMutation.isPending

//   if (createUserMutation.isError) {
    
//   }

//   const handleSubmit= ()=>{
//     let formdata

//     createUserMutation.mutateAsync(formdata)
//   }
//   const { data, isLoading, error, refetch } = useQuery({
//     queryKey: ["users"],
//     queryFn: fetchData,
//   })

//   if (isLoading) {
//     return (
//       <h2>Loading..</h2>
//     )
//   }

//   if (error) {
//     return (
//       <h2>{error.message}</h2>
//     )
//   }
//   console.log(data)
//   return (
//     <div>

//       <button onClick={()=>  refetch()}>Refetch Data</button>

//     </div>
//   )
// }

// export default CRUD


