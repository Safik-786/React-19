import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
<<<<<<< HEAD
import { decreament, increment, incrementCustom, reset } from '../slice/counterSlice';
import { increament } from '../../ReduxState/actions/couterAction';
=======
import { decreament, increment, reset } from '../slice/counterSlice';
>>>>>>> a8a4fe20dc98445a755bc5a07087d7bed59cf799

function RtkCounter() {
    let counterObj = useSelector((state) => state.count)
    let dispatch = useDispatch();
<<<<<<< HEAD

    // console.log("increament()= ", increment())
    // console.log("increamentCustom()= ", incrementCustom())
    return (
        <div>
            <div>{counterObj.count}</div>
            <button className='border bg-green-300 me-4 px-3' onClick={() => dispatch(increment())}>Increament</button>
            <button className='border bg-green-300 me-4 px-3' onClick={() => dispatch(decreament())}>Decreament</button>
            <button className='border bg-green-300 me-4 px-3' onClick={() => dispatch(incrementCustom(5))}>Increament by 5</button>
            <button className='border bg-green-300 me-4 px-3' onClick={() => dispatch(reset())}>Reset</button>
=======
    return (
        <div>
            <div>{counterObj.count}</div>
            <button onClick={() => dispatch(increment())}>Increament</button>
            <button onClick={() => dispatch(decreament())}>Decreament</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
>>>>>>> a8a4fe20dc98445a755bc5a07087d7bed59cf799
        </div>
    )
}

export default RtkCounter