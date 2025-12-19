import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Guards/ProtectedRoute";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    password: ""
  });

  const isAuthenticated= useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [])

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // save to localStorage
    localStorage.setItem("user", JSON.stringify({ name: formData.name }));
    // redirect
    navigate("/dashboard");
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-8 rounded-xl shadow "
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1 text-sm font-semibold">
            Username
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-1 text-sm font-semibold">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
