import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increment, reset } from '../slice/counterSlice';

function RtkCounter() {
    let counterObj = useSelector((state) => state.count)
    let dispatch = useDispatch();
    return (
        <div>
            <div>{counterObj.count}</div>
            <button onClick={() => dispatch(increment())}>Increament</button>
            <button onClick={() => dispatch(decreament())}>Decreament</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default RtkCounter