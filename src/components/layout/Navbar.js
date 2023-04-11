import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";
import SecondaryButton from "../buttons/SecondaryButton";
import PrimaryButton from "../buttons/PrimaryButton";

function Navbar() {
  const { loggedIn } = useContext(AuthContext);
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    // <MDBNavbar expand="lg" className="shadow-sm" light bgColor="white">
    //   <MDBContainer fluid>
    //     <MDBNavbarBrand href="/">CipherSchools</MDBNavbarBrand>
    //     <MDBNavbarToggler
    //       type="button"
    //       data-target="#navbarRightAlignExample"
    //       aria-controls="navbarRightAlignExample"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //       onClick={() => setShowNavRight(!showNavRight)}
    //     >
    //       <MDBIcon icon="bars" fas />
    //     </MDBNavbarToggler>

    //     <MDBCollapse navbar show={showNavRight}>
    //       <MDBNavbarNav
    //         right
    //         fullWidth={false}
    //         className="mr-auto mb-2 mb-lg-0"
    //       ></MDBNavbarNav>
    // {loggedIn === false && (
    //   <>
    //     <Link to="/login">
    //       <MDBBtn outline color="dark" className="me-2">
    //         Login
    //       </MDBBtn>
    //     </Link>
    //     <Link to="/register">
    //       <MDBBtn color="dark" className="me-2 shadow-sm" type="button">
    //         Register
    //       </MDBBtn>
    //     </Link>
    //   </>
    // )}
    // {loggedIn === true && (
    //   <>
    //     {/* <Link to="/customer">Customers</Link> */}

    //     <LogOutBtn />
    //   </>
    // )}
    //     </MDBCollapse>
    //   </MDBContainer>
    // </MDBNavbar>
    <nav className="bg-skin-base border-b border-gray-100 z-10 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex w-full">
            <div className="shrink-0 flex items-center">
              <img
                className="w-12 h-12 mr-2"
                src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
                alt="cipherschools's logo"
              />
              <a href="/" className="text-2xl font-extrabold">
                CipherSchools
              </a>
            </div>
            <div className="hidden lg:flex sm:items-center sm:ml-6 flex-1 justify-end">
              {loggedIn === false && (
                <>
                  <div className="flex items-center ml-6 ">
                    <Link to="/login">
                      <PrimaryButton>Login</PrimaryButton>
                    </Link>
                  </div>
                  <div className="flex items-center ml-6 ">
                    <Link to="/register">
                      <SecondaryButton>Register</SecondaryButton>
                    </Link>
                  </div>
                </>
              )}
              {loggedIn === true && (
                <>
                  <LogOutBtn />
                </>
              )}
            </div>
            <div className="-mr-2 flex items-center lg:hidden flex-1 justify-end">
              <button
                onClick={() => setShowNavRight(!showNavRight)}
                className="ml-3 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    className={showNavRight ? "hidden" : "inline-flex"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    className={showNavRight ? "inline-flex" : "hidden"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div
                className={`${
                  showNavRight ? "block" : "hidden"
                } lg:hidden fixed top-20 right-0 left-0 bottom-0 z-50 overflow-y-scroll h-[calc(100%-5rem)] overflow-x-hidden w-screen  py-5   bg-skin-base border-t border-gray-200 dark:border-gray-700 dark:bg-gray-800`}
              >
                <div className="pt-2 pb-3 space-y-1 flex justify-start py-3 font-medium translate-x-1 px-[4%]">
                  {loggedIn === false && (
                    <>
                      <div className="flex items-center">
                        <Link to="/login">
                          <PrimaryButton>Login</PrimaryButton>
                        </Link>
                      </div>
                      <div className="flex items-center ml-4 ">
                        <Link to="/register">
                          <SecondaryButton>Register</SecondaryButton>
                        </Link>
                      </div>
                    </>
                  )}
                  {loggedIn === true && (
                    <>
                      <LogOutBtn />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
