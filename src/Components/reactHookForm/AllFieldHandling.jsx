import React from "react";
import { useForm } from "react-hook-form";


function AllInputFieldsForm() {
    const { register, handleSubmit } = useForm();

    const submitForm = (data) => {
        console.log("Form Data:", data);
    };

    return (

        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit(submitForm)}
                className="flex flex-col gap-4 p-6 border rounded-lg bg-white shadow-md w-[500px]"
            >

                <h2 className="text-2xl font-semibold text-center mb-2">
                    React Hook Form - All Input Types
                </h2>
                {/* TEXT INPUT */}
                <label className="flex flex-col">
                    Name:
                    <input
                        {...register("name")}
                        type="text"
                        placeholder="Enter your name"
                        className="border p-2 rounded"
                    />

                </label>



                {/* EMAIL INPUT */}

                <label className="flex flex-col">
                    Email:
                    <input
                        {...register("email")}
                        type="email"
                        placeholder="Enter your email"
                        className="border p-2 rounded"
                    />

                </label>



                {/* PASSWORD INPUT */}
                <label className="flex flex-col">
                    Password:
                    <input
                        {...register("password")}
                        type="password"
                        placeholder="Enter password"
                        className="border p-2 rounded"
                    />
                </label>



                {/* NUMBER INPUT */}
                <label className="flex flex-col">
                    Age:
                    <input
                        {...register("age")}
                        type="number"
                        placeholder="Enter your age"
                        className="border p-2 rounded"
                    />

                </label>



                {/* RADIO BUTTONS */}

                <fieldset className="flex flex-col border p-2 rounded">
                    <legend>Gender:</legend>
                    <label>
                        <input {...register("gender")} type="radio" value="male" /> Male
                    </label>
                    <label>
                        <input {...register("gender")} type="radio" value="female" /> Female
                    </label>
                    <label>
                        <input {...register("gender")} type="radio" value="other" /> Other
                    </label>
                </fieldset>



                {/* CHECKBOX */}

                <label className="flex gap-2 items-center">
                    <input {...register("subscribe")} type="checkbox" />
                    Subscribe to newsletter
                </label>

                <h2 className="text-xl font-semibold text-center">Select Your Skills</h2>
                <div className="grid grid-cols-3">
                    <label className="flex gap-2 items-center">
                        <input type="checkbox" value="HTML" {...register("skills")} />
                        HTML
                    </label>

                    <label className="flex gap-2 items-center">

                        <input type="checkbox" value="CSS" {...register("skills")} />

                        CSS

                    </label>

                    <label className="flex gap-2 items-center">

                        <input type="checkbox" value="JavaScript" {...register("skills")} />

                        JavaScript

                    </label>

                    <label className="flex gap-2 items-center">

                        <input type="checkbox" value="React" {...register("skills")} />

                        React

                    </label>

                    <label className="flex gap-2 items-center">
                        <input type="checkbox" value="Node.js" {...register("skills")} />
                        Node.js
                    </label>



                </div>

                {/* SELECT DROPDOWN */}

                <label className="flex flex-col">

                    Country:

                    <select {...register("country")} className="border p-2 rounded">

                        <option value="">Select your country</option>

                        <option value="india">India</option>

                        <option value="usa">USA</option>

                        <option value="uk">UK</option>

                        <option value="canada">Canada</option>

                    </select>

                </label>



                {/* TEXTAREA */}

                <label className="flex flex-col">

                    Bio:

                    <textarea

                        {...register("bio")}

                        placeholder="Tell us something about yourself..."

                        rows="3"

                        className="border p-2 rounded"

                    />

                </label>



                {/* DATE PICKER */}

                <label className="flex flex-col">

                    Date of Birth:

                    <input {...register("dob")} type="date" className="border p-2 rounded" />

                </label>



                {/* COLOR PICKER */}

                <label className="flex flex-col">

                    Favorite Color:

                    <input {...register("color")} type="color" className="border p-2 rounded" />

                </label>



                {/* RANGE SLIDER */}

                <label className="flex flex-col">
                    Satisfaction Level:
                    <input {...register("satisfaction")} type="range" min="0" max="10" />

                </label>



                {/* FILE UPLOAD */}

                <label className="flex flex-col">

                    Profile Picture:

                    <input {...register("profilePic")} type="file" className="border p-2 rounded" />

                </label>



                {/* MULTIPLE FILE UPLOAD */}

                <label className="flex flex-col">

                    Upload Documents (Multiple):

                    <input {...register("documents")} type="file" multiple className="border p-2 rounded" />

                </label>



                {/* SUBMIT BUTTON */}

                <button
                    type="submit"
                    className="bg-blue-600 text-white font-semibold p-2 rounded hover:bg-blue-700"

                >
                    Submit
                </button>

            </form>

        </div>

    );

}



export default AllInputFieldsForm; 