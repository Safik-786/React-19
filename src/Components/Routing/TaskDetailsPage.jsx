import React from 'react'
import { useParams } from 'react-router-dom'

function TaskDetailsPage() {



    const params = useParams()  // {id: '1', name: 'Task-1'}
    console.log("   Params: ", params)
    return (
        <>
            <div>TaskDetailsPage for task ID: {params.id}</div>
            <div>TaskDetailsPage for task Name: {params.name}</div>
        </>
    )
}

export default TaskDetailsPage