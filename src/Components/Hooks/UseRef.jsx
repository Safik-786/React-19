import React, { useRef } from 'react'

function UseRef() {

    const containerElement = useRef(0)
    const inputRef = useRef(null);

    const handleBtnClick=()=>{
        inputRef.current.style.color="green"
        inputRef.current.style.backgroundColor="red"
    }
    const containerStyle= {backgroundColor:"red", color:"blue", }
    console.log(inputRef)
    return (
        <div ref={containerElement} style={{...containerStyle, fontFamily:"cursive"}}>
            Hello World
            <input ref={inputRef} placeholder="Type here..." />

            <button onClick={handleBtnClick}>Change Color</button>
        </div>
    )
}

export default UseRef
