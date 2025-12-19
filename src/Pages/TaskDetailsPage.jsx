import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { projectData } from '../Constants/project.data'
// import { projectData } from '../../Constants/project.data'
// import { projectData } from '../constants/project.data'/

function TaskDetailsPage() {
  const { id } = useParams()

  console.log(id)

  const [updatedData, setUpdatedData] = useState([])

  console.log(id)

  useEffect(() => {
    const updatedData = projectData.filter((project) => {
      return project.id === Number(id)
    })
    setUpdatedData(updatedData)
  }, [id])


  // useEffect(() => {
  //   console.log(updatedData)
  // }, [updatedData])

  return (
    <div>

      {

        updatedData[0] ?

        <div className='shadow text-sm bg-green-100 p-5 m-3 ' >
          <ul className='grid grid-cols-2'>
            <li>{updatedData[0].id}</li>
            <li>{updatedData[0].name}</li>
            <li>{updatedData[0].description}</li>
            <li>{updatedData[0].status}</li>
            <li>{updatedData[0].progress}</li>
            <li>{updatedData[0].startDate}</li>
            <li>{updatedData[0].endDate}</li>
            <li>{updatedData[0].budget}</li>
          </ul>
        </div>
        :
        <div>
        Loading...
        </div>
      }

    </div>
  )
}

export default TaskDetailsPage
