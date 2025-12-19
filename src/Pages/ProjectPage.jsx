import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { projectData } from '../Constants/project.data'
import { motion } from 'framer-motion'
function ProjectPage() {
    const navigate = useNavigate()

    const goToSection = (section) => {
        navigate(`/home#${section}`);
        setTimeout(() => {
            document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    const handleNavigate = (projectId) => {
        return navigate(`/dashboard/tasks/${projectId}`)
    }

    return (
        <div className='mb-20'>
            <div className='grid grid-cols-4 gap-5 m-5'>
                {
                    projectData.map((project, index) => {
                        return (
                            // <Link to={`/dashboard/tasks/${project.id}`}>
                            <motion.div

                                onClick={()=> handleNavigate(project.id)}
                                key={project.id}
                                initial={(index % 2 === 0) ? { opacity: 0, x: 50 } : { opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, ease: "linear" }}
                                viewport={{ once: false, amount: 0.1 }}
                                className='shadow thin_scrollbar bg-blue-200 h-50 text-sm overflow-auto transition-all duration-500  hover:scale-105  p-4 cursor-pointer'
                            >
                                <ul>
                                    <li>{project.id}</li>
                                    <li>{project.name}</li>
                                    <li>{project.description}</li>
                                    <li>{project.status}</li>
                                    <li>{project.progress}</li>
                                    <li>{project.startDate}</li>
                                    <li>{project.endDate}</li>
                                    <li>{project.budget}</li>
                                </ul>
                            </motion.div>
                            // </Link>
                        )
                    })
                }

            </div>
            <button onClick={() => goToSection("cta")} className='px-4 py-2 shadow rounded bg-green-400'>Navigate to Home</button>
        </div>
    )
}

export default ProjectPage







