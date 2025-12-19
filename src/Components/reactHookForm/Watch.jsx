import React from "react";
import { useForm } from "react-hook-form";

export default function PasswordStrengthChecker() {
  const { register, watch, handleSubmit } = useForm();

  // Watch the password field live
  const password = watch("password", "");

  console.log("password= ", password)

  // Determine password strength
  const getStrength = () => {
    if (!password) return "";
    if (password.length < 4  ) return "Weak";
    if (password.length < 8   ) return "Medium";
    if (password.length < 20 && password.includes("@")) return "Strong";
    return "Normal"
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Password:</label>
        <input
          type="password"
          {...register("password")}
          className="border p-2 w-full"
        />

        {/* Strength Message */}
        {password && (
          <p
            className={`mt-2 font-semibold ${
              getStrength() === "Weak"
                ? "text-red-500"
                : getStrength() === "Medium"
                ? "text-yellow-500"
                : "text-green-600"
            }`}
          >
            Strength: {getStrength()}
          </p>
        )}

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
