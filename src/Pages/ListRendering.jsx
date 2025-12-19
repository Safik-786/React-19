import React from 'react'
import { projectData } from '../Constants/project.data'

function ListRendering() {
    
    return (
        <div>
            <section className='grid grid-cols-3  gap-4 m-4'>

                {
                    projectData.map((project, index) => {
                        return (
                            <div key={index} className='shadow p-4 rounded '>
                                <p>Id:{project.id}</p>
                                <h1 >Name: {project.name}</h1>
                                <p>Description: {project.description}</p>
                                <p>Team Member:  {project.team.join(",")}</p>
                                <p>Tach Stacks: {project.technologies.join(",")}</p>
                                <p>Priority: {project.priority}</p>
                            </div>
                        )
                    })
                }

            </section>
        </div>
    )
}

export default ListRendering



