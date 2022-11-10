import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = (props) => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const logoutHander = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="flex justify-center items-center flex-col border border-red-300 m-2 p-5">
      <span className="inline-flex m-1 justify-between p-2">
        <p className="mx-2 font-bold">User :</p>
        {currentUser ? <h3>{currentUser.email}</h3> : <p>User not available</p>}
      </span>
      <div className="flex justify-center items-center">
        <button className="bg-blue-500 text-white w-28 h-8 text-lg" onClick={logoutHander}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
