import React, { useState } from 'react'

function DikshuDemo() {

  const [counter, setCounter]= useState(0)

  let handleClick= ()=>{
    setCounter(counter + 1)
  }
  return (
    <div>

      <h2>{counter}</h2>

      <button className='rounded border cursor-pointer' onClick={handleClick}>increase</button>
      <button className='rounded border cursor-pointer' onClick={()=> setCounter(counter-1)}>decrease</button>
      
    </div>
  )
}

export default DikshuDemo
