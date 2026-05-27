<<<<<<< HEAD
function AllProps({
    name,
    age,
    isActive,
    hobbies,
    address,
    greet,
    children,
    Component,
}) {
    return (
        <>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{isActive ? "Active" : "Inactive"}</p>
            <p>{hobbies.join(", ")}</p>
            <p>{address.city}</p>
            <button onClick={greet}>Click</button>
            {children}
            <Component />
        </>
    );
}


function Props({ name }) {
    return (
        <div>
            <AllProps
                wetwet="{xfgbv"
                name={name}
                age={22}
                isActive={true}
                hobbies={["Coding", "Gaming"]}
                address={{ city: "NY" }}
                greet={() => alert("Hello")}
                Component={Comp}
            >
                <p>Hello from children</p>
                <p>Hello from children</p>
                <p>Hello from children</p>
                <p>Hello from children</p>
                <p>Hello from children</p>
                <p>Hello from children</p>
                <p>Hello from children</p>
                <p>Hello from children</p>
                <p>Hello from children</p>
                <p>Hello from children</p>
                <p>Hello from children</p>
                <p>Hello from children</p>
                <p>Hello from children</p>
                <p>Hello from children</p>
                <p>Hello from children</p>
                <p>Hello from children</p>
                <p>Hello from children</p>
            </AllProps>
        </div>
    )
}
export default Props



function Comp() {
  return (
    <div>Comp</div>
  )
}
=======
import React from 'react'



export default function AllPropsExample() {

    let haveJob = (e) => {
        console.log("haveJob")
    }
    return (
        <div>
            <PropsChild name="safik" age={20} isMarried={false} haveJob={haveJob} address="kathmandu" city="BBSR" PassComponent={PropComponent} >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur doloremque necessitatibus temporibus placeat, inventore eligendi iusto voluptate minima libero incidunt? Eaque, veniam minus.</p>
                <h2>kjejbbckjerhv</h2>
            </PropsChild>
        </div>
    )
}



function PropComponent() {
    return (
        <div>
            <h2>This is Props Component</h2>
        </div>
    )
}



function PropsChild({ name, age, city, PassComponent, haveJob, children }) {


    let customFunction = (e) => {
        console.log(e)
        console.log("This is the Costom Function")
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(document.forms['form1'])
        console.log(document.forms['form1']['name'].value)
    }

    let handleClick=(event)=>{
        console.log(event)
        console.log("btn clicked")
    }

    return (
        <div>
           
            Name: {name} <br />
            Age: {age} <br />
            City: {city}    
            <PassComponent />

            <button onClick={(e)=> handleClick(e, 2)}>Click</button>
            {/* <button onClick={(e)=>customFunction(e, 20) }>Click</button> */}

            <form className='shadow p-5' name='form1' onSubmit={handleSubmit} action="">
                <input className='border' name='name' type="text" id="" />
                <input type="submit" value="Submit" id="" />
            </form>

        </div>
    )
}

export { PropsChild }
>>>>>>> a8a4fe20dc98445a755bc5a07087d7bed59cf799
