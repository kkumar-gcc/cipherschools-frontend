import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Input from "../Input";
import SecondaryButton from "../buttons/SecondaryButton";

function Register() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        firstName,
        lastName,
        email,
        password,
        passwordVerify,
      };
      // await axios.post("http://localhost:5000/auth/", registerData);
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/register`,
        registerData
      );
      await getLoggedIn();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="mx-auto my-5">
      <div className="min-h-[calc(100vh-100px)] flex flex-col items-center pt-6 sm:pt-0 ">
        <div className="w-full sm:max-w-md mt-6 px-6 py-4 text-base shadow-md overflow-hidden sm:rounded-lg">
          {/* <MDBCardTitle>Register a new account</MDBCardTitle> */}
          <form onSubmit={register} className="mt-3">
            <Input
              value={firstName}
              type="text"
              name="firstName"
              placeholder="First name"
              label="First name"
              id="name-input"
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="mb-3"
            />
            <Input
              value={lastName}
              type="text"
              name="lastName"
              placeholder="Last Name"
              label="Last name"
              onChange={(e) => setLastName(e.target.value)}
              required
              className="mb-3"
            />
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
            <Input
              value={passwordVerify}
              type="password"
              name="passwordVerify"
              placeholder="password"
              label="Verify password"
              onChange={(e) => setPasswordVerify(e.target.value)}
              required
              className="mb-3"
            />
            <div className="mt-3">
              <SecondaryButton type="submit">Register</SecondaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
