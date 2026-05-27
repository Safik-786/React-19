import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function NestedFile() {
    return (
        <div className='flex border bg-green-50 h-[calc(100vh-60px)]'>
            <aside className='w-[15%] bg-blue-100 '>
                <ul className=' flex flex-col gap-1 w-full'>
                    <li className='w-full' ><NavLink className={"p-2 flex w-full"} to="/nested" end>Profile</NavLink></li>
                    <li className='w-full' ><NavLink className={"p-2 flex w-full"} to="/nested/reels" >Reels</NavLink></li>
                    <li className='w-full' ><NavLink className={"p-2 flex w-full"} to="/nested/settings" >Setting</NavLink></li>
                </ul>
            </aside>
            <section className='w-[85%] bg-pink-100'>
                <Outlet />
            </section>
        </div>
    )
}

export default NestedFile