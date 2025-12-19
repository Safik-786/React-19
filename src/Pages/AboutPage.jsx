import React from 'react'
import { useTheme } from '../context/ThemeContext'

function AboutPage() {
  return (
    <div>
      AboutPage
    </div>
  )
}

export default AboutPage



function ServicePage() {
  const{theme, toggleTheme}= useTheme()
 
  console.log(theme)
  return (
    <div className={`h-screen ${theme === "dark" ? "bg-black" : "bg-green-400"} `}>
      <button onClick={toggleTheme} className='shadow rounded cursor-pointer px-2 py-1 bg-white m-4'>Toggle Theme</button>
    </div>
  )
}

export  {ServicePage}

