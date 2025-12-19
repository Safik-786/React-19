import { useState } from "react";



function MultipleRadio() {

    const [gender, setGender] = useState("");



    const handleSubmit = (e) => {

        e.preventDefault();

        console.log("Gender:", gender);

    };



    return (

        <form onSubmit={handleSubmit}>

            <h3>Select Gender:</h3>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={(e) => setGender(e.target.value)}
                />

                Male

            </label>



            <label>

                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={(e) => setGender(e.target.value)}

                />

                Female

            </label>



            <label>

                <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={gender === "other"}
                    onChange={(e) => setGender(e.target.value)}
                />
                Other
            </label>

<br /><br />

            <button type="submit">Submit</button>
        </form>

    );

}



export default MultipleRadio;  