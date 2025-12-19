import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increament, decreament, customIncreament } from '../actions/couterAction'

function CountComponent() {

  const [amount, setAmount] = useState(0)
  const counterState = useSelector((state) => state.count)
  console.log(counterState)
  const dispatch = useDispatch()


  let handleSubmit= (e)=>{
    e.preventDefault()
    dispatch(customIncreament(Number(amount)))
  }


  console.log("wekjfbehjwgfj3g")

  return (
    <div>

      <h2>Counter: {counterState.count}</h2>
      <button className='shadow p-1 m-2 rounded' onClick={() => dispatch(increament())}>Increament</button>
      <button className='shadow p-1 m-2 rounded' onClick={() => dispatch(decreament())}>Decreament</button>


      <form action="" onSubmit={handleSubmit}>
        <input type="number" className='border' value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button className='rounded shadow'>Add Amount</button>
      </form>




      <button className='shadow p-1 m-2 rounded' onClick={() => dispatch(customIncreament(80))}>Custom  increament</button>


    </div>
  )
}

export default CountComponent
