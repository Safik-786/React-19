import React, { createContext, useContext, useState } from 'react'

export const CounterContext = createContext()

function UseContext() {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            Counter At Root: { counter}
            <CounterContext.Provider value={{counter, setCounter}}>
                <Child1 />
            </CounterContext.Provider>
        </div>
    )
}

export default UseContext



function Child1() {
    return (
        <div>
            <h2>Child1</h2>
            <Child2 />
        </div>
    )
}
function Child2() {


    return (
        <div>
            <h2>Child2</h2>
            <Child3 />
        </div>
    )
}
function Child3() {
    return (
        <div>
            <h2>Child3</h2>
            <Child4 />
        </div>
    )
}
function Child4() {
    const {counter, setCounter} =useContext(CounterContext)
    return (
        <div>
            <h2>Child4</h2>
            <button onClick={()=> setCounter(counter+1)} className='shadow rounded cursor-pointer px-2 py-1 bg-white'>Increament</button>
        </div>
    )
}
