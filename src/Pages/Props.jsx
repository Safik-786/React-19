import { useEffect, useState } from "react";

// Parent Component that receives all types of props
export const AllPropsExample = ({
    age, // number
    isActive, // boolean
    hobbies, // array
    address, // object
    greet, // function
    children, // children prop
    Component, // component as prop
}) => {

    const[formData, setFormData] = useState({})

    let ExistingData={name:"", email:""}


    useEffect(()=>{
        setFormData(...ExistingData)
    }, [id])


    let myName = "wekjguygf3r"

    const [name, setName] = useState("")
    const [count, setCount] = useState(0)

    let handleIncreament = () => {
        setCount( count + 1)
        setCount((prevCount) => prevCount + 1 )
    }
    let handleAssignName = () => {
        setName("Safik")
    }


    return (
        <>
            <div style={{ border: "2px solid #888", borderRadius: "10px", padding: "16px", width: "fit-content" }}>
                <h2>🧩 All Props Example</h2>

                {/* String */}
                <p><b>Name:</b> {name}</p>

                {/* Number */}
                <p><b>Age:</b> {age}</p>

                {/* Boolean */}
                <p><b>Status:</b> {isActive ? "Active ✅" : "Inactive ❌"}</p>

                {/* Array */}
                <p><b>Hobbies:</b> {hobbies.join(", ")}</p>

                {/* Object */}
                <p><b>Address:</b> {address.city}, {address.country}</p>

                {/* Function */}
                <button onClick={() => greet(name)}>Click to Greet</button>

                {/* Children */}
                <div style={{ marginTop: "12px", background: "#f5f5f5", padding: "10px", borderRadius: "8px" }}>
                    <h4>Children:</h4>
                    {children}
                </div>

                {/* Component as Prop */}
                <div style={{ marginTop: "12px" }}>
                    <h4>Component as Prop:</h4>
                    <Component name={name} />
                </div>

                <ABC />
            </div>

            <h2>Name: {name}</h2>
            <h2>Counter: {count}</h2>
            <button className="shadow bg-blue-500 rounded text-white active:scale-97 transition-all duration-300 cursor-pointer px-2 py-1  me-3  " onClick={handleAssignName}> Set Name(Safik) </button>
            <button className="shadow bg-blue-500 rounded text-white active:scale-97 transition-all duration-300 cursor-pointer px-2 py-1" onClick={handleIncreament}>   Increament Counter </button>
        </>
    );
};

// const MultiEventButton = ({runFunction}) => {

function MultiEventButton({ theme, setTheme }) {
    // const [color, setColor] = useState("bg-blue-500");

    const handleMouseEnter = () => {
        console.log("Mouse EnterExecute")
    }

    let toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    const handleMouseLeave = () => {
        console.log("Mouse leave Execute")
    }
    const handleClick = () => console.log("🎯 Button clicked!");

    return (
        <>
            <button
                className={` font-semibold px-6 py-3 rounded-lg transition-all duration-300 `}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >
                Hover & Click Me
            </button>

            <button onClick={toggleTheme}>Change Theme</button>
        </>
    );
};

export { MultiEventButton };




function Props() {
    let name="safik"
    let age=22
    let isActive=true
    let hobbies=["reading", "coding", "gaming"]
    let address={city:"New York", country:"USA"}


    return (
        <>
            <h2>My name is qhjdg </h2>
           
            Hello From props
            <ABC name={name} Component={Comp} age={age} isActive={isActive} hobbies={hobbies} address={address}   >
                <h2>Hello Form Children</h2>
                <p>Hello Form Children Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam aut culpa dicta soluta tempore libero. Perspiciatis expedita cupiditate tenetur  accusantium?</p>
            </ABC>
        </>
    )
}
export { Props }


function Comp() {
  return (
    <div>
      Hello From Component
    </div>
  )
}





function ABC({name, age, isActive, hobbies, address, Component, children}) {
    return (
        <div>

            <ul>
                <Component/>
                <li>My Name is {name + age}</li>
                <li>My Age is {age}</li>

                {children}

            </ul>

        </div>
    )
}

export { ABC }





