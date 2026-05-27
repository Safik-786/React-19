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
