import React from "react";

const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    return;
  };
  return (
    <div className="flex justify-center items-center text-left p-12">
      <form
        onSubmit={submitHandler}
        className="bg-slate-300 shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
      >
        <label htmlFor="email" className="mb-3 block text-base font-medium">
          Email
        </label>
        <div className="mb-6">
          <input type="email" placeholder="Email" />
        </div>
        <label htmlFor="password" className="mb-3 block text-base font-medium">
          Password
        </label>
        <div className="mb-6">
          <input type="password" placeholder="Password" />
        </div>
        <div>
          <button
            className="rounded bg-blue-700 text-white"
            type="submit"
            onClick={submitHandler}
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
