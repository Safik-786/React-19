import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function HashNavigationPage() {
    const navigate=  useNavigate()
    const goToSection = (section) => {
        navigate(`/home#${section}`);
        setTimeout(() => {
            document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };      
    return (
        <div>
            <button onClick={() => goToSection("cta")} className='px-4 py-2 shadow rounded bg-green-400'>Navigate to Home</button>
        </div>
    )
}

export default HashNavigationPage
