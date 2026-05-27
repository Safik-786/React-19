import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increment, incrementCustom, reset } from '../slice/counterSlice';
import { increament } from '../../ReduxState/actions/couterAction';

function RtkCounter() {
    let counterObj = useSelector((state) => state.count)
    let dispatch = useDispatch();

    // console.log("increament()= ", increment())
    // console.log("increamentCustom()= ", incrementCustom())
    return (
        <div>
            <div>{counterObj.count}</div>
            <button className='border bg-green-300 me-4 px-3' onClick={() => dispatch(increment())}>Increament</button>
            <button className='border bg-green-300 me-4 px-3' onClick={() => dispatch(decreament())}>Decreament</button>
            <button className='border bg-green-300 me-4 px-3' onClick={() => dispatch(incrementCustom(5))}>Increament by 5</button>
            <button className='border bg-green-300 me-4 px-3' onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default RtkCounter