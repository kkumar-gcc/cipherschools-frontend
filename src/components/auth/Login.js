import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Input from "../Input";
import SecondaryButton from "../buttons/SecondaryButton";
import { toast } from "react-toastify";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  async function login(e) {
    e.preventDefault();
    try {
      const loginData = {
        email,
        password,
      };
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, loginData);
      await getLoggedIn();
      navigate("/");
    } catch (err) {
      toast.error(err.response.data.errorMessage, {
        position: toast.POSITION.TOP_LEFT,
      });
      console.error(err.response.data.errorMessage);
    }
  }

  return (
    <div className="mx-auto my-5">
      <div className="min-h-[calc(100vh-100px)] flex flex-col items-center pt-6 sm:pt-0 ">
        <div className="w-full sm:max-w-md mt-6 px-6 py-4 text-base shadow-md overflow-hidden sm:rounded-lg">
          <form onSubmit={login} className="mt-3">
            <Input
              value={email}
              type="email"
              name="femail"
              placeholder="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mb-3"
            />
            <Input
              value={password}
              type="password"
              name="password"
              placeholder="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mb-3"
            />
            <div className="mt-3">
              <SecondaryButton type="submit">Login</SecondaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
