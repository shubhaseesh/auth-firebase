import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { email, password, confirmPassword } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const { signup } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Passwords don't match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      navigate("/dashboard");
    } catch (error) {
      setLoading(false);
      setError("User already Exist !");
    }
  };

  return (
    <div className="flex justify-center w-full">
      <form
        className="bg-gray-100 shadow-md rounded px-8 m-28 pt-6 pb-8"
        onSubmit={onSubmit}
      >
        <p className="text-center">Sign up</p>
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
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
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
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="cnfPassword"
          >
            Confirm password
          </label>
          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Confirm Password"
              onChange={onChange}
              name="confirmPassword"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              SignUp
            </button>
          </div>
          <div className="flex justify-center">
            <p className="text-sm font-semibold mt-3 p-3">
              Already have an account ?
              <Link
                className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out mx-1"
                to="/login"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
        <p className="text-center text-red-600 font-bold text-lg">{error}</p>
      </form>
    </div>
  );
};

export default Signup;
