import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const RedirectIfAuthenticated = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (isAuthenticated && storedUser) {
    return <Navigate to="/home" replace />;
  }

  if (!isAuthenticated && storedUser) {
    return <Navigate to="/login" replace />;
  }

  

  return <Outlet />;
};

export default RedirectIfAuthenticated;
