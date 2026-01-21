import React, { useMemo, useState } from 'react'

function UseMemo() {
    const[count, setCount]= useState(0)
    const findNthSum= (n)=>{
      console.log("Sum Upto ", n, "called....")
        let sum=0 ;
        for (let i =0 ;i<=n; i++){
            sum+= i
        }
        return sum
    }
    //    PROBLEM
    // let sumUpto1000= findNthSum(1000)
    // let sumUpto10000= findNthSum(10000)
    
    // Calculate time take to execute a function
    // console.time("Test"); // "Test" is a unique string
    //  findNthSum(1000);
    // console.timeLog("Test");


    
    //   SOLUTION
    const sumUpto1000=  useMemo(()=>{
      return findNthSum(1000)
    }, [])
    const sumUpto10000=  useMemo(()=>{
      return findNthSum(10000)
    }, [count])


    // OR
    // const [sumUpto1000, sumUpto10000]= useMemo(()=>{
    //   return [findNthSum(1000), findNthSum(10000)]
    // },[])


  return (
    <div style={{border:"1px dotted green", paddingLeft:"50px"}}>
      <h2>This is UseMemo Component</h2>
      <p>Count: {count}</p>
      <button className='border shadow rounded' onClick={()=> setCount(count+1)}>Increament</button>
      <h2>Sum of 1 to 1000 is {sumUpto1000}</h2>
      <h2>Sum of 1 to 10000 is {sumUpto10000}</h2>
    </div>
  )
}

export default UseMemo
