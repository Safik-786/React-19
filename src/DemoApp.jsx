import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

function DemoApp() {
  const { theme, setTheme, toggleTheme } = useContext(ThemeContext)
  return (
    <div>

      <div className={`h-100 shadow w-100 ${(theme === "dark") ? "bg-purple-950" : "bg-green-50"} `}>
        Hello
      </div>

      <button className='shadow cursor-pointer px-4 py-2 bg-green-50' onClick={toggleTheme}>Toggle Theme</button>

    </div>
  )
}

export default DemoApp
