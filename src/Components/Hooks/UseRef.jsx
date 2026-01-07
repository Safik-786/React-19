import React, { useRef } from 'react'

function UseRef() {

    const containerElement = useRef(0)
    const inputRef = useRef(null);

    const handleBtnClick = () => {
        inputRef.current.style.color = "white"
        containerElement.current.style.backgroundColor = "red"
    }
    const containerStyle = { backgroundColor: "red", color: "blue", }
    console.log(inputRef)


    return (
        <div ref={containerElement} >
            <input className='border' ref={inputRef} placeholder="Type here..." />
            <br /> <br />
            <button onClick={handleBtnClick}>Change Color</button>
        </div>
    )
}

export default UseRef
