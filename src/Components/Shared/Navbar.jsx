import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";
import { useAuth } from '../../Guards/ProtectedRoute';

function Navbar() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false)
  const isAuthenticated = useAuth()

  const toggleMenu = () => {
    setToggleMobileMenu(!toggleMobileMenu)
  }

  console.log(toggleMobileMenu)

  return (
    <>
      <nav className='p-2 hidden md:block bg-blue-100 text-sm text-gray-800 shadow '>
        <ul className='flex flex-wrap gap-5 p-3 '>
          {/* <li><a className={"p-2"} href="/home" >Home</a></li>
        <li><a className={"p-2"} href="/about">About</a></li>
        <li><a className={"p-2"} href="/dashboard">Dashboard</a></li>
        <li><a className={"p-2"} href="/services">Services</a></li>
        <li><a className={"p-2"} href="/settings">Settings</a></li>
        <li><a className={"p-2"} href="/login">Login</a></li> */}
          {/* <li><Link className={"p-2"} to="/home" >Home</Link></li>
        <li><Link className={"p-2"} to="/about">About</Link></li>
        <li><Link className={"p-2"} to="/dashboard">Dashboard</Link></li>
        <li><Link className={"p-2"} to="/services">Services</Link></li>
        <li><Link className={"p-2"} to="/settings">Settings</Link></li>
        <li><Link className={"p-2"} to="/login">Login</Link></li> */}
          <li><NavLink className={"p-2"} to="/home" >Home</NavLink></li>
          <li><NavLink className={"p-2"} to="/about">About</NavLink></li>
          <li><NavLink className={"p-2"} to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink className={"p-2"} to="/services">Services</NavLink></li>
          <li><NavLink className={"p-2"} to="/settings">Settings</NavLink></li>
          <li><NavLink className={"p-2"} to="/ssg">SSG</NavLink></li>
          <li><NavLink className={"p-2"} to="/posts/1">useParams</NavLink></li>
          {

          }
          <li><NavLink className={"p-2"} to="/login">Login</NavLink></li>
        </ul>
      </nav>
      <nav className='p-2  block md:hidden bg-blue-100 text-sm text-gray-800 shadow '>

        <button onClick={toggleMenu}><CiMenuFries className={`${toggleMobileMenu ? "text-red-500 bg-green-500" : ""}`} /></button>
        {
          toggleMobileMenu && (
            <ul className='flex flex-col  gap-5 p-3 '>
              <li><NavLink className={"p-2"} to="/home" >Home</NavLink></li>
              <li><NavLink className={"p-2"} to="/about">About</NavLink></li>
              {
                isAuthenticated && (
                  <li><NavLink className={"p-2"} to="/dashboard">Dashboard</NavLink></li>
                )
              }
              <li><NavLink className={"p-2"} to="/services">Services</NavLink></li>
              <li><NavLink className={"p-2"} to="/settings">Settings</NavLink></li>
              {
                !isAuthenticated && (
                  <li><NavLink className={"p-2"} to="/login">Login</NavLink></li>
                )
              }
            </ul>
          )
        }
      </nav>
    </>

  )
}

export default Navbar


