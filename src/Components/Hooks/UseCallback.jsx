import React, { useState, useCallback, memo } from 'react';

export default function UseCallBack() {
    const [count, setCount] = useState(0);

    // This function will be re-created on every render
    const hanldeIncrement = () => {
        setCount(count + 1);
    };

    // Solution
    const memoizedHanldeIncrement= useCallback(()=>{
        // setCount(count+1)
        setCount((prev)=> prev+1)
    },[])

    // This function is memoized and will only be re-created when 'count' changes
    const memoizedIncrement = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={hanldeIncrement}>Increment (Parent)</button> <br /><br />
            <button onClick={memoizedIncrement}>Increment (memoized)</button><br /><br />

            {/* <ChildComponent onIncrement={hanldeIncrement} /> */}
            {/* <MemoizedChild onIncrement={hanldeIncrement}/> */}
            {/* <ChildComponent onIncrement={memoizedHanldeIncrement} /> */}

        </div>
    );
}

// React.memo prevents unnecessary re-renders if props haven't changed
const ChildComponent = React.memo(({ onIncrement }) => {
    console.log('ChildComponent rendered');
    return <button onClick={onIncrement}>Increment from Child</button>;
});


const MemoizedChild= memo(ChildComponent)