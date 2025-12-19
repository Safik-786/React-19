import { memo, useState } from "react"

// import React from 'react'
function ReactMemo() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    return (
        <div className="px-20">
            <p>{count}</p>
            <button className="border" onClick={() => (setCount(count + 1))}>Increament</button>

            <h5>Hello from React Memo</h5>
            <button className="border" onClick={ ()=> setName("Rahul")}>ChangeName</button>
            {/* <ChildComp  /> */}
            <MemoizedChildComp name={name}/>
        </div>
    )
}
export default ReactMemo


function ChildComp({name}) {
    return (
        <div style={{border:"1px dotted red", paddingLeft:'50px'}}>
            <h2>Name: {name}</h2>
            {/* <p>count: {count}</p> */}
            {console.log("I am child Component, i rendered unnecessarily...")}
            <h2>Hii I am child of RectMemo...</h2>
        </div>
    )
}


const MemoizedChildComp= memo(ChildComp)
// const MemoizedChildComp= memo(ChildComp, (prevProps, nextProps ) => prevProps === nextProps)


// const MemoizedChildComp = React.memo(function Child({ name }) {
//     console.log('Child rendered'); // Only logs when name changes
//     return <div>{name}</div>;
// });
