import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoutes = ({ ele, path, ...rest }) => {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/signup" />;
};

export default PrivateRoutes;
