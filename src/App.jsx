import React, { useState } from 'react'
import { DependencyExample } from './Components/Hooks/UseEffect'
import Debouncing from './Components/CustomCode/1_debouncing'

function App() {
  let [toasts, setToasts] = useState([])


  let startTimer= (id)=>{
    setTimeout(()=>{
      stopTimer(id)
    }, 4000)
  }


  const stopTimer=(id)=>{
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  const addToast = (toast) => {
    setToasts((prev) => [...prev, toast])
    startTimer(toast.id)
  }
  return (
    <div>
      {/* <DependencyExample /> */}

      {/* <div className=''>
        <button onClick={() => addToast({ type: "warning", message: "warning", id: Date.now() })} className='bg-yellow-500'>warning</button>
        <button onClick={() => addToast({ type: "error", message: "error", id: Date.now() })} className='bg-red-500'>Danger</button>
        <button onClick={() => addToast({ type: "success", message: "success", id: Date.now() })} className='bg-green-500'>Success</button>
      </div>

      {
        toasts.map((toast) => (
          <div key={toast.id} className={`p-6 fade-in  w-md   bg-${toast.type}-50 shadow`}>{toast.message}</div>
        ))
      }
      
      */}


      <Debouncing />

    </div>
  )
}

export default App
