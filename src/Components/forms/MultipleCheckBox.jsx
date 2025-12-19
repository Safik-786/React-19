import React, { useState } from 'react'

function MultipleCheckBox() {

    let [hobbies, setHobbies]= useState([])

    let handleCheckbox= (e)=>{
        const {checked, value}= e.target
        if(checked){
            setHobbies([...hobbies, value])
        }else{
            setHobbies(hobbies.filter((hobby)=> hobby !== value))
        }
    }

    let handleSubmit= (e)=>{
        e.preventDefault()
        console.log(hobbies)
    }

    return (
        <div> 
            <form action="" onSubmit={handleSubmit}>
                <h2>Select your hobby</h2>
                <div className='flex gap-2 items-center'>

                    <label htmlFor="">Coding</label>
                    <input type="checkbox" value="coding" checked={hobbies.includes("coding")} onChange={handleCheckbox} id="" />
                </div>
                <div className='flex gap-2 items-center'>

                    <label htmlFor="">travelling</label>
                    <input type="checkbox" checked={hobbies.includes("travelling")} onChange={handleCheckbox} value="travelling" id="" />
                </div>
                <div className='flex gap-2 items-center'>

                    <label htmlFor="">Reading</label>
                    <input type="checkbox" checked={hobbies.includes("reading")} onChange={handleCheckbox} value="reading" id="" />
                </div>


                <input type="submit" value={"Submit"} name="" id="" />
            </form>
        </div>
    )
}

export default MultipleCheckBox
