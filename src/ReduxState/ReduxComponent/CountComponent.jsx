import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increament, decreament, customIncreament, reset, customDecreament } from '../actions/couterAction'

function CountComponent() {

  const [amount, setAmount] = useState(0)
  const counterState = useSelector((state) => state.count)
  console.log(counterState)


  const dispatch = useDispatch()


  let handleSubmit = (e) => {
    e.preventDefault()
    dispatch(customIncreament(Number(amount)))
  }

  let handleCustomDecreament= ()=>{
    dispatch(customDecreament(amount))
  }


  console.log("wekjfbehjwgfj3g")

  return (
    <div className='ps-30'>

      <h2>Counter: {counterState.count}</h2>


      <button className='shadow p-1 m-2 cursor-pointer rounded' onClick={() => dispatch(increament())}>Increament</button>
      <button className='shadow p-1 m-2 cursor-pointer rounded' onClick={() => dispatch(decreament())}>Decreament</button>


      <form action="" onSubmit={handleSubmit}>
        <input type="number" className='border' value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button className='shadow p-1 m-2 bg-green-50 text-green-700 rounded'>Add Amount</button>
      </form>


      <button className='shadow p-1 m-2 bg-red-50 text-red-700 rounded' onClick={handleCustomDecreament}>Remove  Amount</button>

      {/* <button className='shadow p-1 m-2 bg-green-50 rounded' onClick={() => dispatch(customIncreament(80))}>Custom  increament</button> */}
      <button className='shadow p-1 m-2 rounded' onClick={() => dispatch(reset())}>Reset</button>


    </div>
  )
}

export default CountComponent
