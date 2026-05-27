import React from 'react'
import { Link, useParams } from 'react-router-dom'

function TasksPage() {

    let data=[
        {
            id:1,
            name:"Task 1",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
            img:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFza3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:2,
            name:"Task 2",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
            img:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFza3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:3,
            name:"Task 3",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
            img:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFza3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:4,
            name:"Task 4",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
            img:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFza3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        }
    ]

    return (
        <div>

            <h1>Tasks Page</h1>

            {/* {
                new Array(10).fill(0).map((_, index) => {
                    return (
                        <Link key={index} to={`/tasks/${index + 1}/Task-${index + 1}`} >
                            <div className='shadow rounded p-5 m-5'>
                                <h2>Id= {index + 1}</h2>
                                <h2>Task {index + 1}</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                            </div>
                        </Link>
                    )
                })
            } */}


            {
                data.map((item) => {
                    return (
                        <Link key={item.id} to={`/tasks/${item.id}/${item.name}`} >
                            <div className='shadow rounded p-5 m-5'>
                                <h2>Id= {item.id}</h2>
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                                <img className='h-50 w-50' src={item.img} alt="" />
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default TasksPage