import React, { useEffect, useState } from "react";
import { axiosInstancs } from "../api/axios";

function Form({ item }) {
    let isEdit = item !== null
    const [formData, setFormData] = useState({
        name: "",
    });

    useEffect(() => {
        setFormData(item?.name)
    }, [item])

    const [loader, setLoader] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        try {
            setLoader(true)
            e.preventDefault()
            console.log("Form Data Submitted:", formData);
            if (isEdit) {

            }
            else {

                const response = await axiosInstancs.post('/users', formData)
                if (response.status === 201) {
                    setLoader(false)
                    alert("User created successfully!")
                }
            }
        } catch (error) {
            console.log(error);
            setLoader(false)
            alert("Error creating user.", error)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    User Form
                </h2>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your name"
                        value={formData?.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
            focus:ring-indigo-500 transition"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg 
          hover:bg-indigo-700 active:scale-[0.98] transition"
                >
                    {loader ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}

export default Form;
