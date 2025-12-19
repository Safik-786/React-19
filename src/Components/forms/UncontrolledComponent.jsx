import React, { useRef } from "react";

function UncontrolledForm() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const ageRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            age: ageRef.current.value
        };

        alert("Form Data: " + JSON.stringify(data, null, 2));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" ref={nameRef} /> <br />
            <input type="email" placeholder="Email" ref={emailRef} /> <br />
            <input type="password" placeholder="Password" ref={passwordRef} /> <br />
            <input type="number" placeholder="Age" ref={ageRef} /> <br />

            <button type="submit">Submit</button>
        </form>
    );
}

export default UncontrolledForm;
