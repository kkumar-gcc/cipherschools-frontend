import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import PrimaryButton from "../buttons/PrimaryButton";

function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  async function logOut() {
    // await axios.get("http://localhost:5000/auth/logout");
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/logout`);
    await getLoggedIn();
    navigate("/login");
  }
  return (
    <PrimaryButton  onClick={logOut} type="button">
      Logout
    </PrimaryButton>
  );
}

export default LogOutBtn;
