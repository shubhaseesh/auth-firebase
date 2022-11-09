import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
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
  const { signup, currentUser } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Passwords don't match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password);
    } catch (error) {
      setLoading(false);
      setError("Failed to create a new account");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-left p-12">
      <p>Sign up</p>
      {error && <p>{error}</p>}
      {currentUser && JSON.stringify(currentUser)}
      <form
        className="bg-slate-300 shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={onSubmit}
      >
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Email
        </label>
        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            onChange={onChange}
            name="email"
          />
        </div>
        <label
          htmlFor="password"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Password
        </label>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            onChange={onChange}
            name="password"
          />
        </div>
        <label htmlFor="cnfPassword">Confirm password</label>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={onChange}
            name="confirmPassword"
          />
        </div>
        <div className="text-center lg:text-left">
          <button
            disabled={loading}
            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            SignUp
          </button>
          <p className="text-sm font-semibold mt-2 mb-2 pt-1">
            Already have an account ?
            <Link
              className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
              to="/login"
            >
              Log In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
