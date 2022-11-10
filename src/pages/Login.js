import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { email, password } = formData;
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const { login } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/dashboard");
    } catch (error) {
      setLoading(false);
      setError("Failed to log in");
    }
  };

  return (
    <div className="flex justify-center w-full">
      <form
        className="bg-gray-100 shadow-md rounded px-8 m-28 pt-6 pb-8"
        onSubmit={onSubmit}
      >
        <p className="text-center">Log In</p>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            onChange={onChange}
            name="email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            onChange={onChange}
            name="password"
          />
        </div>

        <div className="flex items-center justify-between py-6">
          <button
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Log In
          </button>
          <Link to="/forgot-password">Forgot Password ?</Link>
        </div>
        <div className="flex justify-center">
          <p className="text-sm font-semibold mt-2">
            Need an account ?
            <Link
              className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out mx-1"
              to="/"
            >
              Sign Up
            </Link>
          </p>
        </div>
        <p className="text-center text-2xl text-red-500">{error}</p>
      </form>
    </div>
  );
};

export default Login;
