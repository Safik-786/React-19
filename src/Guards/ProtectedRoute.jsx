import React from 'react'
import { Navigate, replace, useNavigate } from 'react-router-dom'

export function useAuth() {
    let userData = localStorage.getItem("user")

    let user=JSON.parse(userData)
    console.log(user)
    if (user?.name) {
        return true
    }
    return false
}

function ProtectedRoute({ children }) {
    const  isAuthenticated = useAuth()
    if (!isAuthenticated) {
        // logout logic
        return <Navigate to={"/login" } replace />
        // navigate("/login")
    }
    return (
       children
    )
}

export default ProtectedRoute
