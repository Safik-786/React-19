import { useState } from "react";



function DropDown() {

    const [country, setCountry] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Selected country:", country);
    };



    return (

        <form onSubmit={handleSubmit}>

            <h3>Select Country:</h3>
            <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            >
                <option value="">Select...</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="japan">Japan</option>
            </select>



            <button type="submit">Submit</button>

        </form>

    );

}



export default DropDown;

