import React, { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext()

function ThemeContextProvider({ children }) {
    const [theme, setTheme]= useState("light")

    const toggleTheme= () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <div>
            <ThemeContext.Provider value={{ theme, setTheme, toggleTheme}}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}

export default ThemeContextProvider


export const useTheme=()=>{
    const obj= useContext(ThemeContext)
    return obj
}
