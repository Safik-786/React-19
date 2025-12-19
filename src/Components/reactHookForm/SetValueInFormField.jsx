import React from "react";
import { useForm } from "react-hook-form";

function SetValueInFormField() {
  const { register, handleSubmit, setValue } = useForm();

  const submitForm = (data) => {
    console.log("Form Data:", data);
  };

  // 📌 Fill sample/default data using setValue()
  const fillDefaultData = () => {
    setValue("name", "Safik MD");
    setValue("email", "safik@example.com");
    setValue("password", "12345678");
    setValue("age", 23);

    // Radio
    setValue("gender", "male");

    // Checkbox single
    setValue("subscribe", true);

    // Checkbox group (array)
    setValue("skills", ["HTML", "React", "Node.js"]);

    // Select dropdown
    setValue("country", "india");

    // Textarea
    setValue("bio", "I am a full-stack developer who loves React.");

    // Date
    setValue("dob", "2000-05-10");

    // Color
    setValue("color", "#ff5733");

    // Range
    setValue("satisfaction", 8);

    // File cannot be auto-filled (browser security)
    // setValue("profilePic", fake file) ❌
    // setValue("documents", fake file) ❌
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      {/* 🔵 DEFAULT FILL BUTTON */}
      <button
        onClick={fillDefaultData}
        className="absolute top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-md hover:bg-green-700"
      >
        Fill Default Data
      </button>

      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col gap-4 p-6 border rounded-lg bg-white shadow-md w-[500px]"
      >
        <h2 className="text-2xl font-semibold text-center mb-2">
          React Hook Form - All Input Types
        </h2>

        {/* TEXT FIELD */}
        <label className="flex flex-col">Name:
          <input {...register("name")} type="text" className="border p-2 rounded" />
        </label>

        {/* EMAIL */}
        <label className="flex flex-col">Email:
          <input {...register("email")} type="email" className="border p-2 rounded" />
        </label>

        {/* PASSWORD */}
        <label className="flex flex-col">Password:
          <input {...register("password")} type="password" className="border p-2 rounded" />
        </label>

        {/* NUMBER */}
        <label className="flex flex-col">Age:
          <input {...register("age")} type="number" className="border p-2 rounded" />
        </label>

        {/* RADIO BUTTON */}
        <fieldset className="flex flex-col border p-2 rounded">
          <legend>Gender:</legend>
          <label><input {...register("gender")} type="radio" value="male" /> Male</label>
          <label><input {...register("gender")} type="radio" value="female" /> Female</label>
          <label><input {...register("gender")} type="radio" value="other" /> Other</label>
        </fieldset>

        {/* CHECKBOX SINGLE */}
        <label className="flex gap-2 items-center">
          <input {...register("subscribe")} type="checkbox" /> Subscribe to newsletter
        </label>

        {/* CHECKBOX MULTIPLE */}
        <h2 className="text-xl font-semibold text-center">Select Your Skills</h2>
        <div className="grid grid-cols-3">
          {["HTML", "CSS", "JavaScript", "React", "Node.js"].map((skill) => (
            <label key={skill} className="flex gap-2 items-center">
              <input type="checkbox" value={skill} {...register("skills")} />
              {skill}
            </label>
          ))}
        </div>

        {/* SELECT COUNTRY */}
        <label className="flex flex-col">Country:
          <select {...register("country")} className="border p-2 rounded">
            <option value="">Select your country</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="canada">Canada</option>
          </select>
        </label>

        {/* TEXTAREA */}
        <label className="flex flex-col">Bio:
          <textarea {...register("bio")} rows="3" className="border p-2 rounded" />
        </label>

        {/* DATE */}
        <label className="flex flex-col">Date of Birth:
          <input {...register("dob")} type="date" className="border p-2 rounded" />
        </label>

        {/* COLOR */}
        <label className="flex flex-col">Favorite Color:
          <input {...register("color")} type="color" className="border p-2 rounded" />
        </label>

        {/* RANGE */}
        <label className="flex flex-col">Satisfaction Level:
          <input {...register("satisfaction")} type="range" min="0" max="10" />
        </label>

        {/* FILE INPUT */}
        <label className="flex flex-col">Profile Picture:
          <input {...register("profilePic")} type="file" className="border p-2 rounded" />
        </label>

        {/* MULTIPLE FILE INPUT */}
        <label className="flex flex-col">Upload Documents:
          <input {...register("documents")} type="file" multiple className="border p-2 rounded" />
        </label>

        {/* SUBMIT */}
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

export default SetValueInFormField;
