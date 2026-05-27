import React, { useEffect, useState } from 'react'
import { axiosInstancs } from '../ApiHandling/api/axios'

export default function CRUD() {

  const [error, setError] = useState(null)
  const [isFetchingData, setIsFetchingData] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)

  const [userData, setUserData] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [editingId, setEditingId] = useState(null)   // ✅ store only ID
  const [openForm, setOpenForm] = useState(false)

  const closeForm = () => {
    setOpenForm(false)
    setIsEditMode(false)
    setEditingId(null)
    setName("")
  }

  const fetchData = async () => {
    setIsFetchingData(true)
    try {
      const response = await axiosInstancs.get("/users")
      setUserData(response.data)
    } catch (error) {
      setError(error.message)
    } finally {
      setIsFetchingData(false)
    }
  }

  const createData = async () => {
    try {
      await axiosInstancs.post("/users", { name, price })
      fetchData()
      closeForm()
    } catch (error) {
      console.log(error)
    }
  }

  const editData = async () => {
    try {
      await axiosInstancs.put(`/users/${editingId}`, { name, price })  // ✅ use editingId
      fetchData()
      closeForm()
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      const isConfirm = window.confirm("Are you sure?")
      if (!isConfirm) return

      await axiosInstancs.delete(`/users/${id}`)
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }

  const handleEdit = (item) => {
    setOpenForm(true)
    setIsEditMode(true)
    setEditingId(item.id)   // ✅ store id only
    setName(item.name)      // prefill input
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isEditMode) {
      editData()
    } else {
      createData()
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isFetchingData) {
    return (
      <div className='flex justify-around items-center h-screen'>
        <div className='animate-spin border-2 h-10 w-10 rounded-full border-t-transparent'></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <h2 className='text-red-500 text-2xl'>Error: {error}</h2>
      </div>
    )
  }

  return (
    <>
      <div className='p-5 shadow m-4 rounded text-end'>
        <button
          onClick={() => setOpenForm(true)}
          className='shadow px-4 py-2 text-blue-500 rounded cursor-pointer'
        >
          Create New
        </button>
      </div>

      <div className='grid grid-cols-3'>
        {[...userData].reverse().map((item) => (
          <div key={item.id} className="shadow flex justify-between gap-2 m-3 p-4 rounded-xl">
            <div>
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p>{item.id}</p>
              <p>Price: {item.price} $</p>
              <p>{item.createdAt}</p>
              <button
                className='shadow px-1 text-blue-400 cursor-pointer'
                onClick={() => handleEdit(item)}
              >
                Edit
              </button>
              <button
                className='shadow px-1 text-red-400 cursor-pointer'
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
            <div>
              <img src={item.avatar} height={100} width={100} alt="" />
            </div>
          </div>
        ))}
      </div>

      {openForm && (
        <div className='fixed inset-0 bg-black/70 backdrop-blur-xs'>
          <div
            className='flex justify-center items-center h-full'
            onClick={closeForm}
          >
            <div
              className='bg-white relative p-4 rounded-xl w-lg'
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                <h2 className='p-4 shadow bg-blue-50 rounded uppercase text-blue-600 text-center text-2xl'>
                  {isEditMode ? "Edit User" : "Add Data"}
                </h2>

                <div className="flex flex-col">
                  <label>Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='py-2 px-4 shadow outline-none border-none rounded ring-1 focus:ring-blue-600'
                    placeholder='Name'
                  />
                </div>
                <div className="flex flex-col">
                  <label>Price</label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className='py-2 px-4 shadow outline-none border-none rounded ring-1 focus:ring-blue-600'
                    placeholder='Price'
                  />
                </div>
                <button
                  type="submit"
                  className="justify-center rounded-2xl mt-10 bg-blue-400 py-2 w-full flex border"
                >
                  {isEditMode ? "Edit User" : "Create User"}
                </button>
              </form>

              <span
                className="text-2xl absolute top-2 right-3 rotate-45 cursor-pointer hover:text-red-500"
                onClick={closeForm}
              >
                +
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
