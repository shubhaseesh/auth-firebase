import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className="flex justify-between flex-wrap bg-teal-500 p-6">
      <strong className="flex justify-center items-center text-4xl text-red-100 item-center">Auth Firebase</strong>
      <div className="flex flex-row">
        <div className="bg-white p-1 m-2 rounded-md w-22">
          <button onClick={()=>{navigate('/login')}}>Login</button>
        </div>
        <div className="bg-white p-1 m-2 rounded-md w-22">
          <button onClick={()=>{navigate('/')}}>Signup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
