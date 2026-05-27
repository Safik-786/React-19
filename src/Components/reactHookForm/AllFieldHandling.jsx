import React from "react";
import { useForm } from "react-hook-form";


function AllInputFieldsFormReactHookForm() {
    const { register, handleSubmit } = useForm();

    const submitForm = (data) => {
        console.log("Form Data:", data);
    };


    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit(submitForm)}
                className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg space-y-8"
            >
<<<<<<< HEAD
                <h2 className="text-3xl font-bold text-center">
=======

                <h2 className="text-2xl font-semibold text-center mb-2">
>>>>>>> a8a4fe20dc98445a755bc5a07087d7bed59cf799
                    React Hook Form - All Input Types
                </h2>
                {/* basic text/number inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <label className="flex flex-col">
                      Name:
                      <input
                          {...register("name")}
                          type="text"
                          placeholder="Enter your name"
                          className="mt-1 border p-2 rounded focus:ring-2 focus:ring-blue-400"
                      />
                  </label>
                  <label className="flex flex-col">
                      Email:
                      <input
                          {...register("email")}
                          type="email"
                          placeholder="Enter your email"
                          className="mt-1 border p-2 rounded focus:ring-2 focus:ring-blue-400"
                      />
                  </label>
                  <label className="flex flex-col">
                      Password:
                      <input
                          {...register("password")}
                          type="password"
                          placeholder="Enter password"
                          className="mt-1 border p-2 rounded focus:ring-2 focus:ring-blue-400"
                      />
                  </label>

                  <label className="flex flex-col">
                      Age:
                      <input
                          {...register("age")}
                          type="number"
                          placeholder="Enter your age"
                          className="mt-1 border p-2 rounded focus:ring-2 focus:ring-blue-400"
                      />
                  </label>
                </div>



                {/* gender radios */}
                <fieldset className="space-y-2">
                    <legend className="text-lg font-medium">Gender</legend>
                    <div className="flex gap-6">
                        <label className="flex items-center">
                            <input
                                {...register("gender")}
                                type="radio"
                                value="male"
                                className="mr-2"
                            />
                            Male
                        </label>
                        <label className="flex items-center">
                            <input
                                {...register("gender")}
                                type="radio"
                                value="female"
                                className="mr-2"
                            />
                            Female
                        </label>
                        <label className="flex items-center">
                            <input
                                {...register("gender")}
                                type="radio"
                                value="other"
                                className="mr-2"
                            />
                            Other
                        </label>
                    </div>
                </fieldset>



                {/* CHECKBOX */}
                <label className="flex gap-2 items-center">
                    <input {...register("subscribe")} type="checkbox" />
                    Subscribe to newsletter
                </label>

                {/* skills checkboxes */}
                <div>
                    <h3 className="text-xl font-semibold mb-2">Select Your Skills</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'].map((skill) => (
                            <label key={skill} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    value={skill}
                                    {...register("skills")}
                                    className="rounded"
                                />
                                {skill}
                            </label>
                        ))}
                    </div>
                </div>

                {/* country/date/color/range inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <label className="flex flex-col">
                        Country:
                        <select
                            {...register("country")}
                            className="mt-1 border p-2 rounded focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="">Select your country</option>
                            <option value="india">India</option>
                            <option value="usa">USA</option>
                            <option value="uk">UK</option>
                            <option value="canada">Canada</option>
                        </select>
                    </label>
                    <label className="flex flex-col">
                        Date of Birth:
                        <input
                            {...register("dob")}
                            type="date"
                            className="mt-1 border p-2 rounded focus:ring-2 focus:ring-blue-400"
                        />
                    </label>
                    <label className="flex flex-col">
                        Favorite Color:
                        <input
                            {...register("color")}
                            type="color"
                            className="mt-1 w-16 h-8 p-0 border rounded"
                        />
                    </label>
                    <label className="flex flex-col">
                        Satisfaction Level:
                        <input
                            {...register("satisfaction")}
                            type="range"
                            min="0"
                            max="10"
                            className="mt-1"
                        />
                    </label>
                </div>

                {/* bio textarea */}
                <label className="flex flex-col">
                    Bio:
                    <textarea
                        {...register("bio")}
                        placeholder="Tell us something about yourself..."
                        rows="3"
                        className="mt-1 border p-2 rounded focus:ring-2 focus:ring-blue-400"
                    />
                </label>



                {/* file uploads */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <label className="flex flex-col">
                        Profile Picture:
                        <input
                            {...register("profilePic")}
                            type="file"
                            className="mt-1"
                        />
                    </label>
                    <label className="flex flex-col">
                        Upload Documents (Multiple):
                        <input
                            {...register("documents")}
                            type="file"
                            multiple
                            className="mt-1"
                        />
                    </label>
                </div>



                {/* submit */}
                <div className="text-center">
                  <button
                      type="submit"
                      className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition"
                  >
                      Submit
                  </button>
                </div>
            </form>
        </div>

    );

}



export default AllInputFieldsFormReactHookForm; 