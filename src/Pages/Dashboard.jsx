import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

function Dashboard() {

    const navigate= useNavigate()
    return (
        <div className='h-[calc(100vh-64px)]  flex  text-gray-800'>

            <aside className='h-full w-[15%] bg-blue-100 shadow'>
                <ul className=' text-sm flex flex-col '>
                    <li >
                        <NavLink className=' p-2 inline-block w-full' to={"/dashboard"} end>Projects</NavLink>
                    </li>
                    <li >
                        <NavLink className=' p-2 inline-block w-full' to={"/dashboard/tasks"}>Tasks</NavLink>
                    </li>
                    <li >
                        <NavLink className=' p-2 inline-block w-full' to={"/dashboard/subtasks"}>Subtasks</NavLink>
                    </li>
                    <li >
                        <NavLink className={"p-2 inline-block w-full"} to="/dashboard/searchparams">UseSearchParams</NavLink>
                    </li>
                    <li >
                        <NavLink className={"p-2 inline-block w-full"} to="/dashboard/hashnavigation">Id Navigation</NavLink>
                    </li>
                    <li >
                        <div className={"p-2 inline-block w-full"}
                            onClick={() =>{
                                localStorage.removeItem("user")
                                navigate("/login")
                            } 
                            } >
                            Logout
                        </div>
                    </li>
                </ul>
            </aside>


            <section className='h-full w-[85%] overflow-auto'>
                <Outlet />
            </section>

        </div>
    )
}

export default Dashboard
