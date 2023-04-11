import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import Profile from "./components/profile/Profile";
const PublicRoute = ({ children }) => {
  const { loggedIn } = useContext(AuthContext); // Your hook to get login status

  if (loggedIn) {
    return (
      <>
        <Navigate exact to="/" />
        <Profile />
      </>
    );
  }
  return children;
};
export default PublicRoute;
